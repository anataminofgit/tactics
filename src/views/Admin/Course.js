//import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
//import Tasks from "components/Tasks/Tasks.js";
//import CustomTabs from "components/CustomTabs/CustomTabs.js";
//import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
//import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";
//import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
//import pickers from "@material-ui/core/pickers";

import EnhancedTableRadio from "../../components/Table/EnhancedTableRadio";
//import EnhancedTable from "../../components/Table/EnhancedTable";

//import { listCoursesHeaders } from "../../graphql/queries2";
import { courseByName } from "../../graphql/queries";
import { getCourse } from "../../graphql/queries";

import { createCourse, updateCourse } from "../../graphql/mutations";
//import { onCreateCourse, onUupdateCourse } from "../../graphql/subscriptions2";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";

import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import CourseForm from "./courseForm";
//import { onCreateCourse } from "graphql/subscriptions";

export default function Course() {
  // Declare a new state variable, which we'll call "count"
  const [table, setTable] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    titel: "",
    teacherName: "",
    startAt: ""
  });

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const headCells = [
    { id: "id", numeric: false, disablePadding: true, label: null },
    { id: "title", numeric: false, disablePadding: true, label: "שם בקורס" },
    {
      id: "teacherName",
      numeric: false,
      disablePadding: true,
      label: "שם המדריך"
    },
    {
      id: "startAt",
      numeric: true,
      disablePadding: true,
      label: "תאריך התחלה"
    }
  ];

  const handleCreateCourse = async course => {
    const newCourseData = await API.graphql(
      graphqlOperation(createCourse, {
        input: {
          title: course.title,
          teacherName: course.teacherName,
          queryName: "Course",
          startAt: course.startAt
        }
      })
    );
    /// console.log("newCourseData", newCourseData);
    fetchListCourseQuery();
    const { id, startAt, title, teacherName } = newCourseData.data.createCourse;

    // setTable([...table, { id, title, teacherName, startAt }]);

    setSelectedCourse({ id, title, teacherName, startAt });
  };

  const handleUpdateCourse = async course => {
    try {
      /*  const udpaeCourseData =  */ await API.graphql(
        graphqlOperation(updateCourse, {
          input: {
            id: course.id,
            title: course.title,
            queryName: "Course",
            teacherName: course.teacherName,
            startAt: course.startAt
          }
        })
      );

      /*     const {
        id,
        title,
        teacherName,
        startAt
      } = udpaeCourseData.data.updateCourse; */
      fetchListCourseQuery();
      //    const arr = [...table];
      //   const index = arr.findIndex(line => line.id === id);

      //   arr.splice(index, 1, { id, title, teacherName, startAt });
      //  console.log("arr2 ", arr);
      //    setTable(arr);
    } catch (error) {
      console.log("error - update", error);
    }
  };

  const fetchListCourseQuery = async () => {
    try {
      //     const response = await API.graphql(graphqlOperation(listCoursesHeaders));
      const response = await API.graphql(
        graphqlOperation(courseByName, {
          queryName: "Course",
          sortDirection: "ASC"
        })
      );

      const data = response.data.courseByName.items;
      const arr = data.map(function(item) {
        return {
          id: item.id,
          title: item.title,
          teacherName: item.teacherName,
          startAt: item.startAt
        };
      });

     // console.log("array", arr);
      setTable(arr);
    } catch (error) {
      console.log("error - fetchListCourseQuery", error);
    }
  };

  useEffect(() => {
    fetchListCourseQuery();
  }, []);

  const handleSelectedRow = async rowId => {
    try {
      const response = await API.graphql(
        graphqlOperation(getCourse, {
          id: rowId
        })
      );

      const data = response.data.getCourse;

      setSelectedCourse({
        id: data.id,
        title: data.title,
        teacherName: data.teacherName,
        startAt: data.startAt
      });
    } catch (error) {
      console.log("error - fetchGetCourseQuery", error);
    }
  };

  const label = headCells[1].label;

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>קורסים</h4>
          </CardHeader>
          <CardBody>
            <EnhancedTableRadio
              id="EnhancedTableRadio"
              initialOrderBy={label}
              tableHeaderColor="warning"
              tableHead={headCells}
              tableData={table}
              onSelectedRow={handleSelectedRow}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <CourseForm
          selcetedCourseInput={selectedCourse}
          createCourse={handleCreateCourse}
          updateCourse={handleUpdateCourse}
        />
      </GridItem>
    </GridContainer>
  );
}
