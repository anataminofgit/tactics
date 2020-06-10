import { studentsByName, getStudentProducts } from "../graphql/queries2";
import { API, graphqlOperation } from "aws-amplify";
import { updateStudent } from "../graphql/mutations";

let studentFilter = null;
let studentsNextToken = null;

export async function fetchFilterListStudentsQuery(selectedIndex, fieldValue) {
  const studentFilters = [
    { name: { contains: fieldValue } },
    { email: { contains: fieldValue } }
  ];

  studentFilter = selectedIndex ? studentFilters[selectedIndex] : null;
  return fetchListStudentsQuery(true, studentFilter);
}

export async function fetchListStudentsQuery(toRestart, filter) {
  let count = 0;
  let localNextToken = studentsNextToken;
  let localArray = [];
  let toContinue = true;

  if (filter !== undefined) studentFilter = filter;

  if (studentsNextToken || toRestart) {
    while (toContinue) {
      try {
        const response = await API.graphql(
          graphqlOperation(studentsByName, {
            queryName: "Student",
            sortDirection: "ASC",
            nextToken: toRestart ? null : localNextToken,
            filter: studentFilter
          })
        );

        const data = response.data.studentsByName.items;
        localNextToken = response.data.studentsByName.nextToken;

        const arr = data.map(function(item) {
          const { id, name, email, address, phone } = item;
          return {
            id,
            name,
            email,
            address,
            phone
          };
        });
        count = count + arr.length;

        localArray = [...localArray, ...arr];
        toRestart = false;
        if (localNextToken === null || count > 9) {
          toContinue = false;
        }
        studentsNextToken = localNextToken;
      } catch (error) {
        console.log("error - fetchListStudentsQuery", error);
        return [];
      }
    }
    return localArray;
  }
}

export async function fetchStudentProducts(studentID) {
  let localArray = [];
  let toContinue = true;
  let nextToken = null;
  while (toContinue) {
    try {
      const response = await API.graphql(
        graphqlOperation(getStudentProducts, {
          id: studentID,
          studentProducts: {
            nextToken: nextToken
          }
        })
      );

      const data = response.data.getStudent.studentProducts.items;
      nextToken = response.data.getStudent.studentProducts.nextToken;

      const arr = data.map(function(item) {
        const { id, quantity, product } = item;
        return {
          id,
          quantity,
          productID: product.id
        };
      });
      localArray = [...localArray, ...arr];
      if (nextToken === null) toContinue = false;
    } catch (error) {
      console.log("error - fetchStudentProducts", error);
      return [];
    }
  }
  return localArray;
}

export async function fetchUpdateStudent(student, courseId) {
  try {
    return await API.graphql(
      graphqlOperation(updateStudent, {
        input: {
          id: student.id,
          name: student.name,
          queryName: "Student",
          phone: student.phone,
          address: student.address,
          email: student.email,
          courseID: courseId
        }
      })
    );
    /*       const data = response.data.updateStudent.studentProducts.items;
      nextToken = response.data.updateStudent.studentProducts.nextToken;
  
*/

    /*     await API.graphql(
      graphqlOperation(updateStudent, {
        input: {
          id: student.id,
          name: student.name,
          queryName: "Student",
          phone: student.phone,
          address: student.address,
          email: student.email,
          courseID: courseId
        }
      })
    ); */
  } catch (error) {
    console.log("error - update student", error);
    return null;
  }
}
