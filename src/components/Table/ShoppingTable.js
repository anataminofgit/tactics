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
import { green } from "@material-ui/core/colors";
import TableHead from "@material-ui/core/TableHead";

// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function ShoppingTable(props) {
  const classes = useStyles();
  const {
    products,
    rtlActive,
    tableHead,
    tableHeaderColor,
    onSubmitOrder
  } = props;
  const [total, setTotal] = React.useState(0);
  const tableCellClasses = classnames(classes.tableCell, {
    [classes.tableCellRTL]: rtlActive
  });
  const [productQuantity, setProductQuantity] = React.useState([]);
  const [productsTotals, setProductsTotals] = React.useState();

  const handleSubmitOrder = () => {
    onSubmitOrder(productQuantity);
  };

  const handleMinus = event => {
    const index = event.target.id;
    const arrayQuantity = [...productQuantity];
    const arrayTotals = [...productsTotals];
    if (arrayQuantity[index].quantity > 0) {
      arrayQuantity[index].quantity = arrayQuantity[index].quantity - 1;
      setProductQuantity(arrayQuantity);
    }
    arrayTotals[index] =
      arrayQuantity[index].quantity * products[index].productPrice;
    setProductsTotals(arrayTotals);
    const sum = arrayTotals.reduce(function(acc, item) {
      return acc + item;
    }, 0);
    setTotal(sum);
  };

  const handlePlus = event => {
    const index = event.target.id;
    const arrayQuantity = [...productQuantity];
    const arrayTotals = [...productsTotals];
    arrayQuantity[index].quantity = arrayQuantity[index].quantity + 1;
    setProductQuantity(arrayQuantity);

    arrayTotals[index] =
      arrayQuantity[index].quantity * products[index].productPrice;
    setProductsTotals(arrayTotals);
    const sum = arrayTotals.reduce(function(acc, item) {
      return acc + item;
    }, 0);
    setTotal(sum);
  };

  React.useEffect(() => {
    setProductsTotals(
      products.reduce((acc, product) => {
        return [...acc, product.quantity * product.productPrice];
      }, [])
    );
    setProductQuantity(
      products.reduce((acc, product) => {
        return [...acc, { quantity: product.quantity, id: product.id }];
      }, [])
    );
    return () => {};
  }, [products]);

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
        {products.map((product, index) => {
          return (
            <TableRow key={index} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>
                {product.productName}
              </TableCell>
              <TableCell className={tableCellClasses}>
                {product.productPrice}
              </TableCell>
              <TableCell className={classes.tableActions}>
                <IconButton
                  id={index}
                  value={index}
                  onClick={handlePlus}
                  aria-label="Add"
                  className={classes.iconButton}
                >
                  <Icon id={index} value={index} style={{ color: green[500] }}>
                    add_circle
                  </Icon>
                </IconButton>
                <p className={classes.top}>
                  {productQuantity[index] ? productQuantity[index].quantity : 0}
                </p>
                <IconButton
                  id={index}
                  value={index}
                  aria-label="Remove"
                  className={classes.iconButton}
                  onClick={handleMinus}
                >
                  <Icon id={index} value={index} color="secondary">
                    remove_circle
                  </Icon>
                </IconButton>
              </TableCell>
              <TableCell className={tableCellClasses}>
                {productsTotals[index]}
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
            <Button onClick={handleSubmitOrder} size="lg" color="warning">
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
  onSubmitOrder: PropTypes.func.isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.string),
  rtlActive: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.object),
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
