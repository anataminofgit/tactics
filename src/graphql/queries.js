/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      title
      teacherName
      startAt
      students {
        items {
          id
          name
          address
          phone
          email
          courseID
        }
        nextToken
      }
      tasks {
        items {
          id
          courseID
          title
          content
          toUpload
        }
        nextToken
      }
      products {
        items {
          id
          courseID
          name
          price
        }
        nextToken
      }
    }
  }
`;
export const listCourses = /* GraphQL */ `
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
        students {
          nextToken
        }
        tasks {
          nextToken
        }
        products {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTaskWithAnswer = /* GraphQL */ `
  query GetTaskWithAnswer($id: ID!) {
    getTaskWithAnswer(id: $id) {
      id
      task {
        id
        courseID
        title
        content
        toUpload
        taskWithAnswer {
          id
          uploadPath
          taskID
        }
      }
      uploadPath
      taskID
    }
  }
`;
export const listTaskWithAnswers = /* GraphQL */ `
  query ListTaskWithAnswers(
    $filter: ModelTaskWithAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskWithAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        task {
          id
          courseID
          title
          content
          toUpload
        }
        uploadPath
        taskID
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      courseID
      title
      content
      toUpload
      taskWithAnswer {
        id
        task {
          id
          courseID
          title
          content
          toUpload
        }
        uploadPath
        taskID
      }
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseID
        title
        content
        toUpload
        taskWithAnswer {
          id
          uploadPath
          taskID
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      courseID
      studentInfo {
        id
        studentID
        product {
          id
          courseID
          name
          price
        }
        quantity
      }
      name
      price
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseID
        studentInfo {
          id
          studentID
          quantity
        }
        name
        price
      }
      nextToken
    }
  }
`;
export const getStudentProduct = /* GraphQL */ `
  query GetStudentProduct($id: ID!) {
    getStudentProduct(id: $id) {
      id
      studentID
      product {
        id
        courseID
        studentInfo {
          id
          studentID
          quantity
        }
        name
        price
      }
      quantity
    }
  }
`;
export const listStudentProducts = /* GraphQL */ `
  query ListStudentProducts(
    $filter: ModelStudentProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentID
        product {
          id
          courseID
          name
          price
        }
        quantity
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
      address
      phone
      email
      courseID
      tasks {
        items {
          id
          uploadPath
          taskID
        }
        nextToken
      }
      studentProducts {
        items {
          id
          studentID
          quantity
        }
        nextToken
      }
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        phone
        email
        courseID
        tasks {
          nextToken
        }
        studentProducts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
