/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          taskTitle
          taskContent
          toUpload
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          productName
          productPrice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          taskTitle
          taskContent
          toUpload
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          productName
          productPrice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          taskTitle
          taskContent
          toUpload
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          productName
          productPrice
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTaskWithAnswer = /* GraphQL */ `
  subscription OnCreateTaskWithAnswer {
    onCreateTaskWithAnswer {
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        taskTitle
        taskContent
        toUpload
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTaskWithAnswer = /* GraphQL */ `
  subscription OnUpdateTaskWithAnswer {
    onUpdateTaskWithAnswer {
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        taskTitle
        taskContent
        toUpload
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTaskWithAnswer = /* GraphQL */ `
  subscription OnDeleteTaskWithAnswer {
    onDeleteTaskWithAnswer {
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        taskTitle
        taskContent
        toUpload
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
            createdAt
            updatedAt
          }
          taskTitle
          taskContent
          toUpload
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      taskTitle
      taskContent
      toUpload
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
            createdAt
            updatedAt
          }
          taskTitle
          taskContent
          toUpload
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      taskTitle
      taskContent
      toUpload
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
            createdAt
            updatedAt
          }
          taskTitle
          taskContent
          toUpload
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      taskTitle
      taskContent
      toUpload
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
            createdAt
            updatedAt
          }
          productName
          productPrice
          createdAt
          updatedAt
        }
        quantity
        createdAt
        updatedAt
      }
      productName
      productPrice
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
            createdAt
            updatedAt
          }
          productName
          productPrice
          createdAt
          updatedAt
        }
        quantity
        createdAt
        updatedAt
      }
      productName
      productPrice
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
            createdAt
            updatedAt
          }
          productName
          productPrice
          createdAt
          updatedAt
        }
        quantity
        createdAt
        updatedAt
      }
      productName
      productPrice
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudentProduct = /* GraphQL */ `
  subscription OnCreateStudentProduct {
    onCreateStudentProduct {
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
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        productName
        productPrice
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudentProduct = /* GraphQL */ `
  subscription OnUpdateStudentProduct {
    onUpdateStudentProduct {
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
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        productName
        productPrice
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudentProduct = /* GraphQL */ `
  subscription OnDeleteStudentProduct {
    onDeleteStudentProduct {
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
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        productName
        productPrice
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
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
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
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
            createdAt
            updatedAt
          }
          quantity
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
