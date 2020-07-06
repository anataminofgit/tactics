//useEffect
import React, { useState, useEffect } from "react";
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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import AlertDialog from "components/feedback/AlertDialog.js";
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
//import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";
//import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Snackbar from "@material-ui/core//Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
//import classNames from "classnames";

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
  const { updateCourse, createCourse, selcetedCourseInput } = props;
  const [dialogOpenCreate, setDialogOpenCreate] = useState(false);
  const [dialogOpenUpdate, setDialogOpenUpdate] = useState(false);
  const [tc, setTC] = React.useState(false);
  const [info, setInfo] = React.useState("");
  const [inputValues, setInputValues] = useState(selcetedCourseInput);

  const onUpdateCourse = value => {
    // console.log("onUpdateCourse, ", value);
    setDialogOpenUpdate(false);
    if (value === "ok") {
      // console.log("updateCourse", inputValues);
      updateCourse(inputValues);
      setInfo("updated");
      setTC(true);
    }
  };

  const onCreateCourse = value => {
    setDialogOpenCreate(false);
    if (value === "ok") createCourse(inputValues);
    setInfo("created");
    setTC(true);
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleDateChange = date => {
    const shortDate = date.toLocaleDateString("en-US"); //.toLocaleDateString("en-GB");
    setInputValues({ ...inputValues, startAt: shortDate });
  };

  useEffect(() => {
    setInputValues({
      id: selcetedCourseInput.id,
      title: selcetedCourseInput.title,
      startAt: selcetedCourseInput.startAt,
      teacherName: selcetedCourseInput.teacherName,
      teacherEmail: selcetedCourseInput.teacherEmail
    });
  }, [selcetedCourseInput]);

  return (
    <div>
      <AlertDialog
        title="עדכון קורס"
        content="האם לעדכן את הקודס?"
        toOpen={dialogOpenUpdate}
        onClose={onUpdateCourse}
      />
      <AlertDialog
        title="יצירת קורס"
        content="האם ליצור את הקורס?"
        toOpen={dialogOpenCreate}
        onClose={onCreateCourse}
      />

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}> יצירה/עדכון קורס</h4>
              <p className={classes.cardCategoryWhite}>פרטי הקורס</p>
            </CardHeader>
            <CardBody>
              <Snackbar
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
                open={tc}
                autoHideDuration={6000}
                onClose={() => {
                  setTC(false);
                }}
                color="warning"
                message={info}
                action={
                  <React.Fragment>
                    <IconButton
                      size="small"
                      aria-label="close"
                      color="inherit"
                      onClick={() => {
                        setTC(false);
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </React.Fragment>
                }
              />

              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="ID (disabled)"
                    id="course-ID-disabled"
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
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="שם הקורס"
                    id="course name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleInputChange,
                      value: inputValues.title || "",
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
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleInputChange,
                      value: inputValues.teacherName,
                      name: "teacherName"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    onChange={handleInputChange}
                    labelText="כתובת Email של המדריך"
                    id="teacher-email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: handleInputChange,
                      value: inputValues.teacherEmail || "",
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
                        value={inputValues.startAt || Date()}
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
                onClick={() => setDialogOpenCreate(true)}
                disabled={
                  !(
                    inputValues.title &&
                    inputValues.teacherName &&
                    inputValues.teacherEmail &&
                    inputValues.startAt
                  )
                }
                color="primary"
              >
                יצירה קורס חדש
              </Button>
              <Button
                onClick={() => setDialogOpenUpdate(true)}
                disabled={
                  !(
                    inputValues.id &&
                    inputValues.title &&
                    inputValues.teacherName &&
                    inputValues.teacherEmail &&
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
    </div>
  );
}

CourseForm.propTypes = {
  createCourse: PropTypes.func.isRequired,
  updateCourse: PropTypes.func.isRequired,
  // deleteCourse: PropTypes.func.isRequired,
  selcetedCourseInput: PropTypes.object.isRequired
};
