import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import EnhancedTableRadio from "../../components/Table/EnhancedTableRadio";
//import { courseByName } from "../../graphql/queries";
import { getCourse } from "../../graphql/queries";
import { createCourse, updateCourse } from "../../graphql/mutations";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CourseForm from "./courseForm";
import { fetchListCourseQuery } from "./CourseQueries";
import CustomizedFilter from "components/Table/CustomizedFilter.js";
//let courseFilter = null;
//let coursesNextToken = null;

export default function Course() {
  // Declare a new state variable, which we'll call "count"
  const [table, setTable] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({
    id: null,
    titel: "",
    teacherName: "",
    startAt: ""
  });
  /*   const [nextToken, setNextToken] = useState(null);
   */

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
      id: "startAt",
      numeric: true,
      disablePadding: true,
      label: "תאריך התחלה",
      toSort: false
    }
  ];

  const handleCreateCourse = async course => {
    try {
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

      const {
        id,
        startAt,
        title,
        teacherName
      } = newCourseData.data.createCourse;

      setSelectedCourse({ id, title, teacherName, startAt });

      /*       setTable([]);
      setNextToken(null);

 */
      /*       const arr = fetchListCourseQuery(true, null);
      console.log("aaa", arr);
      setTable([...arr]);

 */

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
            startAt: course.startAt
          }
        })
      ); /* fetchListCourseQuery(
        true
      ); */ //

      /*       setTable([]);
      setNextToken(null);
 */
      fetchListCourseQuery(true)
        .then(value => {
          setTable([...value]);
        })
        .catch(err => {
          console.log("err use effect", err);
        });

      /*       const arr = fetchListCourseQuery(true, null);
      setTable(...arr); */
    } catch (error) {
      console.log("error - update", error);
    }
  };

  /* const fetchListCourseQuery = async restart => {
    var toRestart = restart;
    var count = 0;
    var localNextToken = coursesNextToken;
    var localArray = [];
    let toContinue = true;

    console.log("restart", restart, "nexttoken", coursesNextToken);
    if (coursesNextToken ||  toRestart) {
      while (toContinue) {
        try {
          const response = await API.graphql(
            graphqlOperation(courseByName, {
              queryName: "Course",
              sortDirection: "ASC",
              nextToken: toRestart ? null : localNextToken,
              filter: courseFilter
            })
          );

          const data = response.data.courseByName.items;
          localNextToken = response.data.courseByName.nextToken;

          const arr = data.map(function(item) {
            return {
              id: item.id,
              title: item.title,
              teacherName: item.teacherName,
              startAt: item.startAt
            };
          });
          count = count + arr.length;

          localArray = [...localArray, ...arr];
          toRestart = false;
          if (localNextToken === null || count > 9) {
            toContinue = false;
            if (restart) setTable(localArray);
            else setTable([...table, ...localArray]);
          }
          coursesNextToken = localNextToken;
          console.log("next tiken", coursesNextToken);
        } catch (error) {
          console.log("error - fetchListCourseQuery", error);
        }
      }
    }
    console.log("restart", restart, "nexttoken", coursesNextToken);
  };
 */

  useEffect(() => {
    fetchListCourseQuery(true, null)
      .then(value => {
        setTable([...value]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });

    // fetchListCourseQuery(true);
  }, []);

  const onCourseFilterSearch = async (
    selectedItem,
    selectedIndex,
    fieldValue
  ) => {
    console.log(
      "onCourseFilterSearch",
      selectedItem,
      selectedIndex,
      fieldValue
    );

    const courseFilters = [
      { title: { contains: fieldValue } },
      { teacherName: { contains: fieldValue } },
      { startAt: { contains: fieldValue } }
    ];

    const courseFilter = selectedItem ? courseFilters[selectedIndex] : null;
    //setTable([]);
    //coursesNextToken = null;

    //fetchListCourseQuery(true);
    fetchListCourseQuery(true, courseFilter)
      .then(value => {
        setTable([...value]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });

    /*   const arr = fetchListCourseQuery(true, courseFilter);
    setTable(...arr); */
  };

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

  const handleFetchListCourseQuery = () => {
    fetchListCourseQuery(false)
      .then(value => {
        console.log(value);
        if (value) setTable([...table, ...value]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });

    /*     const arr = fetchListCourseQuery(false, null);
    setTable([...table, ...arr]);
 */
  };

  const label = headCells[1].label;

  const filterItems = ["שם הקורס", "שם המדריך", "התחלת הקורס"];

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
