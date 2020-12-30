import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { DebugJson } from '../../../components/DebugJson';
import gql from 'graphql-tag';
import { Loader } from '../../../components/Loader';
import { GradeItem } from './GradeItem';
import { useArrayNavigator } from '../../../hooks/useArrayNavigator';
import { FullScreen } from '../../../components/FullScreen';
import { Button } from '../../../components/Button';
import { CardBox } from '../../../components/CardBox';
import { Chip } from '../../../components/Chip';
import { BackButton } from '../../../components/BackButton';
import {
  useGetPracticeToStudentForGradingQuery,
  useTriggerRefreshGradesMutation,
} from '../../../generated/graphql';
import {
  mapIntoFrontInterpretation,
  PracticeToStudentForGradingFrontEdit,
} from './GradeItem/Mapper';

gql`
  query getPracticeToStudentForGrading($courseId: uuid!, $practiceId: uuid!) {
    practice_to_course(
      where: {
        course_id: { _eq: $courseId }
        _and: { practice_id: { _eq: $practiceId } }
      }
    ) {
      course {
        student_to_courses_aggregate {
          aggregate {
            count
          }
        }
      }
    }

    practice_yield(
      where: {
        practice: {
          practice_to_courses: {
            course_id: { _eq: $courseId }
            _and: { practice_id: { _eq: $practiceId } }
          }
        }
      }
    ) {
      id
      name
      practice_to_student_yields(
        where: {
          submited: { _eq: true }
          _and: {
            practice_to_student: {
              practice_to_course: {
                course_id: { _eq: $courseId }
                _and: { practice_id: { _eq: $practiceId } }
              }
            }
          }
        }
      ) {
        ...PracticeToStudentYieldForGrading
      }
      practice_yield_expected_outputs {
        id
        code_lang
        expected
        git_path
        method
        practice_yield_id
        practice_yield_grade_metrics(order_by: { created_at: desc }) {
          id
          name
          points
          feedbacks
          practice_to_student_grade_metrics_aggregate(
            where: {
              practice_to_student_yield: {
                practice_to_student: {
                  practice_to_course: {
                    course_id: { _eq: $courseId }
                    _and: { practice_id: { _eq: $practiceId } }
                  }
                }
              }
            }
          ) {
            aggregate {
              count
            }
            nodes {
              practice_to_student_yield_id
              practice_yield_grade_metric_id
            }
          }
        }
      }
    }
  }

  fragment PracticeToStudentYieldForGrading on practice_to_student_yield {
    practiceToStudentYieldId: id
    gitea_org_and_repo
    value
    practice_yield_id
    practice_to_student_grade_metrics {
      ...PracticeToStudentGradeMetricForGrading
    }
  }
  fragment PracticeToStudentGradeMetricForGrading on practice_to_student_grade_metric {
    id
    feedback
    created_at
    percent_grade
    practice_yield_grade_metric_id
    updated_at
  }

  mutation triggerRefreshGrades($practice_id: uuid!, $course_id: uuid!) {
    refreshGrades(course_id: $course_id, practice_id: $practice_id) {
      affected_rows
    }
  }
`;

export const Grading = () => {
  const { tpId, promoId } = useParams();
  const [
    { data, fetching, error },
    refresh,
  ] = useGetPracticeToStudentForGradingQuery({
    variables: {
      practiceId: tpId,
      courseId: promoId,
    },
    // pollInterval: 30000,
    // requestPolicy: 'network-only',
  });
  const [, refreshGrades] = useTriggerRefreshGradesMutation();
  const mappedValuesForFront = useMemo<
    Array<PracticeToStudentForGradingFrontEdit>
  >(() => {
    if (!data) {
      return [];
    }
    return mapIntoFrontInterpretation(data.practice_yield);
  }, [data]);
  const { item, goNext, isLast, isFirst, goPrev } = useArrayNavigator(
    mappedValuesForFront,
  );

  const isAllDone = useMemo<boolean>(() => {
    if (!data) {
      return false;
    }

    return data.practice_yield
      .map((itm) => {
        const studentYieldNumber = itm.practice_to_student_yields.length;
        return itm.practice_yield_expected_outputs
          .map((itm) =>
            itm.practice_yield_grade_metrics
              .map(
                (dati) =>
                  dati.practice_to_student_grade_metrics_aggregate.aggregate
                    ?.count === studentYieldNumber,
              )
              .reduce((prev, curr) => prev && curr, true),
          )
          .reduce((prev, curr) => prev && curr, true);
      })
      .reduce((prev, curr) => prev && curr, true);
  }, [data]);

  if (fetching || !item) {
    return <Loader />;
  }

  if (error) {
    return <DebugJson json={error} />;
  }
  return (
    <div>
      <FullScreen
        onStateChange={(newValue) => {
          if (!newValue) {
            refresh();
          }
        }}
      >
        <div className="flex justify-between items-center content-center pb-4">
          <div className="flex items-center content-center">
            <BackButton backTo="../.." className="mr-2" />
            {isAllDone ? 'All done' : 'Not all done'}
            {isAllDone ? (
              <Button
                onClick={() =>
                  refreshGrades({ course_id: promoId, practice_id: tpId })
                }
                className="ml-4"
              >
                Refresh grades
              </Button>
            ) : null}
          </div>
          <FullScreen.Trigger>
            <Button>Start grading</Button>
          </FullScreen.Trigger>
        </div>
        <FullScreen.Body>
          {/*

          <GradeItem
            data={item}
            goNext={goNext}
            goPrev={goPrev}
            isFirstBlock={isFirst}
            isLastBlock={isLast}
          />
            */}

          <GradeItem
            data={item}
            goNext={goNext}
            goPrev={goPrev}
            isFirstBlock={isFirst}
            isLastBlock={isLast}
          />
        </FullScreen.Body>
      </FullScreen>
      <div className="grid grid-cols-2 gap-4">
        {data?.practice_yield.map((itm) => {
          const studentYieldNumber = itm.practice_to_student_yields.length;
          return (
            <CardBox>
              <div className="font-semibold text-xl pb-2">{itm.name}</div>
              <div className="space-y-2">
                {itm.practice_yield_expected_outputs.map((yieldMetric) => {
                  // const ammountStudentOutpout = yieldMetric;
                  return (
                    <>
                      {yieldMetric.practice_yield_grade_metrics.map(
                        (metric) => {
                          const yieldGradeMetricAmount =
                            metric.practice_to_student_grade_metrics_aggregate
                              .aggregate?.count ?? 0;
                          const isFilled =
                            studentYieldNumber === yieldGradeMetricAmount;
                          return (
                            <div className="flex">
                              <div className="w-1/2">{metric.name}</div>
                              <div className="w-1/2 flex">
                                <div className="w-1/2">
                                  {yieldGradeMetricAmount} /{' '}
                                  {studentYieldNumber}
                                </div>
                                <div className="w-1/2">
                                  <Chip
                                    variant={isFilled ? 'success' : 'error'}
                                  >
                                    {isFilled ? 'Done' : 'Todo'}
                                  </Chip>
                                </div>
                              </div>
                            </div>
                          );
                        },
                      )}
                    </>
                  );
                })}
              </div>
            </CardBox>
          );
        })}
      </div>
    </div>
  );
};

/*

                <div className="grid grid-cols-3">
*/
/*
export const Grading = () => {
  return <div>WIP</div>;
};
 */
export default Grading;
