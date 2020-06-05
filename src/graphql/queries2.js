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
      queryName
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

export const studentsByName = /* GraphQL */ `
  query StudentsByName(
    $queryName: String
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentsByName(
      queryName: $queryName
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        queryName
        address
        phone
        email
        courseID
      }
      nextToken
    }
  }
`;

export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken:course String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        teacherName
        startAt
        teacherEmail
      }
      nextToken
    }
  }
`;

export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      name
      queryName
      address
      phone
      email
      courseID
    }
  }
`;

export const getTasksByCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      queryName
      title
      teacherName
      startAt
      teacherEmail
      tasks {
        items {
          id
          courseID
          taskTitle
          taskContent
          toUpload
        }
        nextToken
      }
    }
  }
`;

export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      courseID
      taskTitle
      taskContent
      toUpload
    }
  }
`;

export const getProductsCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      queryName
      title
      teacherName
      startAt
      teacherEmail
      products {
        items {
          id
          courseID
          queryName
          productName
          productPrice
        }
        nextToken
      }
    }
  }
`;
