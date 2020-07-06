//useEffect
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import AsyncAutoComplete from "../../components/CustomInput/asyncAutocomplete";
import {
  fetchAllCourseQuery,
  fetchCoursebyIDQuery
} from "../../queries/CourseQueries";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

export default function StudentForm(props) {
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  const { updateStudent, createStudent, selcetedStudentInput } = props;

  const [inputValues, setInputValues] = useState(selcetedStudentInput);
  const [course, setCourse] = useState({ id: null, title: "" });

  const onUpdateStudent = () => {
    updateStudent(inputValues, course.id);
  };

  const onCreateStudent = () => {
    createStudent(inputValues, course.id);
  };

  const handleCourseSelected = value => {
    value ? setCourse(value) : setCourse({ id: null, title: "" });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    setInputValues({
      id: selcetedStudentInput.id,
      name: selcetedStudentInput.name,
      address: selcetedStudentInput.address,
      email: selcetedStudentInput.email,
      phone: selcetedStudentInput.phone,
      courseID: selcetedStudentInput.courseID
    });

    fetchCoursebyIDQuery(selcetedStudentInput.courseID)
      .then(value => {
        if (value) {
          setCourse({ id: value.id, title: value.title });
        } else setCourse({ id: null, title: "" });
      })
      .catch(err => {
        console.log("err use effect StudenForm", err);
        setCourse({ id: null, title: "" });
      });
  }, [selcetedStudentInput]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}> יצירה/עדכון תלמיד</h4>
            <p className={classes.cardCategoryWhite}>פרטי התלמיד</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="ID (disabled)"
                  id="student-ID-disabled"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    disabled: true,
                    value: inputValues.id || "",
                    name: "id"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <CustomInput
                  labelText="שם התלמיד"
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    value: inputValues.name || "",
                    name: "name"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <CustomInput
                  labelText="כתובת דואר אלקטרוני"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    value: inputValues.email || "",
                    name: "email"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <CustomInput
                  onChange={handleInputChange}
                  labelText="כתובת מגורים"
                  id="address"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    value: inputValues.address || "",
                    name: "address"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={10}>
                <CustomInput
                  color="success"
                  onChange={handleInputChange}
                  labelText="מספר טלפון"
                  id="phone"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    value: inputValues.phone || "",
                    name: "phone"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <GridContainer>
                  <AsyncAutoComplete
                    color="success"
                    fieldList="title"
                    asyncGetList={fetchAllCourseQuery}
                    onSelected={handleCourseSelected}
                    initInputValue={course ? course.title : ""}
                    label="משתתף בקורס"
                  />
                </GridContainer>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button
              onClick={onCreateStudent}
              disabled={
                !(
                  inputValues.name &&
                  inputValues.email &&
                  inputValues.address &&
                  inputValues.phone
                )
              }
              color="success"
            >
              יצירה תלמיד חדש
            </Button>
            <Button
              onClick={onUpdateStudent}
              disabled={
                !(
                  inputValues.id &&
                  inputValues.name &&
                  inputValues.email &&
                  inputValues.address &&
                  inputValues.phone
                )
              }
              color="success"
            >
              עדכון תלמיד קיים
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

StudentForm.propTypes = {
  createStudent: PropTypes.func.isRequired,
  updateStudent: PropTypes.func.isRequired,
  // deleteStudent: PropTypes.func.isRequired,
  selcetedStudentInput: PropTypes.object.isRequired
};
