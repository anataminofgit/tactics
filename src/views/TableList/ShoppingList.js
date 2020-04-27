import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Button from "components/CustomButtons/Button.js";

// import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
//import CardIcon from "components/Card/CardIcon.js";
import ShoppingTable from "components/Table/ShoppingTable";
//import CardFooter from "components/Card/CardFooter.js";

const useStyles = makeStyles(styles);

export default function ShoppingList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="warning">
            <Icon>content_copy</Icon>
            <h4 className={classes.cardTitleWhite}>רשימת חלקים</h4>
            <p className={classes.cardCategoryWhite}>
              אנא הזמן חלקים לשיעור הבא
            </p>
          </CardHeader>
          <CardBody>
            <ShoppingTable
              tableHead={["שם הפריט", "מחיר בטינקלים", " מחיר", "סכום כולל"]}
              tableHeaderColor="warning"
              products={["מברג", "ציריה", "בורג 5 ", "בורד 10"]}
              prices={[3, 5, 6, 2]}
              rtlActive
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
