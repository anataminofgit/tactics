import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import EnhancedTableRadio from "../../components/Table/EnhancedTableRadio";
import CustomizedFilter from "components/Table/CustomizedFilter.js";
import CourseForm from "./courseForm";

//import {  } from "../../graphql/queries";
import { createCourse, updateCourse } from "../../graphql/mutations";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";
import {
  fetchListCourseQuery,
  fetchFilterListCourseQuery,
  fetchCoursebyIDQuery
} from "../../queries/CourseQueries";

export default function Courses() {
  const [table, setTable] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    titel: "",
    teacherName: "",
    teacherEmail: "",
    startAt: ""
  });

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
      id: "title",
      numeric: false,
      disablePadding: true,
      label: "שם בקורס",
      toSort: true
    },
    {
      id: "teacherName",
      numeric: false,
      disablePadding: true,
      label: "שם המדריך",
      toSort: false
    },
    {
      id: "teacherEmail",
      numeric: false,
      disablePadding: true,
      label: null,
      toSort: false
    },
    {
      id: "startAt",
      numeric: true,
      disablePadding: true,
      label: "תאריך התחלה",
      toSort: false
    }
  ];
  const label = headCells[1].label; //title
  const filterItems = ["שם הקורס", "שם המדריך", "התחלת הקורס"];

  const handleCreateCourse = async course => {
    try {
      const newCourseData = await API.graphql(
        graphqlOperation(createCourse, {
          input: {
            title: course.title,
            teacherName: course.teacherName,
            teacherEmail: course.teacherEmail,
            queryName: "Course",
            startAt: course.startAt
          }
        })
      );

      const {
        id,
        startAt,
        title,
        teacherEmail,
        teacherName
      } = newCourseData.data.createCourse;

      setSelectedCourse({ id, title, teacherName, teacherEmail, startAt });

      fetchListCourseQuery(true)
        .then(value => {
          setTable([...value]);
        })
        .catch(err => {
          console.log("err use effect", err);
        });
    } catch (error) {
      console.log("error - create", error);
    }
  };

  const handleUpdateCourse = async course => {
    try {
      await API.graphql(
        graphqlOperation(updateCourse, {
          input: {
            id: course.id,
            title: course.title,
            queryName: "Course",
            teacherName: course.teacherName,
            teacherEmail: course.teacherEmail,
            startAt: course.startAt
          }
        })
      );
      fetchListCourseQuery(true)
        .then(value => {
          setTable([...value]);
        })
        .catch(err => {
          console.log("err use effect", err);
        });
    } catch (error) {
      console.log("error - update", error);
    }
  };

  useEffect(() => {
    fetchListCourseQuery(true, null)
      .then(value => {
        setTable([...value]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });
  }, []);

  const onCourseFilterSearch = async (
    selectedItem,
    selectedIndex,
    fieldValue
  ) => {
    fetchFilterListCourseQuery(selectedIndex, fieldValue)
      .then(value => {
        if (value) setTable([...value]);
        else setTable([]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });
  };

  const handleSelectedRow = async rowId => {
    fetchCoursebyIDQuery(rowId)
      .then(data => {
        if (data)
          setSelectedCourse({
            id: data.id,
            title: data.title,
            teacherName: data.teacherName,
            teacherEmail: data.teacherEmail,
            startAt: data.startAt
          });
      })
      .catch(err => {
        console.log("error - handleSelectedRow", err);
      });
  };

  const handleFetchListCourseQuery = () => {
    fetchListCourseQuery(false)
      .then(value => {
        if (value) setTable([...table, ...value]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>קורסים</h4>
          </CardHeader>
          <CardBody>
            <CustomizedFilter
              filterItems={filterItems}
              onFilterSearch={onCourseFilterSearch}
            />

            <EnhancedTableRadio
              id="EnhancedTableRadio"
              initialOrderBy={label}
              tableHeaderColor="warning"
              tableHead={headCells}
              tableData={table}
              onSelectedRow={handleSelectedRow}
              onGetMoreRows={handleFetchListCourseQuery}
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

      <GridItem xs={12} sm={12} md={6}></GridItem>
    </GridContainer>
  );
}
