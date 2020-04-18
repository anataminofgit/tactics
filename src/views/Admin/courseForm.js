//useEffect
import React, { useState } from "react";
import PropTypes from "prop-types";

/* import classNames from "classnames";
 */
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import FormControl from "@material-ui/core/FormControl";

//import React, { Fragment, useState } from "react";
//import { DatePicker } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
//import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

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

export default function CourseForm(props) {
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  const { updateCourse, createCourse } = props;

  const [inputValues, setInputValues] = useState({
    id: null,
    startAt: null
  });

  const onUpdateCourse = () => {
    updateCourse(inputValues);
  };

  const onCreateCourse = () => {
    createCourse(inputValues);
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleDateChange = date => {
    console.log("date", date);
    setInputValues({ ...inputValues, startAt: date });
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}> יצירה/עדכון קורס</h4>
            <p className={classes.cardCategoryWhite}>פרטי הקורס</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="ID (disabled)"
                  id="ID-disabled"
                  value={inputValues.id}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    disabled: true
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="שם הקורס"
                  value={inputValues.title}
                  id="course name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    name: "title"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="שם המדריך"
                  id="teacher rname"
                  value={inputValues.teacherName}
                  name="teacherName"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    name: "teacherName"
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  onChange={handleInputChange}
                  labelText="כתובת Email של המדריך"
                  id="teacher-email-address"
                  value={inputValues.teacherEmail}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    name: "teacherEmail"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      label="Start Date of Course"
                      placeholder="31/10/20"
                      value={inputValues.startAt}
                      onChange={date => handleDateChange(date)}
                      format="dd/MM/yyyy"
                    />
                  </MuiPickersUtilsProvider>
                </FormControl>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter>
            <Button
              onClick={onCreateCourse}
              disabled={
                !(
                  inputValues.title &&
                  inputValues.teacherName &&
                  inputValues.startAt
                )
              }
              color="primary"
            >
              יצירה קורס חדש
            </Button>
            <Button
              onClick={onUpdateCourse}
              disabled={
                !(
                  inputValues.id &&
                  inputValues.title &&
                  inputValues.teacherName &&
                  inputValues.startAt
                )
              }
              color="primary"
            >
              עדכון קורס קיים
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

CourseForm.propTypes = {
  createCourse: PropTypes.func.isRequired,
  updateCourse: PropTypes.func.isRequired
};
