/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
          tasks {
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
          name
          price
        }
        nextToken
      }
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
          tasks {
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
          name
          price
        }
        nextToken
      }
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
          tasks {
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
          name
          price
        }
        nextToken
      }
    }
  }
`;
export const createTaskWithAnswer = /* GraphQL */ `
  mutation CreateTaskWithAnswer(
    $input: CreateTaskWithAnswerInput!
    $condition: ModelTaskWithAnswerConditionInput
  ) {
    createTaskWithAnswer(input: $input, condition: $condition) {
      id
      task {
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
      uploadPath
      taskID
    }
  }
`;
export const updateTaskWithAnswer = /* GraphQL */ `
  mutation UpdateTaskWithAnswer(
    $input: UpdateTaskWithAnswerInput!
    $condition: ModelTaskWithAnswerConditionInput
  ) {
    updateTaskWithAnswer(input: $input, condition: $condition) {
      id
      task {
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
      uploadPath
      taskID
    }
  }
`;
export const deleteTaskWithAnswer = /* GraphQL */ `
  mutation DeleteTaskWithAnswer(
    $input: DeleteTaskWithAnswerInput!
    $condition: ModelTaskWithAnswerConditionInput
  ) {
    deleteTaskWithAnswer(input: $input, condition: $condition) {
      id
      task {
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
      uploadPath
      taskID
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createStudentProduct = /* GraphQL */ `
  mutation CreateStudentProduct(
    $input: CreateStudentProductInput!
    $condition: ModelStudentProductConditionInput
  ) {
    createStudentProduct(input: $input, condition: $condition) {
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
            name
            price
          }
          quantity
        }
        name
        price
      }
      quantity
    }
  }
`;
export const updateStudentProduct = /* GraphQL */ `
  mutation UpdateStudentProduct(
    $input: UpdateStudentProductInput!
    $condition: ModelStudentProductConditionInput
  ) {
    updateStudentProduct(input: $input, condition: $condition) {
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
            name
            price
          }
          quantity
        }
        name
        price
      }
      quantity
    }
  }
`;
export const deleteStudentProduct = /* GraphQL */ `
  mutation DeleteStudentProduct(
    $input: DeleteStudentProductInput!
    $condition: ModelStudentProductConditionInput
  ) {
    deleteStudentProduct(input: $input, condition: $condition) {
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
            name
            price
          }
          quantity
        }
        name
        price
      }
      quantity
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      name
      queryName
      address
      phone
      email
      courseID
      tasks {
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
      studentProducts {
        items {
          id
          studentID
          product {
            id
            courseID
            queryName
            name
            price
          }
          quantity
        }
        nextToken
      }
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      name
      queryName
      address
      phone
      email
      courseID
      tasks {
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
      studentProducts {
        items {
          id
          studentID
          product {
            id
            courseID
            queryName
            name
            price
          }
          quantity
        }
        nextToken
      }
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      name
      queryName
      address
      phone
      email
      courseID
      tasks {
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
      studentProducts {
        items {
          id
          studentID
          product {
            id
            courseID
            queryName
            name
            price
          }
          quantity
        }
        nextToken
      }
    }
  }
`;
