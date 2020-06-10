import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Button from "components/CustomButtons/Button.js";

// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
//import CardIcon from "components/Card/CardIcon.js";
import ShoppingTable from "components/Table/ShoppingTable";
//import CardFooter from "components/Card/CardFooter.js";
import { AuthContext } from "../../context/authContext";
import { fetchAllProductsByCourseQuery } from "../../queries/ProductQueries";
import { fetchStudentProducts } from "../../queries/StudentQueries";

export default function ShoppingList() {
  const { userInfo } = React.useContext(AuthContext);
  const { courseID, studentID } = userInfo;

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [productList, setProductList] = React.useState([]);

  const handleSubmitOrder = list => {
    console.log("list", list);

    let updateList = [],
      insertList = [];

    for (let index in list) {
      const { id, quantity } = list[index];
      const productItem = productList[id];
      if (productItem.quantity !== quantity) {
        console.log("productItem", productItem);

        productItem.quantity = quantity;
        productItem.productID
          ? updateList.push(productItem)
          : insertList.push(productItem);
      }
    }
    console.log("updateList, insertedList", updateList, insertList);
  };

  React.useEffect(() => {
    let promiseCourse = null,
      promiseStudent = null;
    let tableProducts = [];

    if (courseID) {
      promiseCourse = fetchAllProductsByCourseQuery(courseID);

      if (studentID) {
        promiseStudent = fetchStudentProducts(studentID);
      }

      if (courseID && studentID)
        Promise.all([promiseCourse, promiseStudent])
          .then(values => {
            const items = values[0];
            for (let index in items) {
              const { id, productName, productPrice } = items[index];
              tableProducts[id] = {
                id,
                productName,
                productPrice,
                quantity: 0,
                studentProductID: null
              };
            }
            console.log("values", values);
            const studentItems = values[1];
            for (let index in studentItems) {
              const productID = studentItems[index].productID;
              tableProducts[productID].quantity = studentItems[index].quantity;
              tableProducts[productID].studentProductID =
                studentItems[index].id;
            }
            setProductList(tableProducts);
          })
          .catch(err => {
            console.log("error - useEffect - ShoppingList", err);
          });
    }

    return () => {};
  }, [courseID, studentID]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <Icon>content_copy</Icon>
            <h4 className={classes.cardTitleWhite}>רשימת חלקים</h4>
            <p className={classes.cardCategoryWhite}>
              אנא הזמן חלקים לשיעור הבא
            </p>
          </CardHeader>
          <CardBody>
            <ShoppingTable
              onSubmitOrder={handleSubmitOrder}
              tableHead={["שם הפריט", "מחיר בטינקלים", "כמות", "סכום כולל"]}
              tableHeaderColor="warning"
              products={Object.values(productList)}
              rtlActive
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
