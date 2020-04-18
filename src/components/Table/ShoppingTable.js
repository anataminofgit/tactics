import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import Checkbox from "@material-ui/core/Checkbox";
//import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Button from "components/CustomButtons/Button.js";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";

//import Edit from "@material-ui/icons/Edit";
//import Icon from "@material-ui/core/Icon";
//import Remove from "@material-ui/icons/Remove";
import { green } from "@material-ui/core/colors";

//import Close from "@material-ui/icons/Close";
//import Check from "@material-ui/icons/Check";
import TableHead from "@material-ui/core/TableHead";

// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function ShoppingTable(props) {
  const classes = useStyles();

  const [productQuantity, setQuantity] = React.useState(
    new Array(props.products.length).fill(0)
  );

  const [total, setTotal] = React.useState(0);

  const [productsTotals, setProductTotal] = React.useState(
    new Array(props.products.length).fill(0)
  );

  const handleMinus = event => {
    const index = event.target.id;
    const arrayQuantity = [...productQuantity];
    const arrayTotals = [...productsTotals];
    if (arrayQuantity[index] > 0) {
      arrayQuantity[index] = arrayQuantity[index] - 1;
      setQuantity(arrayQuantity);
    }
    arrayTotals[index] = arrayQuantity[index] * props.prices[index];
    setProductTotal(arrayTotals);
    const sum = arrayTotals.reduce(function(a, b) {
      return a + b;
    }, 0);
    setTotal(sum);
  };

  const handlePlus = event => {
    const index = event.target.id;
    const arrayQuantity = [...productQuantity];
    const arrayTotals = [...productsTotals];
    arrayQuantity[index] = arrayQuantity[index] + 1;
    setQuantity(arrayQuantity);
    arrayTotals[index] = arrayQuantity[index] * props.prices[index];
    setProductTotal(arrayTotals);
    const sum = arrayTotals.reduce(function(a, b) {
      return a + b;
    }, 0);
    setTotal(sum);
  };
  /* const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }; */
  const { prices, products, rtlActive, tableHead, tableHeaderColor } = props;
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });
  return (
    <Table className={classes.table}>
      {tableHead !== undefined ? (
        <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
          <TableRow className={classes.tableHeadRow}>
            {tableHead.map((prop, key) => {
              return (
                <TableCell
                  className={tableCellClasses + " " + classes.tableHeadCell}
                  key={"header" + key}
                >
                  {prop}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
      ) : null}
      <TableBody>
        {products.map((prop, key) => {
          return (
            <TableRow key={key} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>
                {products[key]}
              </TableCell>
              <TableCell className={tableCellClasses}>{prices[key]}</TableCell>

              <TableCell className={classes.tableActions}>
                <IconButton
                  id={key}
                  value={key}
                  onClick={handlePlus}
                  aria-label="Add"
                  className={classes.iconButton}
                >
                  <Icon id={key} value={key} style={{ color: green[500] }}>
                    add_circle
                  </Icon>
                </IconButton>
                <p className={classes.top}>{productQuantity[key]}</p>
                <IconButton
                  id={key}
                  value={key}
                  aria-label="Remove"
                  className={classes.iconButton}
                  onClick={handleMinus}
                >
                  <Icon id={key} value={key} color="secondary">
                    remove_circle
                  </Icon>
                </IconButton>
              </TableCell>
              <TableCell className={tableCellClasses}>
                {productsTotals[key]}
              </TableCell>
            </TableRow>
          );
        })}
        <TableRow className={classes.tableRow}>
          <TableCell />
          <TableCell />
          <TableCell className={classes.tableCell}>
            <h4 className={classes.cardTitle}>
              סהכ לתשלום <small>(טינקלים)</small>
            </h4>
          </TableCell>
          <TableCell className={tableCellClasses}>
            <h4 className={classes.cardTitle}>{total} </h4>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell />

          <TableCell />

          <TableCell />

          <TableCell className={tableCellClasses}>
            <Button size="lg" color="warning">
              הזמנה
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

ShoppingTable.defaultProps = {
  tableHeaderColor: "gray"
};

ShoppingTable.propTypes = {
  handleMinus: PropTypes.func,
  handlePlus: PropTypes.func,
  tableHead: PropTypes.arrayOf(PropTypes.string),
  rtlActive: PropTypes.bool,
  prices: PropTypes.arrayOf(PropTypes.number),
  products: PropTypes.arrayOf(PropTypes.string),
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};
