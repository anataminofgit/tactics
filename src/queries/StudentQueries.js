import { studentsByName } from "../graphql/queries2";
import { API, graphqlOperation } from "aws-amplify";

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
