import React from 'react';
import { useNavigate } from 'react-router';
import { PageHead } from '../../components/PageHead';
import { Button } from '../../components/Button';
import gql from 'graphql-tag';
import {
  PracticeListItemFragment,
  useListPracticeQuery,
} from '../../generated/graphql';
import { Wip } from '../../components/Wip';
import { Loader } from '../../components/Loader';
import { CardBox } from '../../components/CardBox';
import { Table } from '../../components/Table';
import { Chip } from '../../components/Chip';
import { format } from 'date-fns/fp';
import { isBefore } from 'date-fns';
import { useTimeInterval } from '../../hooks/useTimeInterval';

gql`
  fragment PracticeListItem on practice {
    id
    title
    practice_to_courses {
      id
      can_student_see_feedback
      can_student_see_grade
      close_date
      open_date
      course {
        name
        years
      }
    }
  }

  query ListPractice {
    practice(order_by: { created_at: desc }) {
      ...PracticeListItem
    }
  }
`;

const formatForDisplay = format('Pp');

const TpCardPromoState: React.FC<{ open: Date; close: Date }> = ({
  open,
  close,
}) => {
  useTimeInterval(100);
  const now = new Date();
  if (isBefore(now, open)) {
    return <Chip variant="error">Not open yet</Chip>;
  }
  if (isBefore(now, close)) {
    return <Chip variant="success">Open</Chip>;
  }
  return <Chip variant="error">Closed</Chip>;
};

const TpCard: React.FC<{ data: PracticeListItemFragment }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <CardBox key={data.id} onClick={() => navigate(`./${data.id}`)}>
      <div className="font-bold text-lg">{data.title}</div>
      {data.practice_to_courses && (
        <div className="pt-4">
          <Table>
            <Table.TableHead
              items={['Promotion', 'Open date', 'Close date', 'State']}
            />
            <Table.TBody items={data.practice_to_courses}>
              {({
                open_date,
                close_date,
                course,
                can_student_see_feedback,
                can_student_see_grade,
              }) => {
                const openDate = new Date(open_date);
                const closeDate = new Date(close_date);

                return (
                  <>
                    <Table.Td
                      isMainInfo
                    >{`${course.name} - ${course.years}`}</Table.Td>
                    <Table.Td>{formatForDisplay(openDate)}</Table.Td>
                    <Table.Td>{formatForDisplay(closeDate)}</Table.Td>
                    <Table.Td>
                      <TpCardPromoState open={openDate} close={closeDate} />
                    </Table.Td>
                  </>
                );
              }}
            </Table.TBody>
          </Table>
        </div>
      )}
    </CardBox>
  );
};

export const TpList = () => {
  const navigate = useNavigate();
  const [{ data }] = useListPracticeQuery();

  return (
    <>
      <PageHead className="mb-4">
        <div className="flex content-between justify-between items-center">
          <span>TPs</span>
          <Button onClick={() => navigate('./new')}>Add new TP</Button>
        </div>
      </PageHead>
      <Loader visible={false}>
        <div className="flex flex-col space-y-4">
          {data &&
            data.practice.map((data) => <TpCard data={data} key={data.id} />)}
        </div>
      </Loader>
      <Wip todo={['Practice detail']} />
    </>
  );
};
