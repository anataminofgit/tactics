/* eslint-disable */
// this is an auto generated file. This will be overwritten


export const listCoursesHeaders = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        teacherName
        startAt
      }
      nextToken
    }
  }
`;

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      teacherName
      startAt
    }
  }
`;
