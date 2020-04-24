import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableHead from "@material-ui/core/TableHead";

import styles from "assets/jss/material-dashboard-react/views/rtlStyle.js";
//import CustomInput from "components/CustomInput/CustomInput";

import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(styles);

export default function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, tableHead } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };
  const classes = useStyles();
  const renderCell = () => {
    return tableHead.map(headCell => {
      if (headCell.label !== null)
        return (
          <TableCell
            align="right"
            key={headCell.label}
            sortDirection={orderBy === headCell.label ? order : false}
          >
            {headCell.toSort === true ? (
              <TableSortLabel
                align="right"
                active={orderBy === headCell.label}
                direction={orderBy === headCell.label ? order : "asc"}
                onClick={createSortHandler(headCell.label)}
              >
                {headCell.label}
                {orderBy === headCell.label ? (
                  <span align="right" className={classes.visuallyHidden}>
                    <br />
                    {order === "desc" ? "desc" : "asc"}
                  </span>
                ) : null}
              </TableSortLabel>
            ) : (
              <InputLabel>{headCell.label}</InputLabel>
            )}
          </TableCell>
        );
      else return null;
    });
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="right"></TableCell>
        {renderCell()}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.object).isRequired,
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
