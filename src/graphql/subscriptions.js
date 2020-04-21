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
export const onCreateTaskWithAnswer = /* GraphQL */ `
  subscription OnCreateTaskWithAnswer {
    onCreateTaskWithAnswer {
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
export const onUpdateTaskWithAnswer = /* GraphQL */ `
  subscription OnUpdateTaskWithAnswer {
    onUpdateTaskWithAnswer {
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
export const onDeleteTaskWithAnswer = /* GraphQL */ `
  subscription OnDeleteTaskWithAnswer {
    onDeleteTaskWithAnswer {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      name
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      name
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      name
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
