/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      queryName
      title
      teacherName
      startAt
      teacherEmail
      students {
        items {
          id
          name
          queryName
          address
          phone
          email
          courseID
          taskswithAndwer {
            nextToken
          }
          studentProducts {
            nextToken
          }
        }
        nextToken
      }
      tasks {
        items {
          id
          courseID
          taskWithAnswer {
            id
            uploadPath
            studentID
          }
          taskTitle
          taskContent
          toUpload
        }
        nextToken
      }
      products {
        items {
          id
          courseID
          queryName
          studentInfo {
            id
            studentID
            quantity
          }
          productName
          productPrice
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
        queryName
        title
        teacherName
        startAt
        teacherEmail
        students {
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
      nextToken
    }
  }
`;
export const getTaskWithAnswer = /* GraphQL */ `
  query GetTaskWithAnswer($id: ID!) {
    getTaskWithAnswer(id: $id) {
      id
      uploadPath
      studentID
      task {
        id
        courseID
        taskWithAnswer {
          id
          uploadPath
          studentID
          task {
            id
            courseID
            taskTitle
            taskContent
            toUpload
          }
        }
        taskTitle
        taskContent
        toUpload
      }
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
        uploadPath
        studentID
        task {
          id
          courseID
          taskWithAnswer {
            id
            uploadPath
            studentID
          }
          taskTitle
          taskContent
          toUpload
        }
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
      taskWithAnswer {
        id
        uploadPath
        studentID
        task {
          id
          courseID
          taskWithAnswer {
            id
            uploadPath
            studentID
          }
          taskTitle
          taskContent
          toUpload
        }
      }
      taskTitle
      taskContent
      toUpload
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
        taskWithAnswer {
          id
          uploadPath
          studentID
          task {
            id
            courseID
            taskTitle
            taskContent
            toUpload
          }
        }
        taskTitle
        taskContent
        toUpload
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
      queryName
      studentInfo {
        id
        studentID
        product {
          id
          courseID
          queryName
          studentInfo {
            id
            studentID
            quantity
          }
          productName
          productPrice
        }
        quantity
      }
      productName
      productPrice
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
        queryName
        studentInfo {
          id
          studentID
          product {
            id
            courseID
            queryName
            productName
            productPrice
          }
          quantity
        }
        productName
        productPrice
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
        queryName
        studentInfo {
          id
          studentID
          product {
            id
            courseID
            queryName
            productName
            productPrice
          }
          quantity
        }
        productName
        productPrice
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
          queryName
          studentInfo {
            id
            studentID
            quantity
          }
          productName
          productPrice
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
      queryName
      address
      phone
      email
      courseID
      taskswithAndwer {
        items {
          id
          uploadPath
          studentID
          task {
            id
            courseID
            taskTitle
            taskContent
            toUpload
          }
        }
        nextToken
      }
      studentProducts {
        items {
          id
          studentID
          product {
            id
            courseID
            queryName
            productName
            productPrice
          }
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
        queryName
        address
        phone
        email
        courseID
        taskswithAndwer {
          items {
            id
            uploadPath
            studentID
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
      nextToken
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
        students {
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
      nextToken
    }
  }
`;
export const productsByName = /* GraphQL */ `
  query ProductsByName(
    $queryName: String
    $productName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByName(
      queryName: $queryName
      productName: $productName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseID
        queryName
        studentInfo {
          id
          studentID
          product {
            id
            courseID
            queryName
            productName
            productPrice
          }
          quantity
        }
        productName
        productPrice
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
        taskswithAndwer {
          items {
            id
            uploadPath
            studentID
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
      nextToken
    }
  }
`;
