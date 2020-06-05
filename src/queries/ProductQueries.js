import { getProductsCourse } from "../graphql/queries2";

import { createProduct, deleteProduct } from "../graphql/mutations2";

import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";

export async function fetchAllProductsByCourseQuery(courseID) {
  let toContinue = true;
  let nextToken = null;
  let localArray = [];

  if (courseID)
    while (toContinue) {
      try {
        const response = await API.graphql(
          graphqlOperation(getProductsCourse, {
            id: courseID,
            products: {
              nextToken: nextToken
            }
          })
        );
        const data = response.data.getCourse.products.items;
        nextToken = response.data.getCourse.products.nextToken;

        localArray = [...localArray, ...data];
        if (!nextToken) toContinue = false;
      } catch (error) {
        console.log("error - fetchAllProductByCourseQuery", error);
        return [];
      }
    }
  return localArray;
}

export async function MutationAddProductsByCourse(list, courseID) {
  if (!courseID) {
    console.log("error - empty courseID - MutationAddProductsByCourse");
  }

  if (courseID && list) {
    Promise.all(
      list.map(async element => {
        try {
          await API.graphql(
            graphqlOperation(createProduct, {
              input: {
                id: element.id,
                courseID: courseID,
                productName: element.productName,
                productPrice: parseInt(element.productPrice),
                queryName: "Product"
              }
            })
          );
        } catch (error) {
          console.log("error - MutationAddProductsByCourse", error);
        }
      })
    );
  }
}

export async function MutationDeleteProductsByCourse(list, courseID) {
  console.log(`MutationAddProductsByCourse list ${list}`);

  if (!courseID) {
    console.log("error - empty courseID - MutationDeleteProductsByCourse");
  }
  Promise.all(
    list.map(async element => {
      try {
        await API.graphql(
          graphqlOperation(deleteProduct, {
            input: {
              id: element.id
            }
          })
        );
      } catch (error) {
        console.log("error - MutationDeleteProductsByCourse", error);
      }
    })
  );
}
