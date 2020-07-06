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
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";

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

export default function TaskForm(props) {
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  const { updateTask, createTask, selcetedTaskInput } = props;
  const [inputValues, setInputValues] = useState(selcetedTaskInput);

  const onUpdateTask = () => {
    updateTask(inputValues);
  };

  const onCreateTask = () => {
    createTask(inputValues);
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
      id: selcetedTaskInput.id,
      taskTitle: selcetedTaskInput.taskTitle,
      taskContent: selcetedTaskInput.taskContent,
      toUpload: selcetedTaskInput.toUpload
    });
  }, [selcetedTaskInput]);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}> משימה/הודעה</h4>
            <p className={classes.cardCategoryWhite}>פרטי המשימה/ההודעה</p>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CustomInput
                  labelText="ID (disabled)"
                  id="task-ID-disabled"
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
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="כותרת משימה"
                  id="taskTitle"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    value: inputValues.taskTitle || "",
                    name: "taskTitle"
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  onChange={handleInputChange}
                  labelText="  האם יש צורך בתשובה "
                  id="toUpload"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: handleInputChange,
                    value: "",
                    name: "toUpload"
                  }}
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <TextField
                  id="taskContent"
                  label="תוכן ההודעה"
                  multiline
                  rtl
                  rows={4}
                  defaultValue={inputValues.taskContent || ""}
                  variant="outlined"
                  fullWidth
                  onChange={handleInputChange}
                  value={inputValues.taskContent || ""}
                  name="taskContent"
                />
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      label="Due Date"
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
              onClick={onCreateTask}
              disabled={!(inputValues.taskTitle && inputValues.taskContent)}
              color="primary"
            >
              יצירה משימה/הודעה חדשה
            </Button>
            <Button
              onClick={onUpdateTask}
              disabled={
                !(
                  inputValues.id &&
                  inputValues.taskTitle &&
                  inputValues.taskContent
                )
              }
              color="primary"
            >
              עדכון משימה/הודעה קיימת
            </Button>
          </CardFooter>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  // deleteTask: PropTypes.func.isRequired,
  selcetedTaskInput: PropTypes.object.isRequired
};
