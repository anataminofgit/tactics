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
  query GetCourse($title: String!, $teacherName: String!, $startAt: AWSDate!) {
    getCourse(title: $title, teacherName: $teacherName, startAt: $startAt) {
      id
      title
      teacherName
      startAt
      teacherEmail
    }
  }
`;

export const coursesByName = /* GraphQL */ `
  query CoursesByName(
    $queryName: String
    $title: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    coursesByName(
      queryName: $queryName
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        queryName
        title
        teacherName
        startAt
        teacherEmail
      }
      nextToken
    }
  }
`;
