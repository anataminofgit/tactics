import { getTasksByCourse, getTask } from "../graphql/queries2";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";

export async function fetchAllTaskByCourseQuery(courseID) {
  let toContinue = true;
  let nextToken = null;
  let localArray = [];

  if (courseID)
    while (toContinue) {
      try {
        const response = await API.graphql(
          graphqlOperation(getTasksByCourse, {
            id: courseID,
            tasks: {
              nextToken: nextToken
            }
          })
        );
        const data = response.data.getCourse.tasks.items;
        nextToken = response.data.getCourse.tasks.nextToken;

        localArray = [...localArray, ...data];

        if (!nextToken) toContinue = false;
      } catch (error) {
        console.log("error - fetchAllTaskByCourseQuery", error);
        return [];
      }
    }
  return localArray;
}

export async function fetchTaskByCourse(taskID) {
  try {
    const response = await API.graphql(
      graphqlOperation(getTask, {
        id: taskID
      })
    );
    const data = response.data.getTask;
    return data;
  } catch (error) {
    console.log("error - fetchTaskByCourse", error);
    return null;
  }
}
