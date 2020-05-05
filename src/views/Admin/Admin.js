/*eslint-disable*/
import React, { useContext} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Courses from "./Courses"
import Students from "./Students"

//import AsyncAutoComplete from "../../components/CustomInput/asyncAutocomplete"
import  Notifications from "../Notifications/Notifications"
//import {fetchAllCourseQuery} from "./CourseQueries"

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
const useStyles = makeStyles(styles);





export default function Admin() {
  const classes = useStyles();

  return (
    <div>
    <Courses/>
    <Students/>
    </div>
  );
}




