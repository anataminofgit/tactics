/*eslint-disable*/
import React, { useContext} from "react";
// @material-ui/core

import { makeStyles } from "@material-ui/core/styles";
// core components
/* import Button from "components/CustomButtons/Button.js";
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";
import Students from "./Students"
 */
//import  Notifications from "../Notifications/Notifications"
import Course from "./SelectedCourse"
import AsyncAutoComplete from "../../components/CustomInput/asyncAutocomplete";
import { fetchAllCourseQuery } from "../../queries/CourseQueries";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";





import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
const useStyles = makeStyles(styles);



export default function Teacher() {
  const classes = useStyles();
  const [courseID, setCourseID] = React.useState(null)


  const handleCourseSelected = (value) =>{
    value ? setCourseID(value.id) : setCourseID(null);
  }


  return (
    <div>
   

    <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridContainer>
                <Card>
                <CardHeader color="primary">

                  <AsyncAutoComplete
                    fieldList="title"
                    asyncGetList={fetchAllCourseQuery}
                    onSelected={handleCourseSelected}
                    initInputValue={""}
                    label="בחר בקורס"

                  /> 
                  </CardHeader >

                   </Card>
                </GridContainer>
              </GridItem>
            </GridContainer>
        

    <Course selectedCourseID = {courseID}/>
    </div>
  );
}




