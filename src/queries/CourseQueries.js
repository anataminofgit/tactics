import { coursesByName } from "../graphql/queries2";
import { getCourse } from "../graphql/queries2";
//import { createCourse, updateCourse } from "../../graphql/mutations";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";

let courseFilter = null;
let coursesNextToken = null;

export async function fetchFilterListCourseQuery(selectedIndex, fieldValue) {
  const courseFilters = [
    { title: { contains: fieldValue } },
    { teacherName: { contains: fieldValue } },
    { startAt: { contains: fieldValue } }
  ];

  courseFilter = selectedIndex ? courseFilters[selectedIndex] : null;
  return fetchListCourseQuery(true, courseFilter);
}

export async function fetchListCourseQuery(toRestart, filter) {
  let count = 0;
  let localNextToken = coursesNextToken;
  let localArray = [];
  let toContinue = true;

  if (filter !== undefined) courseFilter = filter;

  if (coursesNextToken || toRestart) {
    while (toContinue) {
      try {
        const response = await API.graphql(
          graphqlOperation(coursesByName, {
            queryName: "Course",
            sortDirection: "ASC",
            nextToken: toRestart ? null : localNextToken,
            filter: courseFilter
          })
        );

        const data = response.data.coursesByName.items;
        localNextToken = response.data.coursesByName.nextToken;

        const arr = data.map(function(item) {
          const { id, title, teacherName, startAt } = item;
          return {
            id,
            title,
            teacherName,
            startAt
          };
        });
        count = count + arr.length;

        localArray = [...localArray, ...arr];
        toRestart = false;
        if (localNextToken === null || count > 9) {
          toContinue = false;
        }
        coursesNextToken = localNextToken;
      } catch (error) {
        console.log("error - fetchListCourseQuery", error);
        return [];
      }
    }
    return localArray;
  }
}

export async function fetchAllCourseQuery() {
  let nextToken = null;
  let localArray = [];
  let toContinue = true;

  while (toContinue) {
    try {
      const response = await API.graphql(
        graphqlOperation(coursesByName, {
          queryName: "Course",
          sortDirection: "ASC",
          nextToken: nextToken
        })
      );
      const data = response.data.coursesByName.items;
      nextToken = response.data.coursesByName.nextToken;

      const arr = data.map(function(item) {
        const { id, title } = item;
        return {
          id,
          title
        };
      });
      localArray = [...localArray, ...arr];
      if (nextToken === null) {
        toContinue = false;
      }
    } catch (error) {
      console.log("error - fetchListCourseQuery", error);
      return [];
    }
  }
  return localArray;
}
export async function fetchCoursebyIDQuery(rowId) {
  if (rowId)
    try {
      const response = await API.graphql(
        graphqlOperation(getCourse, {
          id: rowId
        })
      );
      const data = response.data.getCourse;
      return {
        id: data.id,
        title: data.title,
        teacherName: data.teacherName,
        teacherEmail: data.teacherEmail,
        startAt: data.startAt
      };
    } catch (error) {
      console.log("error - fetchCoursebyIDQuery", error);
      return null;
    }
}
