/*eslint-disable*/
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";

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

const useStyles = makeStyles(styles);

export default function RTLPage() {
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
 
    </div>
  );
}
