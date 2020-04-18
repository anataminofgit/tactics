/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateStudentProduct = /* GraphQL */ `
  subscription OnCreateStudentProduct {
    onCreateStudentProduct {
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
export const onUpdateStudentProduct = /* GraphQL */ `
  subscription OnUpdateStudentProduct {
    onUpdateStudentProduct {
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
export const onDeleteStudentProduct = /* GraphQL */ `
  subscription OnDeleteStudentProduct {
    onDeleteStudentProduct {
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
