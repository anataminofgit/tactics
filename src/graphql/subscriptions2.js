/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
      id
      title
      teacherName
      startAt
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
