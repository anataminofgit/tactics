/*eslint-disable*/
import React, { useContext} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Course from "./Course"
import {listCourses as ListCourses} from "../../graphql/queries"

import {API, graphqlOperation, Auth} from "aws-amplify"

import  Notifications from "../Notifications/Notifications"


import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
const useStyles = makeStyles(styles);

import avatar from "assets/img/faces/marc.jpg";

let bugs = [
  " 1 בדיקה מספר",
  "בדיקה מספר 2 ",
  "בדיקה מספר 3",
  "	בדיקה מספר 4"
];
let website = [
  "بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته",
  "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟"
];
let server = [
  "זהו סרוור 1",
  "זהו סרוור 2",
  "זהו סרוור 3",
  "از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟",
  "از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟"
];


async function getCourse (){

  try {
    const  courselist = await API.graphql(graphqlOperation(ListCourses))
    console.log("lists", courselist)
  } catch (error) {
    console.log("error", error)
  }

  
}

/* async function getAuth (){

  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user:', user)
    console.log('user info:', user.signInUserSession.idToken.payload)
  } catch (error) {
    console.log("error", error)
  }
}
 */



export default function Admin() {

  
  //console.log(Auth.currentCredentials())
  const classes = useStyles();
  return (
    <div>

    <Course/>

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
              <h4 className={classes.cardTitleWhite}>כותרת של כרטיס 1</h4>
              <p className={classes.cardCategoryWhite}>
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["کد", "نام", "حقوق", "استان"]}
                tableData={[
                  ["1", " זה עולה כך וכך", "$36,738", "مازندران"],
                  ["2", "مینا رضایی	", "$23,789", "گلستان"],
                  ["3", "مبینا احمدپور	", "$56,142", "تهران"],
                  ["4", "جلال آقایی	", "$38,735", "شهرکرد"]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
 


      <GridContainer>
      <Notifications></Notifications>
      </GridContainer>

    </div>
  );
}




