import React from "react";
import { useDispatch, useSelector } from "react-redux";

// @material-ui/core

//import { makeStyles } from "@material-ui/core/styles";
// core components
/* import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";
import Students from "./Students"
 */
//import  Notifications from "../Notifications/Notifications"
import Course from "./SelectedCourse";
import Products from "./Products";
import AsyncAutoComplete from "../../components/CustomInput/asyncAutocomplete";
import { fetchAllCourseQuery } from "../../queries/CourseQueries";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { setSelectedCourse } from "reducer/reducers";

//import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
//const useStyles = makeStyles(styles);

export default function Teacher() {
  const dispatch = useDispatch();
  const { title, id } = useSelector(
    state => state.selectedCourse.selectedCourse
  );

  const handleCourseSelected = value => {
    dispatch(setSelectedCourse(value ? value : { id: null, title: "" }));
  };


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <GridContainer>
            <Card>
              <CardHeader color="primary"></CardHeader>
              <CardBody>
                <AsyncAutoComplete
                  fieldList="title"
                  asyncGetList={fetchAllCourseQuery}
                  onSelected={handleCourseSelected}
                  initInputValue={title}
                  label="בחר בקורס"
                />
              </CardBody>
            </Card>
          </GridContainer>
        </GridItem>
      </GridContainer>
      {id ? <Course /> : null}
      {id ? <Products /> : null}
    </div>
  );
}
