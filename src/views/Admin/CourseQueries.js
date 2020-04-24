import { courseByName } from "../../graphql/queries";
//import { getCourse } from "../../graphql/queries";
//import { createCourse, updateCourse } from "../../graphql/mutations";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";

let courseFilter = null;
let coursesNextToken = null;
let localArray = [];
/* export async function queryCreateCourse() {
  try {
    const newCourseData = await API.graphql(
      graphqlOperation(createCourse, {
        input: {
          title: course.title,
          teacherName: course.teacherName,
          queryName: "Course",
          startAt: course.startAt
        }
      })
    );

    const { id, startAt, title, teacherName } = newCourseData.data.createCourse;

    return { id, title, teacherName, startAt };

 
  } catch (error) {
    console.log("error - create", error);
  }
} */

/* export async function queryUpdateCourse() {
  try {
    await API.graphql(
      graphqlOperation(updateCourse, {
        input: {
          id: course.id,
          title: course.title,
          queryName: "Course",
          teacherName: course.teacherName,
          startAt: course.startAt
        }
      })
    ); //

    fetchListCourseQuery(true);
  } catch (error) {
    console.log("error - update", error);
  }
}
 */
//export
export async function fetchListCourseQuery(toRestart, filter) {
  // let toRestart = restart;
  let count = 0;
  let localNextToken = coursesNextToken;
  localArray = [];
  let toContinue = true;

  if (filter !== undefined) courseFilter = filter;

  console.log("restart", toRestart, "courseFilter", courseFilter);
  if (coursesNextToken || toRestart) {
    while (toContinue) {
      try {
        const response = await API.graphql(
          graphqlOperation(courseByName, {
            queryName: "Course",
            sortDirection: "ASC",
            nextToken: toRestart ? null : localNextToken,
            filter: courseFilter
          })
        );

        const data = response.data.courseByName.items;
        localNextToken = response.data.courseByName.nextToken;

        const arr = data.map(function(item) {
          return {
            id: item.id,
            title: item.title,
            teacherName: item.teacherName,
            startAt: item.startAt
          };
        });
        count = count + arr.length;

        localArray = [...localArray, ...arr];
        toRestart = false;
        if (localNextToken === null || count > 9) {
          console.log("localNextToken", localNextToken, "count", count);
          toContinue = false;
        }
        coursesNextToken = localNextToken;
        console.log(
          "next tiken1",
          count,
          coursesNextToken,
          localArray
        ); /* if (restart) setTable(localArray);
        else setTable([...table, ...localArray]);
 */
      } catch (error) {
        console.log("error - fetchListCourseQuery", error);
        return [];
      }
    }
    return localArray;
  }
  console.log("restart", toRestart, "nexttoken", coursesNextToken);
}

/* export async function queryFilterSearch ()
    const courseFilters = [
      { title: { contains: fieldValue } },
      { teacherName: { contains: fieldValue } },
      { startAt: { contains: fieldValue } }
    ];

  };

 export async function querySelectedRow = async rowId => {
    try {
      const response = await API.graphql(
        graphqlOperation(getCourse, {
          id: rowId
        })
      );

      const data = response.data.getCourse;

      setSelectedCourse({
        id: data.id,
        title: data.title,
        teacherName: data.teacherName,
        startAt: data.startAt
      });
    } catch (error) {
      console.log("error - fetchGetCourseQuery", error);
    }
  };

*/
