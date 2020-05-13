import React from "react";
import { useDispatch } from "react-redux";


import Course from "./SelectedCourse";
import AsyncAutoComplete from "../../components/CustomInput/asyncAutocomplete";
import { fetchAllCourseQuery } from "../../queries/CourseQueries";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { setSelectedCourse } from "reducer/reducers";


export default function Teacher() {
  const dispatch = useDispatch();

  const handleCourseSelected = value => {
    console.log("handleCourseSelected", value);
    dispatch(setSelectedCourse(value));
    // value ? setCourseID(value.id) : setCourseID(null);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <GridContainer>
            <Card>
              <CardHeader color="primary"></CardHeader>
              <CardBody>
                <AsyncAutoComplete
                  fieldList="title"
                  asyncGetList={fetchAllCourseQuery}
                  onSelected={handleCourseSelected}
                  initInputValue={""}
                  label="בחר בקורס"
                />
              </CardBody>
            </Card>
          </GridContainer>
        </GridItem>
      </GridContainer>

      <Course />
    </div>
  );
}
