/*eslint-disable*/
import React, { useEffect, useContext } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";


// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
//import SnackbarContent from "components/Snackbar/SnackbarContent.js";



//import {listCourses as ListCourses} from "../../graphql/queries"

import {API, graphqlOperation, Auth} from "aws-amplify"



import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

import avatar from "assets/img/faces/marc.jpg";

import { AuthContext } from '../../context/authContext';

import DNAEditor   from "../../components/Editor/DNAEditor"

const useStyles = makeStyles(styles);

export default function RTLPage() {

   const {userInfo} = React.useContext(AuthContext);
  console.log("context", userInfo) 
 
  const classes = useStyles();
  return (
    <div>

    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card >
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> הודעה</h4>
            </CardHeader>
            <CardBody  >
              <h4 className={classes.cardTitle}>הודעה לגבי השיעור הבא</h4>
              <p  className={classes.description}>
ביום ראשון הבא, נא להביא את החוברות החדשות.  ניפגש כרגיל בשעה 16:00
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

     <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card >
          <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}> משימה</h4>
            </CardHeader>
            <CardBody  >
              <h4 className={classes.cardTitle}> משימה חגיגית לרגל יום הכרישים!</h4>
              <p  className={classes.description}>
                תאריך התחלה: 19/2/2020  <br/>
                תאריך סיום: 26/3/2020<br/>
                פרס: 100 טינקלים<br/>
                בונוס: 80 טינקלים<br/>
                העלו תמונה של הקוד שכתבתם, או תמונה של ההמצאה שאתם בונים, או גם וגם. אם ההמצאה שלכם עוד לא מוכנה, העלו תמונה של הקוד ובהמשך, העלו את התמונה הנוספת :)
                על התמונות להיות באיכות טובה ומצולמות באור ומקרוב. על כל תמונה תקבלו 50 טינקלים.
              </p>
              <Button color="success" round>
                העלאת קובץ....
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>


      <GridContainer>
       <GridItem xs={12} sm={12} md={12}>
          <Card>
            
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>DNA Editor</h4>
              <p className={classes.cardCategoryWhite}>
              </p>
            </CardHeader>
            <CardBody>
              
              <DNAEditor validation="AGTC"/>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
 
    </div>
  );
}




