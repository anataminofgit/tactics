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
import StudentForm from "./studentForm";

import { getStudent } from "../../graphql/queries2";
import { createStudent, updateStudent } from "../../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import {
  fetchListProductsQuery,
  fetchFilterListProductsQuery
} from "../../queries/StudentQueries";

export default function Products() {
  const [table, setTable] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({
    id: null,
    namde: "",
    address: "",
    phone: "",
    email: "",
    courseID: null
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
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "שם התלמיד",
      toSort: true
    },
    {
      id: "email",
      numeric: false,
      disablePadding: true,
      label: "כתובת דואר אלקטרוני ",
      toSort: false
    }
  ];
  const label = headCells[1].label; //title
  const filterItems = ["שם התלמיד", "כתובת מייל"];

  const handleCreateStudent = async (student, courseId) => {
    try {
      const newStudentData = await API.graphql(
        graphqlOperation(createStudent, {
          input: {
            name: student.name,
            phone: student.phone,
            address: student.address,
            queryName: "Student",
            email: student.email,
            courseID: courseId
          }
        })
      );

      const {
        id,
        name,
        address,
        phone,
        email,
        courseID
      } = newStudentData.data.createStudent;

      setSelectedStudent({ id, name, address, phone, email, courseID });

      fetchListProductsQuery(true)
        .then(value => {
          setTable([...value]);
        })
        .catch(err => {
          console.log("err use effect", err);
        });
    } catch (error) {
      console.log("error - create student", error);
    }
  };

  const handleUpdateStudent = async (Student, courseId) => {
    try {
      await API.graphql(
        graphqlOperation(updateStudent, {
          input: {
            id: Student.id,
            name: Student.name,
            queryName: "Student",
            phone: Student.phone,
            address: Student.address,
            email: Student.email,
            courseID: courseId
          }
        })
      );
      fetchListProductsQuery(true)
        .then(value => {
          setTable([...value]);
        })
        .catch(err => {
          console.log("err use effect", err);
        });
    } catch (error) {
      console.log("error - update student", error);
    }
  };

  useEffect(() => {
    fetchListProductsQuery(true, null)
      .then(value => {
        setTable([...value]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });
  }, []);

  const onStudentFilterSearch = async (
    selectedItem,
    selectedIndex,
    fieldValue
  ) => {
    fetchFilterListProductsQuery(selectedIndex, fieldValue)
      .then(value => {
        if (value) setTable([...value]);
        else setTable([]);
      })
      .catch(err => {
        console.log("err use effect", err);
      });
  };

  const handleSelectedRow = async rowId => {
    try {
      const response = await API.graphql(
        graphqlOperation(getStudent, {
          id: rowId
        })
      );

      const data = response.data.getStudent;

      setSelectedStudent({
        id: data.id,
        name: data.name,
        address: data.address,
        phone: data.phone,
        email: data.email,
        courseID: data.courseID
      });
    } catch (error) {
      console.log("error - fetchGetStudentQuery", error);
    }
  };

  const handleFetchListProductsQuery = () => {
    fetchListProductsQuery(false)
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
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>רשימת תלמידים</h4>
          </CardHeader>
          <CardBody>
            <CustomizedFilter
              filterItems={filterItems}
              onFilterSearch={onStudentFilterSearch}
            />

            <EnhancedTableRadio
              id="EnhancedTableRadio"
              initialOrderBy={label}
              tableHeaderColor="warning"
              tableHead={headCells}
              tableData={table}
              onSelectedRow={handleSelectedRow}
              onGetMoreRows={handleFetchListProductsQuery}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <StudentForm
          selcetedStudentInput={selectedStudent}
          createStudent={handleCreateStudent}
          updateStudent={handleUpdateStudent}
        />
      </GridItem>

      <GridItem xs={12} sm={12} md={6}></GridItem>
    </GridContainer>
  );
}
