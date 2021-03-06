import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  json: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type FillEmptyYieldsOutput = {
  __typename?: 'FillEmptyYieldsOutput';
  affected_rows: Scalars['Int'];
};

export type GetGitFileDataOutput = {
  __typename?: 'GetGitFileDataOutput';
  content: Scalars['String'];
  download_url: Scalars['String'];
  encoding: Scalars['String'];
  git_url: Scalars['String'];
  html_url: Scalars['String'];
  name: Scalars['String'];
  path: Scalars['String'];
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
  sha: Scalars['String'];
  size: Scalars['Int'];
  submodule_git_url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  url: Scalars['String'];
};

export type GitFileInput = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

export type InsertStudentAnswerOutput = {
  __typename?: 'InsertStudentAnswerOutput';
  id: Scalars['uuid'];
  student_output?: Maybe<Scalars['jsonb']>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type RefreshGradesOutput = {
  __typename?: 'RefreshGradesOutput';
  affected_rows: Scalars['Int'];
};

export type SendStudentClaimMailOutput = {
  __typename?: 'SendStudentClaimMailOutput';
  nmbMailSent: Scalars['Int'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SubmitHandoffOutput = {
  __typename?: 'SubmitHandoffOutput';
  status: Scalars['String'];
};

export type YieldForHandoff = {
  value: Scalars['String'];
  yieldId: Scalars['uuid'];
};

/** columns and relationships of "course" */
export type Course = {
  __typename?: 'course';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  practice_to_courses: Array<Practice_To_Course>;
  /** An aggregated array relationship */
  practice_to_courses_aggregate: Practice_To_Course_Aggregate;
  /** An array relationship */
  student_to_courses: Array<Student_To_Course>;
  /** An aggregated array relationship */
  student_to_courses_aggregate: Student_To_Course_Aggregate;
  updated_at: Scalars['timestamptz'];
  years: Scalars['String'];
};

/** columns and relationships of "course" */
export type CoursePractice_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CoursePractice_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CourseStudent_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** columns and relationships of "course" */
export type CourseStudent_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** aggregated selection of "course" */
export type Course_Aggregate = {
  __typename?: 'course_aggregate';
  aggregate?: Maybe<Course_Aggregate_Fields>;
  nodes: Array<Course>;
};

/** aggregate fields of "course" */
export type Course_Aggregate_Fields = {
  __typename?: 'course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Course_Max_Fields>;
  min?: Maybe<Course_Min_Fields>;
};

/** aggregate fields of "course" */
export type Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course" */
export type Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Max_Order_By>;
  min?: Maybe<Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "course" */
export type Course_Arr_Rel_Insert_Input = {
  data: Array<Course_Insert_Input>;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "course". All fields are combined with a logical 'AND'. */
export type Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Course_Bool_Exp>>>;
  _not?: Maybe<Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Course_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice_to_courses?: Maybe<Practice_To_Course_Bool_Exp>;
  student_to_courses?: Maybe<Student_To_Course_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  years?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "course" */
export enum Course_Constraint {
  /** unique or primary key constraint */
  PromotionNameYearsKey = 'promotion_name_years_key',
  /** unique or primary key constraint */
  PromotionPkey = 'promotion_pkey',
}

/** input type for inserting data into table "course" */
export type Course_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_to_courses?: Maybe<Practice_To_Course_Arr_Rel_Insert_Input>;
  student_to_courses?: Maybe<Student_To_Course_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Course_Max_Fields = {
  __typename?: 'course_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "course" */
export type Course_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Min_Fields = {
  __typename?: 'course_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "course" */
export type Course_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** response of any mutation on the table "course" */
export type Course_Mutation_Response = {
  __typename?: 'course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Course>;
};

/** input type for inserting object relation for remote table "course" */
export type Course_Obj_Rel_Insert_Input = {
  data: Course_Insert_Input;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** on conflict condition type for table "course" */
export type Course_On_Conflict = {
  constraint: Course_Constraint;
  update_columns: Array<Course_Update_Column>;
  where?: Maybe<Course_Bool_Exp>;
};

/** ordering options when selecting data from "course" */
export type Course_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_to_courses_aggregate?: Maybe<Practice_To_Course_Aggregate_Order_By>;
  student_to_courses_aggregate?: Maybe<Student_To_Course_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  years?: Maybe<Order_By>;
};

/** primary key columns input for table: "course" */
export type Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "course" */
export enum Course_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Years = 'years',
}

/** input type for updating data in table "course" */
export type Course_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  years?: Maybe<Scalars['String']>;
};

/** update columns of table "course" */
export enum Course_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Years = 'years',
}

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type LinkStudentToUserOutput = {
  __typename?: 'linkStudentToUserOutput';
  ok: Scalars['Boolean'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "user" */
  deleteUser?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** delete data from the table: "course" */
  delete_course?: Maybe<Course_Mutation_Response>;
  /** delete single row from the table: "course" */
  delete_course_by_pk?: Maybe<Course>;
  /** delete data from the table: "practice" */
  delete_practice?: Maybe<Practice_Mutation_Response>;
  /** delete single row from the table: "practice" */
  delete_practice_by_pk?: Maybe<Practice>;
  /** delete data from the table: "practice_to_course" */
  delete_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** delete single row from the table: "practice_to_course" */
  delete_practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** delete data from the table: "practice_to_student" */
  delete_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** delete single row from the table: "practice_to_student" */
  delete_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** delete data from the table: "practice_to_student_grade_metric" */
  delete_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** delete single row from the table: "practice_to_student_grade_metric" */
  delete_practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** delete data from the table: "practice_to_student_yield" */
  delete_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_to_student_yield" */
  delete_practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** delete data from the table: "practice_yield" */
  delete_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** delete single row from the table: "practice_yield" */
  delete_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** delete data from the table: "practice_yield_expected_output" */
  delete_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** delete single row from the table: "practice_yield_expected_output" */
  delete_practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** delete data from the table: "practice_yield_expected_output_types" */
  delete_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** delete single row from the table: "practice_yield_expected_output_types" */
  delete_practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** delete data from the table: "practice_yield_grade_metric" */
  delete_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** delete single row from the table: "practice_yield_grade_metric" */
  delete_practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** delete data from the table: "practice_yield_type" */
  delete_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** delete single row from the table: "practice_yield_type" */
  delete_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** delete data from the table: "student" */
  delete_student?: Maybe<Student_Mutation_Response>;
  /** delete single row from the table: "student" */
  delete_student_by_pk?: Maybe<Student>;
  /** delete data from the table: "student_to_course" */
  delete_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** delete single row from the table: "student_to_course" */
  delete_student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** perform the action: "fillEmptyYields" */
  fillEmptyYields?: Maybe<FillEmptyYieldsOutput>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** insert data into the table: "course" */
  insert_course?: Maybe<Course_Mutation_Response>;
  /** insert a single row into the table: "course" */
  insert_course_one?: Maybe<Course>;
  /** insert data into the table: "practice" */
  insert_practice?: Maybe<Practice_Mutation_Response>;
  /** insert a single row into the table: "practice" */
  insert_practice_one?: Maybe<Practice>;
  /** insert data into the table: "practice_to_course" */
  insert_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** insert a single row into the table: "practice_to_course" */
  insert_practice_to_course_one?: Maybe<Practice_To_Course>;
  /** insert data into the table: "practice_to_student" */
  insert_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** insert data into the table: "practice_to_student_grade_metric" */
  insert_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_grade_metric" */
  insert_practice_to_student_grade_metric_one?: Maybe<Practice_To_Student_Grade_Metric>;
  /** insert a single row into the table: "practice_to_student" */
  insert_practice_to_student_one?: Maybe<Practice_To_Student>;
  /** insert data into the table: "practice_to_student_yield" */
  insert_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** insert a single row into the table: "practice_to_student_yield" */
  insert_practice_to_student_yield_one?: Maybe<Practice_To_Student_Yield>;
  /** insert data into the table: "practice_yield" */
  insert_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** insert data into the table: "practice_yield_expected_output" */
  insert_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_expected_output" */
  insert_practice_yield_expected_output_one?: Maybe<Practice_Yield_Expected_Output>;
  /** insert data into the table: "practice_yield_expected_output_types" */
  insert_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_expected_output_types" */
  insert_practice_yield_expected_output_types_one?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** insert data into the table: "practice_yield_grade_metric" */
  insert_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_grade_metric" */
  insert_practice_yield_grade_metric_one?: Maybe<Practice_Yield_Grade_Metric>;
  /** insert a single row into the table: "practice_yield" */
  insert_practice_yield_one?: Maybe<Practice_Yield>;
  /** insert data into the table: "practice_yield_type" */
  insert_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** insert a single row into the table: "practice_yield_type" */
  insert_practice_yield_type_one?: Maybe<Practice_Yield_Type>;
  /** insert data into the table: "student" */
  insert_student?: Maybe<Student_Mutation_Response>;
  /** insert a single row into the table: "student" */
  insert_student_one?: Maybe<Student>;
  /** insert data into the table: "student_to_course" */
  insert_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** insert a single row into the table: "student_to_course" */
  insert_student_to_course_one?: Maybe<Student_To_Course>;
  /** perform the action: "linkStudentToUser" */
  linkStudentToUser?: Maybe<LinkStudentToUserOutput>;
  /** perform the action: "refreshGrades" */
  refreshGrades?: Maybe<RefreshGradesOutput>;
  /** perform the action: "sendStudentClaimMail" */
  sendStudentClaimMail?: Maybe<SendStudentClaimMailOutput>;
  /** perform the action: "submitHandoff" */
  submitHandoff?: Maybe<SubmitHandoffOutput>;
  /** update data of the table: "user" */
  updateUser?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update data of the table: "course" */
  update_course?: Maybe<Course_Mutation_Response>;
  /** update single row of the table: "course" */
  update_course_by_pk?: Maybe<Course>;
  /** update data of the table: "practice" */
  update_practice?: Maybe<Practice_Mutation_Response>;
  /** update single row of the table: "practice" */
  update_practice_by_pk?: Maybe<Practice>;
  /** update data of the table: "practice_to_course" */
  update_practice_to_course?: Maybe<Practice_To_Course_Mutation_Response>;
  /** update single row of the table: "practice_to_course" */
  update_practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** update data of the table: "practice_to_student" */
  update_practice_to_student?: Maybe<Practice_To_Student_Mutation_Response>;
  /** update single row of the table: "practice_to_student" */
  update_practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** update data of the table: "practice_to_student_grade_metric" */
  update_practice_to_student_grade_metric?: Maybe<Practice_To_Student_Grade_Metric_Mutation_Response>;
  /** update single row of the table: "practice_to_student_grade_metric" */
  update_practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** update data of the table: "practice_to_student_yield" */
  update_practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Mutation_Response>;
  /** update single row of the table: "practice_to_student_yield" */
  update_practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** update data of the table: "practice_yield" */
  update_practice_yield?: Maybe<Practice_Yield_Mutation_Response>;
  /** update single row of the table: "practice_yield" */
  update_practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** update data of the table: "practice_yield_expected_output" */
  update_practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Mutation_Response>;
  /** update single row of the table: "practice_yield_expected_output" */
  update_practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** update data of the table: "practice_yield_expected_output_types" */
  update_practice_yield_expected_output_types?: Maybe<Practice_Yield_Expected_Output_Types_Mutation_Response>;
  /** update single row of the table: "practice_yield_expected_output_types" */
  update_practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** update data of the table: "practice_yield_grade_metric" */
  update_practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Mutation_Response>;
  /** update single row of the table: "practice_yield_grade_metric" */
  update_practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** update data of the table: "practice_yield_type" */
  update_practice_yield_type?: Maybe<Practice_Yield_Type_Mutation_Response>;
  /** update single row of the table: "practice_yield_type" */
  update_practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** update data of the table: "student" */
  update_student?: Maybe<Student_Mutation_Response>;
  /** update single row of the table: "student" */
  update_student_by_pk?: Maybe<Student>;
  /** update data of the table: "student_to_course" */
  update_student_to_course?: Maybe<Student_To_Course_Mutation_Response>;
  /** update single row of the table: "student_to_course" */
  update_student_to_course_by_pk?: Maybe<Student_To_Course>;
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_CourseArgs = {
  where: Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_PracticeArgs = {
  where: Practice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_CourseArgs = {
  where: Practice_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_StudentArgs = {
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Grade_MetricArgs = {
  where: Practice_To_Student_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_YieldArgs = {
  where: Practice_To_Student_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_To_Student_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_YieldArgs = {
  where: Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_OutputArgs = {
  where: Practice_Yield_Expected_Output_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_TypesArgs = {
  where: Practice_Yield_Expected_Output_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Grade_MetricArgs = {
  where: Practice_Yield_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_TypeArgs = {
  where: Practice_Yield_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Practice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** mutation root */
export type Mutation_RootDelete_StudentArgs = {
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Student_To_CourseArgs = {
  where: Student_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Student_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootFillEmptyYieldsArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CourseArgs = {
  objects: Array<Course_Insert_Input>;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Course_OneArgs = {
  object: Course_Insert_Input;
  on_conflict?: Maybe<Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PracticeArgs = {
  objects: Array<Practice_Insert_Input>;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_OneArgs = {
  object: Practice_Insert_Input;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_CourseArgs = {
  objects: Array<Practice_To_Course_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Course_OneArgs = {
  object: Practice_To_Course_Insert_Input;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_StudentArgs = {
  objects: Array<Practice_To_Student_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_MetricArgs = {
  objects: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Grade_Metric_OneArgs = {
  object: Practice_To_Student_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_OneArgs = {
  object: Practice_To_Student_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_YieldArgs = {
  objects: Array<Practice_To_Student_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_To_Student_Yield_OneArgs = {
  object: Practice_To_Student_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_YieldArgs = {
  objects: Array<Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_OutputArgs = {
  objects: Array<Practice_Yield_Expected_Output_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_OneArgs = {
  object: Practice_Yield_Expected_Output_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_TypesArgs = {
  objects: Array<Practice_Yield_Expected_Output_Types_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Expected_Output_Types_OneArgs = {
  object: Practice_Yield_Expected_Output_Types_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Grade_MetricArgs = {
  objects: Array<Practice_Yield_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Grade_Metric_OneArgs = {
  object: Practice_Yield_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_OneArgs = {
  object: Practice_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_TypeArgs = {
  objects: Array<Practice_Yield_Type_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Practice_Yield_Type_OneArgs = {
  object: Practice_Yield_Type_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StudentArgs = {
  objects: Array<Student_Insert_Input>;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_OneArgs = {
  object: Student_Insert_Input;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_CourseArgs = {
  objects: Array<Student_To_Course_Insert_Input>;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Student_To_Course_OneArgs = {
  object: Student_To_Course_Insert_Input;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLinkStudentToUserArgs = {
  linkId: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootRefreshGradesArgs = {
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootSendStudentClaimMailArgs = {
  studentsIds: Array<Maybe<Scalars['uuid']>>;
};

/** mutation root */
export type Mutation_RootSubmitHandoffArgs = {
  practiceToPromotionId: Scalars['uuid'];
  yields: Array<YieldForHandoff>;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CourseArgs = {
  _set?: Maybe<Course_Set_Input>;
  where: Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Course_By_PkArgs = {
  _set?: Maybe<Course_Set_Input>;
  pk_columns: Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PracticeArgs = {
  _set?: Maybe<Practice_Set_Input>;
  where: Practice_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_By_PkArgs = {
  _set?: Maybe<Practice_Set_Input>;
  pk_columns: Practice_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_CourseArgs = {
  _set?: Maybe<Practice_To_Course_Set_Input>;
  where: Practice_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Course_By_PkArgs = {
  _set?: Maybe<Practice_To_Course_Set_Input>;
  pk_columns: Practice_To_Course_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_StudentArgs = {
  _append?: Maybe<Practice_To_Student_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  where: Practice_To_Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_By_PkArgs = {
  _append?: Maybe<Practice_To_Student_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Set_Input>;
  pk_columns: Practice_To_Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Grade_MetricArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Metric_Set_Input>;
  where: Practice_To_Student_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Grade_Metric_By_PkArgs = {
  _append?: Maybe<Practice_To_Student_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_To_Student_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_To_Student_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_To_Student_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_To_Student_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_To_Student_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_To_Student_Grade_Metric_Set_Input>;
  pk_columns: Practice_To_Student_Grade_Metric_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_YieldArgs = {
  _set?: Maybe<Practice_To_Student_Yield_Set_Input>;
  where: Practice_To_Student_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_To_Student_Yield_By_PkArgs = {
  _set?: Maybe<Practice_To_Student_Yield_Set_Input>;
  pk_columns: Practice_To_Student_Yield_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_YieldArgs = {
  _append?: Maybe<Practice_Yield_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Delete_Key_Input>;
  _prepend?: Maybe<Practice_Yield_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Set_Input>;
  where: Practice_Yield_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_By_PkArgs = {
  _append?: Maybe<Practice_Yield_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Delete_Key_Input>;
  _prepend?: Maybe<Practice_Yield_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Set_Input>;
  pk_columns: Practice_Yield_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_OutputArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Set_Input>;
  where: Practice_Yield_Expected_Output_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Set_Input>;
  pk_columns: Practice_Yield_Expected_Output_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_TypesArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Types_Set_Input>;
  where: Practice_Yield_Expected_Output_Types_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Expected_Output_Types_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Expected_Output_Types_Set_Input>;
  pk_columns: Practice_Yield_Expected_Output_Types_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Grade_MetricArgs = {
  _append?: Maybe<Practice_Yield_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_Yield_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_Yield_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Grade_Metric_Set_Input>;
  where: Practice_Yield_Grade_Metric_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Grade_Metric_By_PkArgs = {
  _append?: Maybe<Practice_Yield_Grade_Metric_Append_Input>;
  _delete_at_path?: Maybe<Practice_Yield_Grade_Metric_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Practice_Yield_Grade_Metric_Delete_Elem_Input>;
  _delete_key?: Maybe<Practice_Yield_Grade_Metric_Delete_Key_Input>;
  _inc?: Maybe<Practice_Yield_Grade_Metric_Inc_Input>;
  _prepend?: Maybe<Practice_Yield_Grade_Metric_Prepend_Input>;
  _set?: Maybe<Practice_Yield_Grade_Metric_Set_Input>;
  pk_columns: Practice_Yield_Grade_Metric_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_TypeArgs = {
  _set?: Maybe<Practice_Yield_Type_Set_Input>;
  where: Practice_Yield_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Practice_Yield_Type_By_PkArgs = {
  _set?: Maybe<Practice_Yield_Type_Set_Input>;
  pk_columns: Practice_Yield_Type_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StudentArgs = {
  _set?: Maybe<Student_Set_Input>;
  where: Student_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_By_PkArgs = {
  _set?: Maybe<Student_Set_Input>;
  pk_columns: Student_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_CourseArgs = {
  _set?: Maybe<Student_To_Course_Set_Input>;
  where: Student_To_Course_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Student_To_Course_By_PkArgs = {
  _set?: Maybe<Student_To_Course_Set_Input>;
  pk_columns: Student_To_Course_Pk_Columns_Input;
};

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "practice" */
export type Practice = {
  __typename?: 'practice';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  practice_to_courses: Array<Practice_To_Course>;
  /** An aggregated array relationship */
  practice_to_courses_aggregate: Practice_To_Course_Aggregate;
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice" */
export type PracticePractice_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice" */
export type PracticePractice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice" */
export type Practice_Aggregate = {
  __typename?: 'practice_aggregate';
  aggregate?: Maybe<Practice_Aggregate_Fields>;
  nodes: Array<Practice>;
};

/** aggregate fields of "practice" */
export type Practice_Aggregate_Fields = {
  __typename?: 'practice_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Max_Fields>;
  min?: Maybe<Practice_Min_Fields>;
};

/** aggregate fields of "practice" */
export type Practice_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice" */
export type Practice_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Max_Order_By>;
  min?: Maybe<Practice_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice" */
export type Practice_Arr_Rel_Insert_Input = {
  data: Array<Practice_Insert_Input>;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice". All fields are combined with a logical 'AND'. */
export type Practice_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Bool_Exp>>>;
  _not?: Maybe<Practice_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_courses?: Maybe<Practice_To_Course_Bool_Exp>;
  practice_yields?: Maybe<Practice_Yield_Bool_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice" */
export enum Practice_Constraint {
  /** unique or primary key constraint */
  PracticePkey = 'practice_pkey',
  /** unique or primary key constraint */
  PracticeTitleKey = 'practice_title_key',
}

/** input type for inserting data into table "practice" */
export type Practice_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_courses?: Maybe<Practice_To_Course_Arr_Rel_Insert_Input>;
  practice_yields?: Maybe<Practice_Yield_Arr_Rel_Insert_Input>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Max_Fields = {
  __typename?: 'practice_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice" */
export type Practice_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Min_Fields = {
  __typename?: 'practice_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice" */
export type Practice_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice" */
export type Practice_Mutation_Response = {
  __typename?: 'practice_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice>;
};

/** input type for inserting object relation for remote table "practice" */
export type Practice_Obj_Rel_Insert_Input = {
  data: Practice_Insert_Input;
  on_conflict?: Maybe<Practice_On_Conflict>;
};

/** on conflict condition type for table "practice" */
export type Practice_On_Conflict = {
  constraint: Practice_Constraint;
  update_columns: Array<Practice_Update_Column>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** ordering options when selecting data from "practice" */
export type Practice_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_courses_aggregate?: Maybe<Practice_To_Course_Aggregate_Order_By>;
  practice_yields_aggregate?: Maybe<Practice_Yield_Aggregate_Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice" */
export type Practice_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice" */
export enum Practice_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice" */
export type Practice_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_Course = {
  __typename?: 'practice_to_course';
  can_student_see_feedback: Scalars['Boolean'];
  can_student_see_grade: Scalars['Boolean'];
  close_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  course: Course;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  gitea_org_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "is_open_practice_to_course_fn" */
  is_open?: Maybe<Scalars['Boolean']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_CoursePractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "practice_to_course" */
export type Practice_To_CoursePractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** aggregated selection of "practice_to_course" */
export type Practice_To_Course_Aggregate = {
  __typename?: 'practice_to_course_aggregate';
  aggregate?: Maybe<Practice_To_Course_Aggregate_Fields>;
  nodes: Array<Practice_To_Course>;
};

/** aggregate fields of "practice_to_course" */
export type Practice_To_Course_Aggregate_Fields = {
  __typename?: 'practice_to_course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Course_Max_Fields>;
  min?: Maybe<Practice_To_Course_Min_Fields>;
};

/** aggregate fields of "practice_to_course" */
export type Practice_To_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_course" */
export type Practice_To_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Course_Max_Order_By>;
  min?: Maybe<Practice_To_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_course" */
export type Practice_To_Course_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Course_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_to_course". All fields are combined with a logical 'AND'. */
export type Practice_To_Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Course_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Course_Bool_Exp>>>;
  can_student_see_feedback?: Maybe<Boolean_Comparison_Exp>;
  can_student_see_grade?: Maybe<Boolean_Comparison_Exp>;
  close_date?: Maybe<Timestamptz_Comparison_Exp>;
  course?: Maybe<Course_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  open_date?: Maybe<Timestamptz_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_course" */
export enum Practice_To_Course_Constraint {
  /** unique or primary key constraint */
  PracticeToPromotionPkey = 'practice_to_promotion_pkey',
  /** unique or primary key constraint */
  PracticeToPromotionPromotionIdPracticeIdKey = 'practice_to_promotion_promotion_id_practice_id_key',
}

/** input type for inserting data into table "practice_to_course" */
export type Practice_To_Course_Insert_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  close_date?: Maybe<Scalars['timestamptz']>;
  course?: Maybe<Course_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Course_Max_Fields = {
  __typename?: 'practice_to_course_max_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_course" */
export type Practice_To_Course_Max_Order_By = {
  close_date?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Course_Min_Fields = {
  __typename?: 'practice_to_course_min_fields';
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_course" */
export type Practice_To_Course_Min_Order_By = {
  close_date?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_course" */
export type Practice_To_Course_Mutation_Response = {
  __typename?: 'practice_to_course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Course>;
};

/** input type for inserting object relation for remote table "practice_to_course" */
export type Practice_To_Course_Obj_Rel_Insert_Input = {
  data: Practice_To_Course_Insert_Input;
  on_conflict?: Maybe<Practice_To_Course_On_Conflict>;
};

/** on conflict condition type for table "practice_to_course" */
export type Practice_To_Course_On_Conflict = {
  constraint: Practice_To_Course_Constraint;
  update_columns: Array<Practice_To_Course_Update_Column>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_course" */
export type Practice_To_Course_Order_By = {
  can_student_see_feedback?: Maybe<Order_By>;
  can_student_see_grade?: Maybe<Order_By>;
  close_date?: Maybe<Order_By>;
  course?: Maybe<Course_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  gitea_org_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  open_date?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<Practice_To_Student_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_course" */
export type Practice_To_Course_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_course" */
export enum Practice_To_Course_Select_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgName = 'gitea_org_name',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'open_date',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_course" */
export type Practice_To_Course_Set_Input = {
  can_student_see_feedback?: Maybe<Scalars['Boolean']>;
  can_student_see_grade?: Maybe<Scalars['Boolean']>;
  close_date?: Maybe<Scalars['timestamptz']>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  open_date?: Maybe<Scalars['timestamptz']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "practice_to_course" */
export enum Practice_To_Course_Update_Column {
  /** column name */
  CanStudentSeeFeedback = 'can_student_see_feedback',
  /** column name */
  CanStudentSeeGrade = 'can_student_see_grade',
  /** column name */
  CloseDate = 'close_date',
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgName = 'gitea_org_name',
  /** column name */
  Id = 'id',
  /** column name */
  OpenDate = 'open_date',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_to_student" */
export type Practice_To_Student = {
  __typename?: 'practice_to_student';
  course_practice_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_course: Practice_To_Course;
  /** An array relationship */
  practice_to_student_yields: Array<Practice_To_Student_Yield>;
  /** An aggregated array relationship */
  practice_to_student_yields_aggregate: Practice_To_Student_Yield_Aggregate;
  /** An object relationship */
  student: Student;
  student_id: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentGrade_DetailArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentPractice_To_Student_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_to_student" */
export type Practice_To_StudentPractice_To_Student_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_to_student" */
export type Practice_To_Student_Aggregate = {
  __typename?: 'practice_to_student_aggregate';
  aggregate?: Maybe<Practice_To_Student_Aggregate_Fields>;
  nodes: Array<Practice_To_Student>;
};

/** aggregate fields of "practice_to_student" */
export type Practice_To_Student_Aggregate_Fields = {
  __typename?: 'practice_to_student_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Max_Fields>;
  min?: Maybe<Practice_To_Student_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Variance_Fields>;
};

/** aggregate fields of "practice_to_student" */
export type Practice_To_Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student" */
export type Practice_To_Student_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student" */
export type Practice_To_Student_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Avg_Fields = {
  __typename?: 'practice_to_student_avg_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student" */
export type Practice_To_Student_Avg_Order_By = {
  grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Bool_Exp>>>;
  course_practice_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  grade?: Maybe<Float8_Comparison_Exp>;
  grade_detail?: Maybe<Jsonb_Comparison_Exp>;
  graded?: Maybe<Boolean_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_course?: Maybe<Practice_To_Course_Bool_Exp>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  submited?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student" */
export enum Practice_To_Student_Constraint {
  /** unique or primary key constraint */
  PracticeToStudentPkey = 'practice_to_student_pkey',
  /** unique or primary key constraint */
  PracticeToStudentStudentIdPromotionPracticeIdKey = 'practice_to_student_student_id_promotion_practice_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_detail?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
  grade_detail?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
  grade_detail?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric = {
  __typename?: 'practice_to_student_grade_metric';
  created_at: Scalars['timestamptz'];
  feedback: Scalars['jsonb'];
  id: Scalars['uuid'];
  percent_grade: Scalars['numeric'];
  /** An object relationship */
  practice_to_student_yield: Practice_To_Student_Yield;
  practice_to_student_yield_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield_grade_metric: Practice_Yield_Grade_Metric;
  practice_yield_grade_metric_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_MetricFeedbackArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate = {
  __typename?: 'practice_to_student_grade_metric_aggregate';
  aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Grade_Metric>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_Fields = {
  __typename?: 'practice_to_student_grade_metric_aggregate_fields';
  avg?: Maybe<Practice_To_Student_Grade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Grade_Metric_Max_Fields>;
  min?: Maybe<Practice_To_Student_Grade_Metric_Min_Fields>;
  stddev?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_To_Student_Grade_Metric_Sum_Fields>;
  var_pop?: Maybe<Practice_To_Student_Grade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_To_Student_Grade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Practice_To_Student_Grade_Metric_Variance_Fields>;
};

/** aggregate fields of "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Practice_To_Student_Grade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Grade_Metric_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Grade_Metric_Min_Order_By>;
  stddev?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_To_Student_Grade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_To_Student_Grade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Practice_To_Student_Grade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_To_Student_Grade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Practice_To_Student_Grade_Metric_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Metric_Append_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** aggregate avg on columns */
export type Practice_To_Student_Grade_Metric_Avg_Fields = {
  __typename?: 'practice_to_student_grade_metric_avg_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Avg_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_to_student_grade_metric". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Grade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  feedback?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  percent_grade?: Maybe<Numeric_Comparison_Exp>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  practice_to_student_yield_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  practice_yield_grade_metric_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Constraint {
  /** unique or primary key constraint */
  PracticeToStudentGradeMetricPkey = 'practice_to_student_grade_metric_pkey',
  /** unique or primary key constraint */
  PracticeToStudentGradeMetricPracticeYieldGradeMetricId = 'practice_to_student_grade_metric_practice_yield_grade_metric_id',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_To_Student_Grade_Metric_Delete_At_Path_Input = {
  feedback?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_To_Student_Grade_Metric_Delete_Elem_Input = {
  feedback?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_To_Student_Grade_Metric_Delete_Key_Input = {
  feedback?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Inc_Input = {
  percent_grade?: Maybe<Scalars['numeric']>;
};

/** input type for inserting data into table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Obj_Rel_Insert_Input>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Obj_Rel_Insert_Input>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Grade_Metric_Max_Fields = {
  __typename?: 'practice_to_student_grade_metric_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Grade_Metric_Min_Fields = {
  __typename?: 'practice_to_student_grade_metric_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Mutation_Response = {
  __typename?: 'practice_to_student_grade_metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Grade_Metric>;
};

/** input type for inserting object relation for remote table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Grade_Metric_On_Conflict>;
};

/** on conflict condition type for table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_On_Conflict = {
  constraint: Practice_To_Student_Grade_Metric_Constraint;
  update_columns: Array<Practice_To_Student_Grade_Metric_Update_Column>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  percent_grade?: Maybe<Order_By>;
  practice_to_student_yield?: Maybe<Practice_To_Student_Yield_Order_By>;
  practice_to_student_yield_id?: Maybe<Order_By>;
  practice_yield_grade_metric?: Maybe<Practice_Yield_Grade_Metric_Order_By>;
  practice_yield_grade_metric_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Grade_Metric_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percent_grade',
  /** column name */
  PracticeToStudentYieldId = 'practice_to_student_yield_id',
  /** column name */
  PracticeYieldGradeMetricId = 'practice_yield_grade_metric_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  percent_grade?: Maybe<Scalars['numeric']>;
  practice_to_student_yield_id?: Maybe<Scalars['uuid']>;
  practice_yield_grade_metric_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_pop_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Pop_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Grade_Metric_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_grade_metric_stddev_samp_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Stddev_Samp_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Grade_Metric_Sum_Fields = {
  __typename?: 'practice_to_student_grade_metric_sum_fields';
  percent_grade?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Sum_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student_grade_metric" */
export enum Practice_To_Student_Grade_Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  PercentGrade = 'percent_grade',
  /** column name */
  PracticeToStudentYieldId = 'practice_to_student_yield_id',
  /** column name */
  PracticeYieldGradeMetricId = 'practice_yield_grade_metric_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_To_Student_Grade_Metric_Var_Pop_Fields = {
  __typename?: 'practice_to_student_grade_metric_var_pop_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Var_Pop_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Grade_Metric_Var_Samp_Fields = {
  __typename?: 'practice_to_student_grade_metric_var_samp_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Var_Samp_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Grade_Metric_Variance_Fields = {
  __typename?: 'practice_to_student_grade_metric_variance_fields';
  percent_grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student_grade_metric" */
export type Practice_To_Student_Grade_Metric_Variance_Order_By = {
  percent_grade?: Maybe<Order_By>;
};

/** input type for incrementing integer column in table "practice_to_student" */
export type Practice_To_Student_Inc_Input = {
  grade?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "practice_to_student" */
export type Practice_To_Student_Insert_Input = {
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_course?: Maybe<Practice_To_Course_Obj_Rel_Insert_Input>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Arr_Rel_Insert_Input>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Max_Fields = {
  __typename?: 'practice_to_student_max_fields';
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_to_student" */
export type Practice_To_Student_Max_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Min_Fields = {
  __typename?: 'practice_to_student_min_fields';
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_to_student" */
export type Practice_To_Student_Min_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student" */
export type Practice_To_Student_Mutation_Response = {
  __typename?: 'practice_to_student_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student>;
};

/** input type for inserting object relation for remote table "practice_to_student" */
export type Practice_To_Student_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_On_Conflict>;
};

/** on conflict condition type for table "practice_to_student" */
export type Practice_To_Student_On_Conflict = {
  constraint: Practice_To_Student_Constraint;
  update_columns: Array<Practice_To_Student_Update_Column>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student" */
export type Practice_To_Student_Order_By = {
  course_practice_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  feedback?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  grade_detail?: Maybe<Order_By>;
  graded?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_course?: Maybe<Practice_To_Course_Order_By>;
  practice_to_student_yields_aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student" */
export type Practice_To_Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_To_Student_Prepend_Input = {
  feedback?: Maybe<Scalars['jsonb']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_to_student" */
export enum Practice_To_Student_Select_Column {
  /** column name */
  CoursePracticeId = 'course_practice_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_to_student" */
export type Practice_To_Student_Set_Input = {
  course_practice_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['jsonb']>;
  grade?: Maybe<Scalars['float8']>;
  grade_detail?: Maybe<Scalars['jsonb']>;
  graded?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_To_Student_Stddev_Fields = {
  __typename?: 'practice_to_student_stddev_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_To_Student_Stddev_Pop_Fields = {
  __typename?: 'practice_to_student_stddev_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_To_Student_Stddev_Samp_Fields = {
  __typename?: 'practice_to_student_stddev_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_to_student" */
export type Practice_To_Student_Stddev_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_To_Student_Sum_Fields = {
  __typename?: 'practice_to_student_sum_fields';
  grade?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "practice_to_student" */
export type Practice_To_Student_Sum_Order_By = {
  grade?: Maybe<Order_By>;
};

/** update columns of table "practice_to_student" */
export enum Practice_To_Student_Update_Column {
  /** column name */
  CoursePracticeId = 'course_practice_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Grade = 'grade',
  /** column name */
  GradeDetail = 'grade_detail',
  /** column name */
  Graded = 'graded',
  /** column name */
  Id = 'id',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_To_Student_Var_Pop_Fields = {
  __typename?: 'practice_to_student_var_pop_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_to_student" */
export type Practice_To_Student_Var_Pop_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_To_Student_Var_Samp_Fields = {
  __typename?: 'practice_to_student_var_samp_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_to_student" */
export type Practice_To_Student_Var_Samp_Order_By = {
  grade?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_To_Student_Variance_Fields = {
  __typename?: 'practice_to_student_variance_fields';
  grade?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_to_student" */
export type Practice_To_Student_Variance_Order_By = {
  grade?: Maybe<Order_By>;
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_Yield = {
  __typename?: 'practice_to_student_yield';
  created_at: Scalars['timestamptz'];
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An object relationship */
  practice_to_student: Practice_To_Student;
  /** An array relationship */
  practice_to_student_grade_metrics: Array<Practice_To_Student_Grade_Metric>;
  /** An aggregated array relationship */
  practice_to_student_grade_metrics_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  practice_to_student_id: Scalars['uuid'];
  /** An object relationship */
  practice_yield: Practice_Yield;
  practice_yield_id: Scalars['uuid'];
  submited: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_YieldPractice_To_Student_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_to_student_yield" */
export type Practice_To_Student_YieldPractice_To_Student_Grade_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** aggregated selection of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate = {
  __typename?: 'practice_to_student_yield_aggregate';
  aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Fields>;
  nodes: Array<Practice_To_Student_Yield>;
};

/** aggregate fields of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_Fields = {
  __typename?: 'practice_to_student_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_To_Student_Yield_Max_Fields>;
  min?: Maybe<Practice_To_Student_Yield_Min_Fields>;
};

/** aggregate fields of "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_To_Student_Yield_Max_Order_By>;
  min?: Maybe<Practice_To_Student_Yield_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Arr_Rel_Insert_Input = {
  data: Array<Practice_To_Student_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_to_student_yield". All fields are combined with a logical 'AND'. */
export type Practice_To_Student_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_To_Student_Yield_Bool_Exp>>>;
  _not?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_To_Student_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  gitea_org_and_repo?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_student?: Maybe<Practice_To_Student_Bool_Exp>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  practice_to_student_id?: Maybe<Uuid_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  submited?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Constraint {
  /** unique or primary key constraint */
  StudentPracticeYieldPkey = 'student_practice_yield_pkey',
  /** unique or primary key constraint */
  StudentPracticeYieldPracticeYieldIdPracticeToStudenKey = 'student_practice_yield_practice_yield_id_practice_to_studen_key',
}

/** input type for inserting data into table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student?: Maybe<Practice_To_Student_Obj_Rel_Insert_Input>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Practice_To_Student_Yield_Max_Fields = {
  __typename?: 'practice_to_student_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_To_Student_Yield_Min_Fields = {
  __typename?: 'practice_to_student_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Mutation_Response = {
  __typename?: 'practice_to_student_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_To_Student_Yield>;
};

/** input type for inserting object relation for remote table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Obj_Rel_Insert_Input = {
  data: Practice_To_Student_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_To_Student_Yield_On_Conflict>;
};

/** on conflict condition type for table "practice_to_student_yield" */
export type Practice_To_Student_Yield_On_Conflict = {
  constraint: Practice_To_Student_Yield_Constraint;
  update_columns: Array<Practice_To_Student_Yield_Update_Column>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "practice_to_student_yield" */
export type Practice_To_Student_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  gitea_org_and_repo?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_to_student?: Maybe<Practice_To_Student_Order_By>;
  practice_to_student_grade_metrics_aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Order_By>;
  practice_to_student_id?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  submited?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_to_student_yield" */
export type Practice_To_Student_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgAndRepo = 'gitea_org_and_repo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "practice_to_student_yield" */
export type Practice_To_Student_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  gitea_org_and_repo?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_to_student_id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  submited?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_to_student_yield" */
export enum Practice_To_Student_Yield_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GiteaOrgAndRepo = 'gitea_org_and_repo',
  /** column name */
  Id = 'id',
  /** column name */
  PracticeToStudentId = 'practice_to_student_id',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  Submited = 'submited',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
}

/** update columns of table "practice" */
export enum Practice_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_yield" */
export type Practice_Yield = {
  __typename?: 'practice_yield';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  meta?: Maybe<Scalars['jsonb']>;
  method: Practice_Yield_Type_Enum;
  name: Scalars['String'];
  /** An object relationship */
  practice: Practice;
  practice_id: Scalars['uuid'];
  /** An array relationship */
  practice_to_student_yields: Array<Practice_To_Student_Yield>;
  /** An aggregated array relationship */
  practice_to_student_yields_aggregate: Practice_To_Student_Yield_Aggregate;
  /** An array relationship */
  practice_yield_expected_outputs: Array<Practice_Yield_Expected_Output>;
  /** An aggregated array relationship */
  practice_yield_expected_outputs_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** An object relationship */
  practice_yield_type: Practice_Yield_Type;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldMetaArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_To_Student_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_To_Student_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_Yield_Expected_OutputsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** columns and relationships of "practice_yield" */
export type Practice_YieldPractice_Yield_Expected_Outputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** aggregated selection of "practice_yield" */
export type Practice_Yield_Aggregate = {
  __typename?: 'practice_yield_aggregate';
  aggregate?: Maybe<Practice_Yield_Aggregate_Fields>;
  nodes: Array<Practice_Yield>;
};

/** aggregate fields of "practice_yield" */
export type Practice_Yield_Aggregate_Fields = {
  __typename?: 'practice_yield_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Max_Fields>;
  min?: Maybe<Practice_Yield_Min_Fields>;
};

/** aggregate fields of "practice_yield" */
export type Practice_Yield_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield" */
export type Practice_Yield_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Max_Order_By>;
  min?: Maybe<Practice_Yield_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Append_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield" */
export type Practice_Yield_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meta?: Maybe<Jsonb_Comparison_Exp>;
  method?: Maybe<Practice_Yield_Type_Enum_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  practice?: Maybe<Practice_Bool_Exp>;
  practice_id?: Maybe<Uuid_Comparison_Exp>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield" */
export enum Practice_Yield_Constraint {
  /** unique or primary key constraint */
  PracticeYieldPkey = 'practice_yield_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_Yield_Delete_At_Path_Input = {
  meta?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_Yield_Delete_Elem_Input = {
  meta?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_Yield_Delete_Key_Input = {
  meta?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output = {
  __typename?: 'practice_yield_expected_output';
  code_lang?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  method: Practice_Yield_Expected_Output_Types_Enum;
  /** An object relationship */
  practice_yield: Practice_Yield;
  /** An object relationship */
  practice_yield_expected_output_type: Practice_Yield_Expected_Output_Types;
  /** An array relationship */
  practice_yield_grade_metrics: Array<Practice_Yield_Grade_Metric>;
  /** An aggregated array relationship */
  practice_yield_grade_metrics_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  practice_yield_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_OutputPractice_Yield_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_yield_expected_output" */
export type Practice_Yield_Expected_OutputPractice_Yield_Grade_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** aggregated selection of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate = {
  __typename?: 'practice_yield_expected_output_aggregate';
  aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Expected_Output>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_Fields = {
  __typename?: 'practice_yield_expected_output_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Expected_Output_Max_Fields>;
  min?: Maybe<Practice_Yield_Expected_Output_Min_Fields>;
};

/** aggregate fields of "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Expected_Output_Max_Order_By>;
  min?: Maybe<Practice_Yield_Expected_Output_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Expected_Output_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Expected_Output_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Bool_Exp>>>;
  code_lang?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expected?: Maybe<String_Comparison_Exp>;
  git_path?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum_Comparison_Exp>;
  practice_yield?: Maybe<Practice_Yield_Bool_Exp>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  practice_yield_grade_metrics?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  practice_yield_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Constraint {
  /** unique or primary key constraint */
  PracticeYieldExpectedOutputPkey = 'practice_yield_expected_output_pkey',
  /** unique or primary key constraint */
  PracticeYieldExpectedOutputPracticeYieldIdGitPathMetho = 'practice_yield_expected_output_practice_yield_id_git_path_metho',
}

/** input type for inserting data into table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Insert_Input = {
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  practice_yield?: Maybe<Practice_Yield_Obj_Rel_Insert_Input>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Obj_Rel_Insert_Input>;
  practice_yield_grade_metrics?: Maybe<Practice_Yield_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Expected_Output_Max_Fields = {
  __typename?: 'practice_yield_expected_output_max_fields';
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Max_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Expected_Output_Min_Fields = {
  __typename?: 'practice_yield_expected_output_min_fields';
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Min_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Mutation_Response = {
  __typename?: 'practice_yield_expected_output_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Expected_Output>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Expected_Output_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_On_Conflict = {
  constraint: Practice_Yield_Expected_Output_Constraint;
  update_columns: Array<Practice_Yield_Expected_Output_Update_Column>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Order_By = {
  code_lang?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  expected?: Maybe<Order_By>;
  git_path?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  method?: Maybe<Order_By>;
  practice_yield?: Maybe<Practice_Yield_Order_By>;
  practice_yield_expected_output_type?: Maybe<Practice_Yield_Expected_Output_Types_Order_By>;
  practice_yield_grade_metrics_aggregate?: Maybe<Practice_Yield_Grade_Metric_Aggregate_Order_By>;
  practice_yield_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Select_Column {
  /** column name */
  CodeLang = 'code_lang',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'git_path',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield_expected_output" */
export type Practice_Yield_Expected_Output_Set_Input = {
  code_lang?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expected?: Maybe<Scalars['String']>;
  git_path?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  method?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  practice_yield_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types = {
  __typename?: 'practice_yield_expected_output_types';
  name: Scalars['String'];
  /** An array relationship */
  practice_yield_expected_outputs: Array<Practice_Yield_Expected_Output>;
  /** An aggregated array relationship */
  practice_yield_expected_outputs_aggregate: Practice_Yield_Expected_Output_Aggregate;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_TypesPractice_Yield_Expected_OutputsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** columns and relationships of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_TypesPractice_Yield_Expected_Outputs_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** aggregated selection of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate = {
  __typename?: 'practice_yield_expected_output_types_aggregate';
  aggregate?: Maybe<Practice_Yield_Expected_Output_Types_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Expected_Output_Types>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_Fields = {
  __typename?: 'practice_yield_expected_output_types_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Expected_Output_Types_Max_Fields>;
  min?: Maybe<Practice_Yield_Expected_Output_Types_Min_Fields>;
};

/** aggregate fields of "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Expected_Output_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Expected_Output_Types_Max_Order_By>;
  min?: Maybe<Practice_Yield_Expected_Output_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Expected_Output_Types_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_expected_output_types". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Expected_Output_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** unique or primary key constraints on table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Constraint {
  /** unique or primary key constraint */
  PracticeGradeMetricTypePkey = 'practice_grade_metric_type_pkey',
}

export enum Practice_Yield_Expected_Output_Types_Enum {
  CompareCodeFile = 'COMPARE_CODE_FILE',
  CompareGitFile = 'COMPARE_GIT_FILE',
  LinkOpen = 'LINK_OPEN',
  Manual = 'MANUAL',
  ManualGitFileReview = 'MANUAL_GIT_FILE_REVIEW',
  ShowGitFile = 'SHOW_GIT_FILE',
  ShowGitLog = 'SHOW_GIT_LOG',
}

/** expression to compare columns of type practice_yield_expected_output_types_enum. All fields are combined with logical 'AND'. */
export type Practice_Yield_Expected_Output_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  _in?: Maybe<Array<Practice_Yield_Expected_Output_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Practice_Yield_Expected_Output_Types_Enum>;
  _nin?: Maybe<Array<Practice_Yield_Expected_Output_Types_Enum>>;
};

/** input type for inserting data into table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Practice_Yield_Expected_Output_Types_Max_Fields = {
  __typename?: 'practice_yield_expected_output_types_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Expected_Output_Types_Min_Fields = {
  __typename?: 'practice_yield_expected_output_types_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Mutation_Response = {
  __typename?: 'practice_yield_expected_output_types_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Expected_Output_Types>;
};

/** input type for inserting object relation for remote table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Expected_Output_Types_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Expected_Output_Types_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_On_Conflict = {
  constraint: Practice_Yield_Expected_Output_Types_Constraint;
  update_columns: Array<Practice_Yield_Expected_Output_Types_Update_Column>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Order_By = {
  name?: Maybe<Order_By>;
  practice_yield_expected_outputs_aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Order_By>;
};

/** primary key columns input for table: "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_expected_output_types" */
export type Practice_Yield_Expected_Output_Types_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_yield_expected_output_types" */
export enum Practice_Yield_Expected_Output_Types_Update_Column {
  /** column name */
  Name = 'name',
}

/** update columns of table "practice_yield_expected_output" */
export enum Practice_Yield_Expected_Output_Update_Column {
  /** column name */
  CodeLang = 'code_lang',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expected = 'expected',
  /** column name */
  GitPath = 'git_path',
  /** column name */
  Id = 'id',
  /** column name */
  Method = 'method',
  /** column name */
  PracticeYieldId = 'practice_yield_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric = {
  __typename?: 'practice_yield_grade_metric';
  created_at: Scalars['timestamptz'];
  expected_yield_id: Scalars['uuid'];
  feedbacks: Scalars['jsonb'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  points: Scalars['Int'];
  /** An array relationship */
  practice_to_student_grade_metrics: Array<Practice_To_Student_Grade_Metric>;
  /** An aggregated array relationship */
  practice_to_student_grade_metrics_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** An object relationship */
  practice_yield_expected_output: Practice_Yield_Expected_Output;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricFeedbacksArgs = {
  path?: Maybe<Scalars['String']>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricPractice_To_Student_Grade_MetricsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** columns and relationships of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_MetricPractice_To_Student_Grade_Metrics_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** aggregated selection of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate = {
  __typename?: 'practice_yield_grade_metric_aggregate';
  aggregate?: Maybe<Practice_Yield_Grade_Metric_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Grade_Metric>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_Fields = {
  __typename?: 'practice_yield_grade_metric_aggregate_fields';
  avg?: Maybe<Practice_Yield_Grade_Metric_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Grade_Metric_Max_Fields>;
  min?: Maybe<Practice_Yield_Grade_Metric_Min_Fields>;
  stddev?: Maybe<Practice_Yield_Grade_Metric_Stddev_Fields>;
  stddev_pop?: Maybe<Practice_Yield_Grade_Metric_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Practice_Yield_Grade_Metric_Stddev_Samp_Fields>;
  sum?: Maybe<Practice_Yield_Grade_Metric_Sum_Fields>;
  var_pop?: Maybe<Practice_Yield_Grade_Metric_Var_Pop_Fields>;
  var_samp?: Maybe<Practice_Yield_Grade_Metric_Var_Samp_Fields>;
  variance?: Maybe<Practice_Yield_Grade_Metric_Variance_Fields>;
};

/** aggregate fields of "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Aggregate_Order_By = {
  avg?: Maybe<Practice_Yield_Grade_Metric_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Grade_Metric_Max_Order_By>;
  min?: Maybe<Practice_Yield_Grade_Metric_Min_Order_By>;
  stddev?: Maybe<Practice_Yield_Grade_Metric_Stddev_Order_By>;
  stddev_pop?: Maybe<Practice_Yield_Grade_Metric_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Practice_Yield_Grade_Metric_Stddev_Samp_Order_By>;
  sum?: Maybe<Practice_Yield_Grade_Metric_Sum_Order_By>;
  var_pop?: Maybe<Practice_Yield_Grade_Metric_Var_Pop_Order_By>;
  var_samp?: Maybe<Practice_Yield_Grade_Metric_Var_Samp_Order_By>;
  variance?: Maybe<Practice_Yield_Grade_Metric_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Grade_Metric_Append_Input = {
  feedbacks?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Grade_Metric_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** aggregate avg on columns */
export type Practice_Yield_Grade_Metric_Avg_Fields = {
  __typename?: 'practice_yield_grade_metric_avg_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Avg_Order_By = {
  points?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "practice_yield_grade_metric". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Grade_Metric_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Grade_Metric_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Grade_Metric_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expected_yield_id?: Maybe<Uuid_Comparison_Exp>;
  feedbacks?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  points?: Maybe<Int_Comparison_Exp>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Constraint {
  /** unique or primary key constraint */
  PracticeGradeMetricPkey = 'practice_grade_metric_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Practice_Yield_Grade_Metric_Delete_At_Path_Input = {
  feedbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Practice_Yield_Grade_Metric_Delete_Elem_Input = {
  feedbacks?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Practice_Yield_Grade_Metric_Delete_Key_Input = {
  feedbacks?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Inc_Input = {
  points?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  feedbacks?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  practice_to_student_grade_metrics?: Maybe<Practice_To_Student_Grade_Metric_Arr_Rel_Insert_Input>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Grade_Metric_Max_Fields = {
  __typename?: 'practice_yield_grade_metric_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Grade_Metric_Min_Fields = {
  __typename?: 'practice_yield_grade_metric_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Mutation_Response = {
  __typename?: 'practice_yield_grade_metric_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Grade_Metric>;
};

/** input type for inserting object relation for remote table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Grade_Metric_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Grade_Metric_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_On_Conflict = {
  constraint: Practice_Yield_Grade_Metric_Constraint;
  update_columns: Array<Practice_Yield_Grade_Metric_Update_Column>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Order_By = {
  created_at?: Maybe<Order_By>;
  expected_yield_id?: Maybe<Order_By>;
  feedbacks?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  points?: Maybe<Order_By>;
  practice_to_student_grade_metrics_aggregate?: Maybe<Practice_To_Student_Grade_Metric_Aggregate_Order_By>;
  practice_yield_expected_output?: Maybe<Practice_Yield_Expected_Output_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Grade_Metric_Prepend_Input = {
  feedbacks?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpectedYieldId = 'expected_yield_id',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expected_yield_id?: Maybe<Scalars['uuid']>;
  feedbacks?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Practice_Yield_Grade_Metric_Stddev_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Practice_Yield_Grade_Metric_Stddev_Pop_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Practice_Yield_Grade_Metric_Stddev_Samp_Fields = {
  __typename?: 'practice_yield_grade_metric_stddev_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Stddev_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Practice_Yield_Grade_Metric_Sum_Fields = {
  __typename?: 'practice_yield_grade_metric_sum_fields';
  points?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Sum_Order_By = {
  points?: Maybe<Order_By>;
};

/** update columns of table "practice_yield_grade_metric" */
export enum Practice_Yield_Grade_Metric_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpectedYieldId = 'expected_yield_id',
  /** column name */
  Feedbacks = 'feedbacks',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Practice_Yield_Grade_Metric_Var_Pop_Fields = {
  __typename?: 'practice_yield_grade_metric_var_pop_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Var_Pop_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Practice_Yield_Grade_Metric_Var_Samp_Fields = {
  __typename?: 'practice_yield_grade_metric_var_samp_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Var_Samp_Order_By = {
  points?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Practice_Yield_Grade_Metric_Variance_Fields = {
  __typename?: 'practice_yield_grade_metric_variance_fields';
  points?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "practice_yield_grade_metric" */
export type Practice_Yield_Grade_Metric_Variance_Order_By = {
  points?: Maybe<Order_By>;
};

/** input type for inserting data into table "practice_yield" */
export type Practice_Yield_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  method?: Maybe<Practice_Yield_Type_Enum>;
  name?: Maybe<Scalars['String']>;
  practice?: Maybe<Practice_Obj_Rel_Insert_Input>;
  practice_id?: Maybe<Scalars['uuid']>;
  practice_to_student_yields?: Maybe<Practice_To_Student_Yield_Arr_Rel_Insert_Input>;
  practice_yield_expected_outputs?: Maybe<Practice_Yield_Expected_Output_Arr_Rel_Insert_Input>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Practice_Yield_Max_Fields = {
  __typename?: 'practice_yield_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "practice_yield" */
export type Practice_Yield_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Min_Fields = {
  __typename?: 'practice_yield_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "practice_yield" */
export type Practice_Yield_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield" */
export type Practice_Yield_Mutation_Response = {
  __typename?: 'practice_yield_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield>;
};

/** input type for inserting object relation for remote table "practice_yield" */
export type Practice_Yield_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_On_Conflict>;
};

/** on conflict condition type for table "practice_yield" */
export type Practice_Yield_On_Conflict = {
  constraint: Practice_Yield_Constraint;
  update_columns: Array<Practice_Yield_Update_Column>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield" */
export type Practice_Yield_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meta?: Maybe<Order_By>;
  method?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  practice?: Maybe<Practice_Order_By>;
  practice_id?: Maybe<Order_By>;
  practice_to_student_yields_aggregate?: Maybe<Practice_To_Student_Yield_Aggregate_Order_By>;
  practice_yield_expected_outputs_aggregate?: Maybe<Practice_Yield_Expected_Output_Aggregate_Order_By>;
  practice_yield_type?: Maybe<Practice_Yield_Type_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "practice_yield" */
export type Practice_Yield_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Practice_Yield_Prepend_Input = {
  meta?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "practice_yield" */
export enum Practice_Yield_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Method = 'method',
  /** column name */
  Name = 'name',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "practice_yield" */
export type Practice_Yield_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  meta?: Maybe<Scalars['jsonb']>;
  method?: Maybe<Practice_Yield_Type_Enum>;
  name?: Maybe<Scalars['String']>;
  practice_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_Type = {
  __typename?: 'practice_yield_type';
  name: Scalars['String'];
  /** An array relationship */
  practice_yields: Array<Practice_Yield>;
  /** An aggregated array relationship */
  practice_yields_aggregate: Practice_Yield_Aggregate;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_TypePractice_YieldsArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** columns and relationships of "practice_yield_type" */
export type Practice_Yield_TypePractice_Yields_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** aggregated selection of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate = {
  __typename?: 'practice_yield_type_aggregate';
  aggregate?: Maybe<Practice_Yield_Type_Aggregate_Fields>;
  nodes: Array<Practice_Yield_Type>;
};

/** aggregate fields of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_Fields = {
  __typename?: 'practice_yield_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Practice_Yield_Type_Max_Fields>;
  min?: Maybe<Practice_Yield_Type_Min_Fields>;
};

/** aggregate fields of "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "practice_yield_type" */
export type Practice_Yield_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Practice_Yield_Type_Max_Order_By>;
  min?: Maybe<Practice_Yield_Type_Min_Order_By>;
};

/** input type for inserting array relation for remote table "practice_yield_type" */
export type Practice_Yield_Type_Arr_Rel_Insert_Input = {
  data: Array<Practice_Yield_Type_Insert_Input>;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** Boolean expression to filter rows from the table "practice_yield_type". All fields are combined with a logical 'AND'. */
export type Practice_Yield_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Practice_Yield_Type_Bool_Exp>>>;
  _not?: Maybe<Practice_Yield_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Practice_Yield_Type_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  practice_yields?: Maybe<Practice_Yield_Bool_Exp>;
};

/** unique or primary key constraints on table "practice_yield_type" */
export enum Practice_Yield_Type_Constraint {
  /** unique or primary key constraint */
  PracticeYieldTypePkey = 'practice_yield_type_pkey',
}

export enum Practice_Yield_Type_Enum {
  Blob = 'BLOB',
  Code = 'CODE',
  GitRepo = 'GIT_REPO',
  Url = 'URL',
}

/** expression to compare columns of type practice_yield_type_enum. All fields are combined with logical 'AND'. */
export type Practice_Yield_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Practice_Yield_Type_Enum>;
  _in?: Maybe<Array<Practice_Yield_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Practice_Yield_Type_Enum>;
  _nin?: Maybe<Array<Practice_Yield_Type_Enum>>;
};

/** input type for inserting data into table "practice_yield_type" */
export type Practice_Yield_Type_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  practice_yields?: Maybe<Practice_Yield_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Practice_Yield_Type_Max_Fields = {
  __typename?: 'practice_yield_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "practice_yield_type" */
export type Practice_Yield_Type_Max_Order_By = {
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Practice_Yield_Type_Min_Fields = {
  __typename?: 'practice_yield_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "practice_yield_type" */
export type Practice_Yield_Type_Min_Order_By = {
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "practice_yield_type" */
export type Practice_Yield_Type_Mutation_Response = {
  __typename?: 'practice_yield_type_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Practice_Yield_Type>;
};

/** input type for inserting object relation for remote table "practice_yield_type" */
export type Practice_Yield_Type_Obj_Rel_Insert_Input = {
  data: Practice_Yield_Type_Insert_Input;
  on_conflict?: Maybe<Practice_Yield_Type_On_Conflict>;
};

/** on conflict condition type for table "practice_yield_type" */
export type Practice_Yield_Type_On_Conflict = {
  constraint: Practice_Yield_Type_Constraint;
  update_columns: Array<Practice_Yield_Type_Update_Column>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** ordering options when selecting data from "practice_yield_type" */
export type Practice_Yield_Type_Order_By = {
  name?: Maybe<Order_By>;
  practice_yields_aggregate?: Maybe<Practice_Yield_Aggregate_Order_By>;
};

/** primary key columns input for table: "practice_yield_type" */
export type Practice_Yield_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "practice_yield_type" */
export enum Practice_Yield_Type_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "practice_yield_type" */
export type Practice_Yield_Type_Set_Input = {
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "practice_yield_type" */
export enum Practice_Yield_Type_Update_Column {
  /** column name */
  Name = 'name',
}

/** update columns of table "practice_yield" */
export enum Practice_Yield_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Meta = 'meta',
  /** column name */
  Method = 'method',
  /** column name */
  Name = 'name',
  /** column name */
  PracticeId = 'practice_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** perform the action: "getGitFileData" */
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practice_to_course: Array<Practice_To_Course>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practice_to_course_aggregate: Practice_To_Course_Aggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric: Array<Practice_To_Student_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practice_to_student_yield: Array<Practice_To_Student_Yield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practice_to_student_yield_aggregate: Practice_To_Student_Yield_Aggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practice_yield_expected_output: Array<Practice_Yield_Expected_Output>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practice_yield_expected_output_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types: Array<Practice_Yield_Expected_Output_Types>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types_aggregate: Practice_Yield_Expected_Output_Types_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric: Array<Practice_Yield_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  student_to_course: Array<Student_To_Course>;
  /** fetch aggregated fields from the table: "student_to_course" */
  student_to_course_aggregate: Student_To_Course_Aggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

/** query root */
export type Query_RootCourseArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** query root */
export type Query_RootCourse_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** query root */
export type Query_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** query root */
export type Query_RootPracticeArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_CourseArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_StudentArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_Student_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_To_Student_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_To_Student_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_Expected_OutputArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_TypesArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_Types_AggregateArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootPractice_Yield_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootPractice_Yield_TypeArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** query root */
export type Query_RootPractice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** query root */
export type Query_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootStudent_To_CourseArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** query root */
export type Query_RootStudent_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUserAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** query root */
export type Query_RootUserByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "student" */
export type Student = {
  __typename?: 'student';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  /** A computed field, executes function "student_full_name" */
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  practice_to_students: Array<Practice_To_Student>;
  /** An aggregated array relationship */
  practice_to_students_aggregate: Practice_To_Student_Aggregate;
  /** An array relationship */
  student_to_courses: Array<Student_To_Course>;
  /** An aggregated array relationship */
  student_to_courses_aggregate: Student_To_Course_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student" */
export type StudentPractice_To_StudentsArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentPractice_To_Students_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_CoursesArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** columns and relationships of "student" */
export type StudentStudent_To_Courses_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** aggregated selection of "student" */
export type Student_Aggregate = {
  __typename?: 'student_aggregate';
  aggregate?: Maybe<Student_Aggregate_Fields>;
  nodes: Array<Student>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_Fields = {
  __typename?: 'student_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_Max_Fields>;
  min?: Maybe<Student_Min_Fields>;
};

/** aggregate fields of "student" */
export type Student_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student" */
export type Student_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_Max_Order_By>;
  min?: Maybe<Student_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student" */
export type Student_Arr_Rel_Insert_Input = {
  data: Array<Student_Insert_Input>;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student". All fields are combined with a logical 'AND'. */
export type Student_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  _not?: Maybe<Student_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_Bool_Exp>>>;
  claim_token?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  practice_to_students?: Maybe<Practice_To_Student_Bool_Exp>;
  student_to_courses?: Maybe<Student_To_Course_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "student" */
export enum Student_Constraint {
  /** unique or primary key constraint */
  StudentClaimTokenKey = 'student_claim_token_key',
  /** unique or primary key constraint */
  StudentEmailKey = 'student_email_key',
  /** unique or primary key constraint */
  StudentPkey = 'student_pkey',
  /** unique or primary key constraint */
  StudentUserIdKey = 'student_user_id_key',
}

/** input type for inserting data into table "student" */
export type Student_Insert_Input = {
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  practice_to_students?: Maybe<Practice_To_Student_Arr_Rel_Insert_Input>;
  student_to_courses?: Maybe<Student_To_Course_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Student_Max_Fields = {
  __typename?: 'student_max_fields';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "student" */
export type Student_Max_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_Min_Fields = {
  __typename?: 'student_min_fields';
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "student" */
export type Student_Min_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "student" */
export type Student_Mutation_Response = {
  __typename?: 'student_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student>;
};

/** input type for inserting object relation for remote table "student" */
export type Student_Obj_Rel_Insert_Input = {
  data: Student_Insert_Input;
  on_conflict?: Maybe<Student_On_Conflict>;
};

/** on conflict condition type for table "student" */
export type Student_On_Conflict = {
  constraint: Student_Constraint;
  update_columns: Array<Student_Update_Column>;
  where?: Maybe<Student_Bool_Exp>;
};

/** ordering options when selecting data from "student" */
export type Student_Order_By = {
  claim_token?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  practice_to_students_aggregate?: Maybe<Practice_To_Student_Aggregate_Order_By>;
  student_to_courses_aggregate?: Maybe<Student_To_Course_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "student" */
export type Student_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "student" */
export enum Student_Select_Column {
  /** column name */
  ClaimToken = 'claim_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "student" */
export type Student_Set_Input = {
  claim_token?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "student_to_course" */
export type Student_To_Course = {
  __typename?: 'student_to_course';
  /** An object relationship */
  course: Course;
  course_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  student: Student;
  student_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "student_to_course" */
export type Student_To_Course_Aggregate = {
  __typename?: 'student_to_course_aggregate';
  aggregate?: Maybe<Student_To_Course_Aggregate_Fields>;
  nodes: Array<Student_To_Course>;
};

/** aggregate fields of "student_to_course" */
export type Student_To_Course_Aggregate_Fields = {
  __typename?: 'student_to_course_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Student_To_Course_Max_Fields>;
  min?: Maybe<Student_To_Course_Min_Fields>;
};

/** aggregate fields of "student_to_course" */
export type Student_To_Course_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Student_To_Course_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "student_to_course" */
export type Student_To_Course_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Student_To_Course_Max_Order_By>;
  min?: Maybe<Student_To_Course_Min_Order_By>;
};

/** input type for inserting array relation for remote table "student_to_course" */
export type Student_To_Course_Arr_Rel_Insert_Input = {
  data: Array<Student_To_Course_Insert_Input>;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** Boolean expression to filter rows from the table "student_to_course". All fields are combined with a logical 'AND'. */
export type Student_To_Course_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Student_To_Course_Bool_Exp>>>;
  _not?: Maybe<Student_To_Course_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Student_To_Course_Bool_Exp>>>;
  course?: Maybe<Course_Bool_Exp>;
  course_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  student_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "student_to_course" */
export enum Student_To_Course_Constraint {
  /** unique or primary key constraint */
  StudentToPromotionPkey = 'student_to_promotion_pkey',
  /** unique or primary key constraint */
  StudentToPromotionPromotionIdStudentIdKey = 'student_to_promotion_promotion_id_student_id_key',
}

/** input type for inserting data into table "student_to_course" */
export type Student_To_Course_Insert_Input = {
  course?: Maybe<Course_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Student_To_Course_Max_Fields = {
  __typename?: 'student_to_course_max_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "student_to_course" */
export type Student_To_Course_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Student_To_Course_Min_Fields = {
  __typename?: 'student_to_course_min_fields';
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "student_to_course" */
export type Student_To_Course_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "student_to_course" */
export type Student_To_Course_Mutation_Response = {
  __typename?: 'student_to_course_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Student_To_Course>;
};

/** input type for inserting object relation for remote table "student_to_course" */
export type Student_To_Course_Obj_Rel_Insert_Input = {
  data: Student_To_Course_Insert_Input;
  on_conflict?: Maybe<Student_To_Course_On_Conflict>;
};

/** on conflict condition type for table "student_to_course" */
export type Student_To_Course_On_Conflict = {
  constraint: Student_To_Course_Constraint;
  update_columns: Array<Student_To_Course_Update_Column>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** ordering options when selecting data from "student_to_course" */
export type Student_To_Course_Order_By = {
  course?: Maybe<Course_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  student_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "student_to_course" */
export type Student_To_Course_Pk_Columns_Input = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** select columns of table "student_to_course" */
export enum Student_To_Course_Select_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "student_to_course" */
export type Student_To_Course_Set_Input = {
  course_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  student_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "student_to_course" */
export enum Student_To_Course_Update_Column {
  /** column name */
  CourseId = 'course_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  StudentId = 'student_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** update columns of table "student" */
export enum Student_Update_Column {
  /** column name */
  ClaimToken = 'claim_token',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "course" */
  course: Array<Course>;
  /** fetch aggregated fields from the table: "course" */
  course_aggregate: Course_Aggregate;
  /** fetch data from the table: "course" using primary key columns */
  course_by_pk?: Maybe<Course>;
  /** perform the action: "getGitFileData" */
  getGitFileData?: Maybe<GetGitFileDataOutput>;
  /** fetch data from the table: "practice" */
  practice: Array<Practice>;
  /** fetch aggregated fields from the table: "practice" */
  practice_aggregate: Practice_Aggregate;
  /** fetch data from the table: "practice" using primary key columns */
  practice_by_pk?: Maybe<Practice>;
  /** fetch data from the table: "practice_to_course" */
  practice_to_course: Array<Practice_To_Course>;
  /** fetch aggregated fields from the table: "practice_to_course" */
  practice_to_course_aggregate: Practice_To_Course_Aggregate;
  /** fetch data from the table: "practice_to_course" using primary key columns */
  practice_to_course_by_pk?: Maybe<Practice_To_Course>;
  /** fetch data from the table: "practice_to_student" */
  practice_to_student: Array<Practice_To_Student>;
  /** fetch aggregated fields from the table: "practice_to_student" */
  practice_to_student_aggregate: Practice_To_Student_Aggregate;
  /** fetch data from the table: "practice_to_student" using primary key columns */
  practice_to_student_by_pk?: Maybe<Practice_To_Student>;
  /** fetch data from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric: Array<Practice_To_Student_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_to_student_grade_metric" */
  practice_to_student_grade_metric_aggregate: Practice_To_Student_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_to_student_grade_metric" using primary key columns */
  practice_to_student_grade_metric_by_pk?: Maybe<Practice_To_Student_Grade_Metric>;
  /** fetch data from the table: "practice_to_student_yield" */
  practice_to_student_yield: Array<Practice_To_Student_Yield>;
  /** fetch aggregated fields from the table: "practice_to_student_yield" */
  practice_to_student_yield_aggregate: Practice_To_Student_Yield_Aggregate;
  /** fetch data from the table: "practice_to_student_yield" using primary key columns */
  practice_to_student_yield_by_pk?: Maybe<Practice_To_Student_Yield>;
  /** fetch data from the table: "practice_yield" */
  practice_yield: Array<Practice_Yield>;
  /** fetch aggregated fields from the table: "practice_yield" */
  practice_yield_aggregate: Practice_Yield_Aggregate;
  /** fetch data from the table: "practice_yield" using primary key columns */
  practice_yield_by_pk?: Maybe<Practice_Yield>;
  /** fetch data from the table: "practice_yield_expected_output" */
  practice_yield_expected_output: Array<Practice_Yield_Expected_Output>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output" */
  practice_yield_expected_output_aggregate: Practice_Yield_Expected_Output_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output" using primary key columns */
  practice_yield_expected_output_by_pk?: Maybe<Practice_Yield_Expected_Output>;
  /** fetch data from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types: Array<Practice_Yield_Expected_Output_Types>;
  /** fetch aggregated fields from the table: "practice_yield_expected_output_types" */
  practice_yield_expected_output_types_aggregate: Practice_Yield_Expected_Output_Types_Aggregate;
  /** fetch data from the table: "practice_yield_expected_output_types" using primary key columns */
  practice_yield_expected_output_types_by_pk?: Maybe<Practice_Yield_Expected_Output_Types>;
  /** fetch data from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric: Array<Practice_Yield_Grade_Metric>;
  /** fetch aggregated fields from the table: "practice_yield_grade_metric" */
  practice_yield_grade_metric_aggregate: Practice_Yield_Grade_Metric_Aggregate;
  /** fetch data from the table: "practice_yield_grade_metric" using primary key columns */
  practice_yield_grade_metric_by_pk?: Maybe<Practice_Yield_Grade_Metric>;
  /** fetch data from the table: "practice_yield_type" */
  practice_yield_type: Array<Practice_Yield_Type>;
  /** fetch aggregated fields from the table: "practice_yield_type" */
  practice_yield_type_aggregate: Practice_Yield_Type_Aggregate;
  /** fetch data from the table: "practice_yield_type" using primary key columns */
  practice_yield_type_by_pk?: Maybe<Practice_Yield_Type>;
  /** fetch data from the table: "student" */
  student: Array<Student>;
  /** fetch aggregated fields from the table: "student" */
  student_aggregate: Student_Aggregate;
  /** fetch data from the table: "student" using primary key columns */
  student_by_pk?: Maybe<Student>;
  /** fetch data from the table: "student_to_course" */
  student_to_course: Array<Student_To_Course>;
  /** fetch aggregated fields from the table: "student_to_course" */
  student_to_course_aggregate: Student_To_Course_Aggregate;
  /** fetch data from the table: "student_to_course" using primary key columns */
  student_to_course_by_pk?: Maybe<Student_To_Course>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

/** subscription root */
export type Subscription_RootCourseArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCourse_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Order_By>>;
  where?: Maybe<Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCourse_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootGetGitFileDataArgs = {
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPracticeArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Order_By>>;
  where?: Maybe<Practice_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_CourseArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Course_Order_By>>;
  where?: Maybe<Practice_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Course_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_StudentArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Order_By>>;
  where?: Maybe<Practice_To_Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_To_Student_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_To_Student_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_To_Student_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_To_Student_Yield_Order_By>>;
  where?: Maybe<Practice_To_Student_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_To_Student_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_YieldArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Order_By>>;
  where?: Maybe<Practice_Yield_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_OutputArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Expected_Output_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_TypesArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_Types_AggregateArgs = {
  distinct_on?: Maybe<
    Array<Practice_Yield_Expected_Output_Types_Select_Column>
  >;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Expected_Output_Types_Order_By>>;
  where?: Maybe<Practice_Yield_Expected_Output_Types_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Expected_Output_Types_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_MetricArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_Metric_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Grade_Metric_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Grade_Metric_Order_By>>;
  where?: Maybe<Practice_Yield_Grade_Metric_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Grade_Metric_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootPractice_Yield_TypeArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Practice_Yield_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Practice_Yield_Type_Order_By>>;
  where?: Maybe<Practice_Yield_Type_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPractice_Yield_Type_By_PkArgs = {
  name: Scalars['String'];
};

/** subscription root */
export type Subscription_RootStudentArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_Order_By>>;
  where?: Maybe<Student_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootStudent_To_CourseArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Course_AggregateArgs = {
  distinct_on?: Maybe<Array<Student_To_Course_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Student_To_Course_Order_By>>;
  where?: Maybe<Student_To_Course_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudent_To_Course_By_PkArgs = {
  course_id: Scalars['uuid'];
  student_id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUserByPkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamptz'];
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firebaseId?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  photoUrl: Scalars['String'];
  /** An object relationship */
  student?: Maybe<Student>;
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  displayName?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firebaseId?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  photoUrl?: Maybe<String_Comparison_Exp>;
  student?: Maybe<Student_Bool_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserFirebaseIdKey = 'user_firebase_id_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  student?: Maybe<Student_Obj_Rel_Insert_Input>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  createdAt?: Maybe<Order_By>;
  displayName?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebaseId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  photoUrl?: Maybe<Order_By>;
  student?: Maybe<Student_Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: "user" */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseId = 'firebaseId',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebaseId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseId = 'firebaseId',
  /** column name */
  Id = 'id',
  /** column name */
  PhotoUrl = 'photoUrl',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type UpdateFirebaseIdMutationVariables = Exact<{
  firebaseId: Scalars['String'];
}>;

export type UpdateFirebaseIdMutation = { __typename?: 'mutation_root' } & {
  updateUser?: Maybe<
    { __typename?: 'user_mutation_response' } & Pick<
      User_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type DataForPracticeToGradeEmptyQueryVariables = Exact<{
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
}>;

export type DataForPracticeToGradeEmptyQuery = { __typename?: 'query_root' } & {
  practice_to_course: Array<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      'id' | 'is_open' | 'open_date'
    > & {
        course: { __typename?: 'course' } & Pick<Course, 'id'> & {
            student_to_courses: Array<
              { __typename?: 'student_to_course' } & {
                student: { __typename?: 'student' } & Pick<Student, 'id'> & {
                    practice_to_students: Array<
                      { __typename?: 'practice_to_student' } & Pick<
                        Practice_To_Student,
                        'id' | 'student_id' | 'created_at'
                      > & {
                          practice_to_student_yields: Array<
                            { __typename?: 'practice_to_student_yield' } & Pick<
                              Practice_To_Student_Yield,
                              'id' | 'value' | 'practice_yield_id'
                            >
                          >;
                        }
                    >;
                  };
              }
            >;
          };
        practice: { __typename?: 'practice' } & {
          practice_yields: Array<
            { __typename?: 'practice_yield' } & Pick<Practice_Yield, 'id'>
          >;
        };
      }
  >;
};

export type UpdateFillEmptyHandoutsMutationVariables = Exact<{
  data:
    | Array<Practice_To_Student_Insert_Input>
    | Practice_To_Student_Insert_Input;
}>;

export type UpdateFillEmptyHandoutsMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_student?: Maybe<
    { __typename?: 'practice_to_student_mutation_response' } & Pick<
      Practice_To_Student_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type GetGitInfoForStudentYieldQueryVariables = Exact<{
  practice_to_student_yield_id: Scalars['uuid'];
  practice_yield_expected_output_id: Scalars['uuid'];
}>;

export type GetGitInfoForStudentYieldQuery = { __typename?: 'query_root' } & {
  studentYield?: Maybe<
    { __typename?: 'practice_to_student_yield' } & Pick<
      Practice_To_Student_Yield,
      'gitea_org_and_repo' | 'id' | 'practice_yield_id'
    >
  >;
  expectedOutput?: Maybe<
    { __typename?: 'practice_yield_expected_output' } & Pick<
      Practice_Yield_Expected_Output,
      'git_path' | 'method' | 'practice_yield_id'
    >
  >;
};

export type DataForUpdateToStudentLinkQueryVariables = Exact<{
  tokenId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;

export type DataForUpdateToStudentLinkQuery = { __typename?: 'query_root' } & {
  studentToSet: Array<
    { __typename?: 'student' } & Pick<Student, 'claim_token' | 'user_id' | 'id'>
  >;
  maybeStudentWithUser: Array<
    { __typename?: 'student' } & Pick<Student, 'claim_token' | 'user_id' | 'id'>
  >;
};

export type LinkStudentToUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;

export type LinkStudentToUserMutation = { __typename?: 'mutation_root' } & {
  update_student_by_pk?: Maybe<
    { __typename?: 'student' } & Pick<Student, 'id'>
  >;
};

export type FillEmptyForGradeMutationVariables = Exact<{
  courseId: Scalars['uuid'];
  practiceId: Scalars['uuid'];
}>;

export type FillEmptyForGradeMutation = { __typename?: 'mutation_root' } & {
  fillEmptyYields?: Maybe<
    { __typename?: 'FillEmptyYieldsOutput' } & Pick<
      FillEmptyYieldsOutput,
      'affected_rows'
    >
  >;
};

export type GetPracticeToGradeByCourseIdAndPracticeIdQueryVariables = Exact<{
  course_id: Scalars['uuid'];
  practice_id: Scalars['uuid'];
}>;

export type GetPracticeToGradeByCourseIdAndPracticeIdQuery = {
  __typename?: 'query_root';
} & {
  practice_to_course: Array<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      | 'can_student_see_feedback'
      | 'can_student_see_grade'
      | 'is_open'
      | 'open_date'
    > & { practiceToCourseId: Practice_To_Course['id'] }
  >;
};

export type InsertPracticeToStudentWithGradesMutationVariables = Exact<{
  objects:
    | Array<Practice_To_Student_Insert_Input>
    | Practice_To_Student_Insert_Input;
}>;

export type InsertPracticeToStudentWithGradesMutation = {
  __typename?: 'mutation_root';
} & {
  insert_practice_to_student?: Maybe<
    { __typename?: 'practice_to_student_mutation_response' } & Pick<
      Practice_To_Student_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type PracticeForGradingFragment = { __typename?: 'practice' } & {
  practice_yields: Array<
    { __typename?: 'practice_yield' } & Pick<Practice_Yield, 'id' | 'name'> & {
        practice_yield_expected_outputs: Array<
          { __typename?: 'practice_yield_expected_output' } & Pick<
            Practice_Yield_Expected_Output,
            'id'
          > & {
              practice_yield_grade_metrics: Array<
                { __typename?: 'practice_yield_grade_metric' } & Pick<
                  Practice_Yield_Grade_Metric,
                  'id' | 'name' | 'points'
                >
              >;
            }
        >;
      }
  >;
};

export type PracticeToStudentYieldForGradingFragment = {
  __typename?: 'practice_to_student_yield';
} & Pick<Practice_To_Student_Yield, 'id' | 'submited' | 'practice_yield_id'> & {
    practice_to_student_grade_metrics: Array<
      { __typename?: 'practice_to_student_grade_metric' } & Pick<
        Practice_To_Student_Grade_Metric,
        'id' | 'feedback' | 'percent_grade' | 'practice_yield_grade_metric_id'
      > & {
          practice_yield_grade_metric: {
            __typename?: 'practice_yield_grade_metric';
          } & Pick<Practice_Yield_Grade_Metric, 'name' | 'points'>;
        }
    >;
  };

export type PracticeToStudentForGradingFragment = {
  __typename?: 'practice_to_student';
} & Pick<
  Practice_To_Student,
  'id' | 'course_practice_id' | 'graded' | 'grade' | 'student_id'
> & {
    practice_to_student_yields: Array<
      {
        __typename?: 'practice_to_student_yield';
      } & PracticeToStudentYieldForGradingFragment
    >;
  };

export type DataForPracticeToGradeByPracticeToCoursePkQueryVariables = Exact<{
  practice_to_grade_id: Scalars['uuid'];
}>;

export type DataForPracticeToGradeByPracticeToCoursePkQuery = {
  __typename?: 'query_root';
} & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<Practice_To_Course, 'id'> & {
        practice: { __typename?: 'practice' } & PracticeForGradingFragment;
        practice_to_students: Array<
          {
            __typename?: 'practice_to_student';
          } & PracticeToStudentForGradingFragment
        >;
      }
  >;
};

export type GetStudentForMailSendQueryVariables = Exact<{
  studentIds?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;

export type GetStudentForMailSendQuery = { __typename?: 'query_root' } & {
  student: Array<
    { __typename?: 'student' } & Pick<
      Student,
      'email' | 'claim_token' | 'full_name' | 'id'
    >
  >;
};

export type DataForSubmitHandoffQueryVariables = Exact<{
  practiceToPromoId: Scalars['uuid'];
  userId: Scalars['uuid'];
}>;

export type DataForSubmitHandoffQuery = { __typename?: 'query_root' } & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<
      Practice_To_Course,
      'is_open'
    > & {
        practice: { __typename?: 'practice' } & Pick<Practice, 'id'> & {
            practice_yields: Array<
              { __typename?: 'practice_yield' } & Pick<
                Practice_Yield,
                'id' | 'name'
              >
            >;
          };
        practice_to_students: Array<
          { __typename?: 'practice_to_student' } & Pick<
            Practice_To_Student,
            'submited' | 'id'
          >
        >;
        course: { __typename?: 'course' } & {
          student_to_courses: Array<
            { __typename?: 'student_to_course' } & Pick<
              Student_To_Course,
              'student_id'
            >
          >;
        };
      }
  >;
};

export type MutationSubmitHandoffMutationVariables = Exact<{
  studentYields:
    | Array<Practice_To_Student_Yield_Insert_Input>
    | Practice_To_Student_Yield_Insert_Input;
  student_id: Scalars['uuid'];
  promotion_practice_id: Scalars['uuid'];
}>;

export type MutationSubmitHandoffMutation = { __typename?: 'mutation_root' } & {
  insert_practice_to_student?: Maybe<
    { __typename?: 'practice_to_student_mutation_response' } & Pick<
      Practice_To_Student_Mutation_Response,
      'affected_rows'
    >
  >;
};

export type SetSubmitedFalseOnEmptyMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type SetSubmitedFalseOnEmptyMutation = {
  __typename?: 'mutation_root';
} & {
  update_practice_to_student_yield_by_pk?: Maybe<
    { __typename?: 'practice_to_student_yield' } & Pick<
      Practice_To_Student_Yield,
      'gitea_org_and_repo'
    >
  >;
};

export type GetPracticeToPromotionMetaQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetPracticeToPromotionMetaQuery = { __typename?: 'query_root' } & {
  practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & {
      practice: { __typename?: 'practice' } & Pick<Practice, 'title'>;
      course: { __typename?: 'course' } & Pick<Course, 'name' | 'years'>;
    }
  >;
};

export type UpdateGiteaOrgNameMutationVariables = Exact<{
  id: Scalars['uuid'];
  gitea_org_name: Scalars['String'];
}>;

export type UpdateGiteaOrgNameMutation = { __typename?: 'mutation_root' } & {
  update_practice_to_course_by_pk?: Maybe<
    { __typename?: 'practice_to_course' } & Pick<Practice_To_Course, 'id'>
  >;
};

export type OnStudentYieldCreatedDataQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type OnStudentYieldCreatedDataQuery = { __typename?: 'query_root' } & {
  practice_to_student_yield_by_pk?: Maybe<
    { __typename?: 'practice_to_student_yield' } & {
      practice_to_student: { __typename?: 'practice_to_student' } & {
        student: { __typename?: 'student' } & Pick<Student, 'full_name'>;
        practice_to_course: { __typename?: 'practice_to_course' } & Pick<
          Practice_To_Course,
          'gitea_org_name'
        >;
      };
      practice_yield: { __typename?: 'practice_yield' } & Pick<
        Practice_Yield,
        'id' | 'name' | 'method'
      >;
    }
  >;
};

export type OnStudentYieldMutationMutationVariables = Exact<{
  id: Scalars['uuid'];
  gitea_org_and_repo: Scalars['String'];
}>;

export type OnStudentYieldMutationMutation = {
  __typename?: 'mutation_root';
} & {
  update_practice_to_student_yield_by_pk?: Maybe<
    { __typename?: 'practice_to_student_yield' } & Pick<
      Practice_To_Student_Yield,
      'gitea_org_and_repo'
    >
  >;
};

export type CreateNewUserMutationVariables = Exact<{
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
}>;

export type CreateNewUserMutation = { __typename?: 'mutation_root' } & {
  insertUserOne?: Maybe<{ __typename?: 'user' } & Pick<User, 'id'>>;
};

export const PracticeForGradingFragmentDoc = gql`
  fragment PracticeForGrading on practice {
    practice_yields {
      id
      name
      practice_yield_expected_outputs {
        id
        practice_yield_grade_metrics {
          id
          name
          points
        }
      }
    }
  }
`;
export const PracticeToStudentYieldForGradingFragmentDoc = gql`
  fragment PracticeToStudentYieldForGrading on practice_to_student_yield {
    id
    submited
    practice_yield_id
    practice_to_student_grade_metrics {
      id
      feedback
      percent_grade
      practice_yield_grade_metric_id
      practice_yield_grade_metric {
        name
        points
      }
    }
  }
`;
export const PracticeToStudentForGradingFragmentDoc = gql`
  fragment PracticeToStudentForGrading on practice_to_student {
    id
    course_practice_id
    graded
    grade
    student_id
    practice_to_student_yields {
      ...PracticeToStudentYieldForGrading
    }
  }
  ${PracticeToStudentYieldForGradingFragmentDoc}
`;
export const UpdateFirebaseIdDocument = gql`
  mutation updateFirebaseId($firebaseId: String!) {
    updateUser(
      where: { firebaseId: { _eq: $firebaseId } }
      _set: { firebaseId: null }
    ) {
      affected_rows
    }
  }
`;
export const DataForPracticeToGradeEmptyDocument = gql`
  query dataForPracticeToGradeEmpty($course_id: uuid!, $practice_id: uuid!) {
    practice_to_course(
      where: {
        course_id: { _eq: $course_id }
        practice_id: { _eq: $practice_id }
      }
    ) {
      id
      is_open
      open_date
      course {
        id
        student_to_courses {
          student {
            id
            practice_to_students(
              where: {
                practice_to_course: {
                  course_id: { _eq: $course_id }
                  practice_id: { _eq: $practice_id }
                }
              }
            ) {
              id
              student_id
              created_at
              practice_to_student_yields {
                id
                value
                practice_yield_id
              }
            }
          }
        }
      }
      practice {
        practice_yields {
          id
        }
      }
    }
  }
`;
export const UpdateFillEmptyHandoutsDocument = gql`
  mutation updateFillEmptyHandouts(
    $data: [practice_to_student_insert_input!]!
  ) {
    insert_practice_to_student(
      on_conflict: {
        constraint: practice_to_student_student_id_promotion_practice_id_key
        update_columns: course_practice_id
      }
      objects: $data
    ) {
      affected_rows
    }
  }
`;
export const GetGitInfoForStudentYieldDocument = gql`
  query getGitInfoForStudentYield(
    $practice_to_student_yield_id: uuid!
    $practice_yield_expected_output_id: uuid!
  ) {
    studentYield: practice_to_student_yield_by_pk(
      id: $practice_to_student_yield_id
    ) {
      gitea_org_and_repo
      id
      practice_yield_id
    }
    expectedOutput: practice_yield_expected_output_by_pk(
      id: $practice_yield_expected_output_id
    ) {
      git_path
      method
      practice_yield_id
    }
  }
`;
export const DataForUpdateToStudentLinkDocument = gql`
  query dataForUpdateToStudentLink($tokenId: uuid!, $userId: uuid!) {
    studentToSet: student(where: { claim_token: { _eq: $tokenId } }) {
      claim_token
      user_id
      id
    }
    maybeStudentWithUser: student(where: { user_id: { _eq: $userId } }) {
      claim_token
      user_id
      id
    }
  }
`;
export const LinkStudentToUserDocument = gql`
  mutation linkStudentToUser($id: uuid!, $user_id: uuid!) {
    update_student_by_pk(
      pk_columns: { id: $id }
      _set: { user_id: $user_id, claim_token: null }
    ) {
      id
    }
  }
`;
export const FillEmptyForGradeDocument = gql`
  mutation fillEmptyForGrade($courseId: uuid!, $practiceId: uuid!) {
    fillEmptyYields(course_id: $courseId, practice_id: $practiceId) {
      affected_rows
    }
  }
`;
export const GetPracticeToGradeByCourseIdAndPracticeIdDocument = gql`
  query getPracticeToGradeByCourseIdAndPracticeId(
    $course_id: uuid!
    $practice_id: uuid!
  ) {
    practice_to_course(
      where: {
        course_id: { _eq: $course_id }
        practice_id: { _eq: $practice_id }
      }
    ) {
      practiceToCourseId: id
      can_student_see_feedback
      can_student_see_grade
      is_open
      open_date
    }
  }
`;
export const InsertPracticeToStudentWithGradesDocument = gql`
  mutation insertPracticeToStudentWithGrades(
    $objects: [practice_to_student_insert_input!]!
  ) {
    insert_practice_to_student(
      objects: $objects
      on_conflict: {
        constraint: practice_to_student_pkey
        update_columns: [grade, grade_detail, graded, feedback]
      }
    ) {
      affected_rows
    }
  }
`;
export const DataForPracticeToGradeByPracticeToCoursePkDocument = gql`
  query dataForPracticeToGradeByPracticeToCoursePk(
    $practice_to_grade_id: uuid!
  ) {
    practice_to_course_by_pk(id: $practice_to_grade_id) {
      id
      practice {
        ...PracticeForGrading
      }
      practice_to_students {
        ...PracticeToStudentForGrading
      }
    }
  }
  ${PracticeForGradingFragmentDoc}
  ${PracticeToStudentForGradingFragmentDoc}
`;
export const GetStudentForMailSendDocument = gql`
  query getStudentForMailSend($studentIds: [uuid!]) {
    student(
      where: {
        _and: { id: { _in: $studentIds } }
        claim_token: { _is_null: false }
      }
    ) {
      email
      claim_token
      full_name
      id
    }
  }
`;
export const DataForSubmitHandoffDocument = gql`
  query dataForSubmitHandoff($practiceToPromoId: uuid!, $userId: uuid!) {
    practice_to_course_by_pk(id: $practiceToPromoId) {
      is_open
      practice {
        practice_yields {
          id
          name
        }
        id
      }
      practice_to_students(where: { student: { user_id: { _eq: $userId } } }) {
        submited
        id
      }
      course {
        student_to_courses(where: { student: { user_id: { _eq: $userId } } }) {
          student_id
        }
      }
    }
  }
`;
export const MutationSubmitHandoffDocument = gql`
  mutation mutationSubmitHandoff(
    $studentYields: [practice_to_student_yield_insert_input!]!
    $student_id: uuid!
    $promotion_practice_id: uuid!
  ) {
    insert_practice_to_student(
      objects: {
        submited: true
        practice_to_student_yields: { data: $studentYields }
        student_id: $student_id
        course_practice_id: $promotion_practice_id
      }
    ) {
      affected_rows
    }
  }
`;
export const SetSubmitedFalseOnEmptyDocument = gql`
  mutation setSubmitedFalseOnEmpty($id: uuid!) {
    update_practice_to_student_yield_by_pk(
      pk_columns: { id: $id }
      _set: { submited: false }
    ) {
      gitea_org_and_repo
    }
  }
`;
export const GetPracticeToPromotionMetaDocument = gql`
  query getPracticeToPromotionMeta($id: uuid!) {
    practice_to_course_by_pk(id: $id) {
      practice {
        title
      }
      course {
        name
        years
      }
    }
  }
`;
export const UpdateGiteaOrgNameDocument = gql`
  mutation updateGiteaOrgName($id: uuid!, $gitea_org_name: String!) {
    update_practice_to_course_by_pk(
      pk_columns: { id: $id }
      _set: { gitea_org_name: $gitea_org_name }
    ) {
      id
    }
  }
`;
export const OnStudentYieldCreatedDataDocument = gql`
  query onStudentYieldCreatedData($id: uuid!) {
    practice_to_student_yield_by_pk(id: $id) {
      practice_to_student {
        student {
          full_name
        }
        practice_to_course {
          gitea_org_name
        }
      }
      practice_yield {
        id
        name
        method
      }
    }
  }
`;
export const OnStudentYieldMutationDocument = gql`
  mutation onStudentYieldMutation($id: uuid!, $gitea_org_and_repo: String!) {
    update_practice_to_student_yield_by_pk(
      pk_columns: { id: $id }
      _set: { gitea_org_and_repo: $gitea_org_and_repo }
    ) {
      gitea_org_and_repo
    }
  }
`;
export const CreateNewUserDocument = gql`
  mutation createNewUser(
    $email: String
    $id: String
    $photoURL: String
    $displayName: String
  ) {
    insertUserOne(
      object: {
        email: $email
        firebaseId: $id
        photoUrl: $photoURL
        displayName: $displayName
      }
      on_conflict: {
        constraint: user_firebase_id_key
        update_columns: updatedAt
      }
    ) {
      id
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    updateFirebaseId(
      variables: UpdateFirebaseIdMutationVariables,
      requestHeaders?: Headers,
    ): Promise<UpdateFirebaseIdMutation> {
      return withWrapper(() =>
        client.request<UpdateFirebaseIdMutation>(
          print(UpdateFirebaseIdDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    dataForPracticeToGradeEmpty(
      variables: DataForPracticeToGradeEmptyQueryVariables,
      requestHeaders?: Headers,
    ): Promise<DataForPracticeToGradeEmptyQuery> {
      return withWrapper(() =>
        client.request<DataForPracticeToGradeEmptyQuery>(
          print(DataForPracticeToGradeEmptyDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    updateFillEmptyHandouts(
      variables: UpdateFillEmptyHandoutsMutationVariables,
      requestHeaders?: Headers,
    ): Promise<UpdateFillEmptyHandoutsMutation> {
      return withWrapper(() =>
        client.request<UpdateFillEmptyHandoutsMutation>(
          print(UpdateFillEmptyHandoutsDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    getGitInfoForStudentYield(
      variables: GetGitInfoForStudentYieldQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetGitInfoForStudentYieldQuery> {
      return withWrapper(() =>
        client.request<GetGitInfoForStudentYieldQuery>(
          print(GetGitInfoForStudentYieldDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    dataForUpdateToStudentLink(
      variables: DataForUpdateToStudentLinkQueryVariables,
      requestHeaders?: Headers,
    ): Promise<DataForUpdateToStudentLinkQuery> {
      return withWrapper(() =>
        client.request<DataForUpdateToStudentLinkQuery>(
          print(DataForUpdateToStudentLinkDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    linkStudentToUser(
      variables: LinkStudentToUserMutationVariables,
      requestHeaders?: Headers,
    ): Promise<LinkStudentToUserMutation> {
      return withWrapper(() =>
        client.request<LinkStudentToUserMutation>(
          print(LinkStudentToUserDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    fillEmptyForGrade(
      variables: FillEmptyForGradeMutationVariables,
      requestHeaders?: Headers,
    ): Promise<FillEmptyForGradeMutation> {
      return withWrapper(() =>
        client.request<FillEmptyForGradeMutation>(
          print(FillEmptyForGradeDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    getPracticeToGradeByCourseIdAndPracticeId(
      variables: GetPracticeToGradeByCourseIdAndPracticeIdQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetPracticeToGradeByCourseIdAndPracticeIdQuery> {
      return withWrapper(() =>
        client.request<GetPracticeToGradeByCourseIdAndPracticeIdQuery>(
          print(GetPracticeToGradeByCourseIdAndPracticeIdDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    insertPracticeToStudentWithGrades(
      variables: InsertPracticeToStudentWithGradesMutationVariables,
      requestHeaders?: Headers,
    ): Promise<InsertPracticeToStudentWithGradesMutation> {
      return withWrapper(() =>
        client.request<InsertPracticeToStudentWithGradesMutation>(
          print(InsertPracticeToStudentWithGradesDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    dataForPracticeToGradeByPracticeToCoursePk(
      variables: DataForPracticeToGradeByPracticeToCoursePkQueryVariables,
      requestHeaders?: Headers,
    ): Promise<DataForPracticeToGradeByPracticeToCoursePkQuery> {
      return withWrapper(() =>
        client.request<DataForPracticeToGradeByPracticeToCoursePkQuery>(
          print(DataForPracticeToGradeByPracticeToCoursePkDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    getStudentForMailSend(
      variables?: GetStudentForMailSendQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetStudentForMailSendQuery> {
      return withWrapper(() =>
        client.request<GetStudentForMailSendQuery>(
          print(GetStudentForMailSendDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    dataForSubmitHandoff(
      variables: DataForSubmitHandoffQueryVariables,
      requestHeaders?: Headers,
    ): Promise<DataForSubmitHandoffQuery> {
      return withWrapper(() =>
        client.request<DataForSubmitHandoffQuery>(
          print(DataForSubmitHandoffDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    mutationSubmitHandoff(
      variables: MutationSubmitHandoffMutationVariables,
      requestHeaders?: Headers,
    ): Promise<MutationSubmitHandoffMutation> {
      return withWrapper(() =>
        client.request<MutationSubmitHandoffMutation>(
          print(MutationSubmitHandoffDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    setSubmitedFalseOnEmpty(
      variables: SetSubmitedFalseOnEmptyMutationVariables,
      requestHeaders?: Headers,
    ): Promise<SetSubmitedFalseOnEmptyMutation> {
      return withWrapper(() =>
        client.request<SetSubmitedFalseOnEmptyMutation>(
          print(SetSubmitedFalseOnEmptyDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    getPracticeToPromotionMeta(
      variables: GetPracticeToPromotionMetaQueryVariables,
      requestHeaders?: Headers,
    ): Promise<GetPracticeToPromotionMetaQuery> {
      return withWrapper(() =>
        client.request<GetPracticeToPromotionMetaQuery>(
          print(GetPracticeToPromotionMetaDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    updateGiteaOrgName(
      variables: UpdateGiteaOrgNameMutationVariables,
      requestHeaders?: Headers,
    ): Promise<UpdateGiteaOrgNameMutation> {
      return withWrapper(() =>
        client.request<UpdateGiteaOrgNameMutation>(
          print(UpdateGiteaOrgNameDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    onStudentYieldCreatedData(
      variables: OnStudentYieldCreatedDataQueryVariables,
      requestHeaders?: Headers,
    ): Promise<OnStudentYieldCreatedDataQuery> {
      return withWrapper(() =>
        client.request<OnStudentYieldCreatedDataQuery>(
          print(OnStudentYieldCreatedDataDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    onStudentYieldMutation(
      variables: OnStudentYieldMutationMutationVariables,
      requestHeaders?: Headers,
    ): Promise<OnStudentYieldMutationMutation> {
      return withWrapper(() =>
        client.request<OnStudentYieldMutationMutation>(
          print(OnStudentYieldMutationDocument),
          variables,
          requestHeaders,
        ),
      );
    },
    createNewUser(
      variables?: CreateNewUserMutationVariables,
      requestHeaders?: Headers,
    ): Promise<CreateNewUserMutation> {
      return withWrapper(() =>
        client.request<CreateNewUserMutation>(
          print(CreateNewUserDocument),
          variables,
          requestHeaders,
        ),
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
