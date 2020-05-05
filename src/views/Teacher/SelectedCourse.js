import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
import EnhancedTableRadio from "../../components/Table/EnhancedTableRadio";
import TaskForm from "./taskForm";
import PropTypes from "prop-types";

import { createTask, updateTask } from "../../graphql/mutations";
import { API, graphqlOperation /* , Auth  */ } from "aws-amplify";
import {
  fetchAllTaskByCourseQuery,
  fetchTaskByCourse
} from "../../queries/TaskQueries";

export default function SelectedCourse(props) {
  const { selectedCourseID } = props;
  const [table, setTable] = useState([]);
  const [selectedTask, setSelectedTask] = useState({
    id: null,
    courseID: null,
    taskTitle: "",
    taskContent: "",
    toUpload: false
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
      id: "courseID",
      numeric: false,
      disablePadding: true,
      label: null,
      toSort: false
    },
    {
      id: "taskTitle",
      numeric: false,
      disablePadding: true,
      label: "משימה/הודעה",
      toSort: true
    },
    {
      id: "toUpload",
      numeric: false,
      disablePadding: true,
      label: "האם צריך לענות",
      toSort: false
    }
  ];

  const handleCreateTask = async task => {
    if (task)
      try {
        const createTaskByCourse = await API.graphql(
          graphqlOperation(createTask, {
            input: {
              taskTitle: task.taskTitle,
              courseID: selectedCourseID,
              taskContent: task.taskContent,
              toUpload: task.toUpload
            }
          })
        );

        const {
          id,
          courseID,
          taskTitle,
          taskContent,
          toUpload
        } = createTaskByCourse.data.createTask;

        setSelectedTask({ id, courseID, taskTitle, taskContent, toUpload });

        fetchAllTaskByCourseQuery(selectedCourseID)
          .then(value => {
            if (value) setTable([...value]);
          })
          .catch(err => {
            console.log("err use effect", err);
          });
      } catch (error) {
        console.log("error - handleCreateTask", error);
      }
  };

  const handleUpdateTask = async task => {
    try {
      await API.graphql(
        graphqlOperation(updateTask, {
          input: {
            id: task.id,
            taskTitle: task.taskTitle,
            courseID: selectedCourseID,
            taskContent: task.taskContent,
            toUpload: task.toUpload
          }
        })
      );
      fetchAllTaskByCourseQuery(selectedCourseID)
        .then(value => {
          if (value) setTable([...value]);
        })
        .catch(err => {
          console.log("error - fetchAllTaskByCourseQuery", err);
        });
    } catch (error) {
      console.log("error - update handleUpdateTask", error);
    }
  };

  useEffect(() => {
    fetchAllTaskByCourseQuery(selectedCourseID)
      .then(value => {
        setTable([...value]);
      })
      .catch(err => {
        console.log("error - useEffect", err);
      });

    setSelectedTask({
      id: null,
      courseID: null,
      taskTitle: "",
      taskContent: "",
      toUpload: false
    });
  }, [selectedCourseID]);

  const handleFetchListTaskQuery = () => {};

  const handleSelectedRow = async rowId => {
    fetchTaskByCourse(rowId)
      .then(data => {
        if (data)
          setSelectedTask({
            id: data.id,
            taskTitle: data.taskTitle,
            courseID: selectedCourseID,
            taskContent: data.taskContent,
            toUpload: data.toUpload
          });
      })
      .catch(err => {
        console.log("error - handleSelectedRow", err);
      });
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>משימות/הודעות</h4>
            </CardHeader>
            <CardBody>
              <EnhancedTableRadio
                id="EnhancedTableRadio"
                initialOrderBy={headCells[2].label}
                tableHeaderColor="warning"
                tableHead={headCells}
                tableData={table}
                onSelectedRow={handleSelectedRow}
                onGetMoreRows={handleFetchListTaskQuery}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={9}>
          <TaskForm
            selcetedTaskInput={selectedTask}
            createTask={handleCreateTask}
            updateTask={handleUpdateTask}
          />
        </GridItem>

        <GridItem xs={12} sm={12} md={6}></GridItem>
      </GridContainer>
    </div>
  );
}

SelectedCourse.propTypes = {
  selectedCourseID: PropTypes.string
};
