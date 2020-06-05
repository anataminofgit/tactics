import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import EditableTable from "../../components/Table/EditableTable";
//import TaskForm from "./taskForm";
//import PropTypes from "prop-types";

//import { createTask, updateTask } from "../../graphql/mutations";
//import { API, graphqlOperation } from "aws-amplify";
import {
  fetchAllProductsByCourseQuery,
  MutationDeleteProductsByCourse,
  MutationAddProductsByCourse
} from "../../queries/ProductQueries";

export default function Products() {
  const [productList, setProductList] = React.useState({});
  const selectedCourseID = useSelector(
    state => state.selectedCourse.selectedCourse.id
  );
  //console.log("selectedCourseID - selector", selectedCourseID);
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const headCells = [
    {
      id: "id",
      numeric: false,
      disablePadding: true,
      label: null,
      toSort: false
    },
    {
      id: "productName",
      numeric: false,
      disablePadding: true,
      label: "שם המוצר",
      toSort: true
    },
    {
      id: "productPrice",
      numeric: true,
      disablePadding: true,
      label: "מחיר",
      toSort: true
    }
  ];

  const handleUpdateProductsList = async updatedProductList => {
    console.log("handleUpdateProductsList", updatedProductList);

    const idsArray = Object.keys(updatedProductList);
    const table = { ...productList };
    setProductList({ ...updatedProductList });

    for (let index in idsArray) {
      const id = idsArray[index];
      if (table[id]) {
        delete table[id];
        delete updatedProductList[id];
      }
    }

    MutationAddProductsByCourse(
      Object.values(updatedProductList),
      selectedCourseID
    );
    MutationDeleteProductsByCourse(Object.values(table), selectedCourseID);
  };

  useEffect(() => {
    if (selectedCourseID) {
      fetchAllProductsByCourseQuery(selectedCourseID)
        .then(value => {
          const table = value.reduce((acc, item) => {
            return { ...acc, [item.id]: { ...item } };
          }, {});
          setProductList({ ...table });
        })
        .catch(err => {
          console.log("error - useEffect", err);
        });
    }
  }, [selectedCourseID]);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>מוצרים</h4>
            </CardHeader>
            <CardBody>
              <EditableTable
                id="products editable table"
                initialOrderBy={headCells[1].label}
                tableHeaderColor="warning"
                tableHead={headCells}
                tableData={productList}
                onUpdateList={handleUpdateProductsList}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}></GridItem>

        <GridItem xs={12} sm={12} md={6}></GridItem>
      </GridContainer>
    </div>
  );
}
