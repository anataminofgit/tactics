import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableContainer from "@material-ui/core/TableContainer";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import EnhancedTableHead from "./EnhanceTableHead";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function EnhancedTableRadio(props) {
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    initialOrderBy,
    onSelectedRow,
    onGetMoreRows
  } = props;

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(initialOrderBy);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleClick = (event, id) => {
    const newSelected = id;

    setSelected(newSelected);
    onSelectedRow(id);
  };

  const handleChangePage = (event, newPage) => {
    if (tableData.length <= newPage * rowsPerPage + 2 * rowsPerPage) {
      if (newPage * rowsPerPage < tableData.length) setPage(newPage);
      onGetMoreRows(false);
    } else setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = event => {
    setDense(event.target.checked);
  };
  const isSelected = id => selected.indexOf(id) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  const renderCell = row => {
    return tableHead.map((item, index) => {
      if (item.label !== null)
        return (
          <TableCell key={index} align="right">
            {row[item.id]}
          </TableCell>
        );
      return null;
    });
  };

  if (tableData.length < page * rowsPerPage) setPage(0);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              tableHead={[
                {
                  id: "radioButton",
                  numeric: false,
                  disablePadding: true,
                  label: "",
                  toSort: false
                },
                ...tableHead
              ]}
              tableHeaderColor={tableHeaderColor}
            />
            <TableBody>
              {tableData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      align="right"
                      hover
                      onClick={event => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Radio
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      {renderCell(row)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={-1}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="מספר שורות בכל דף"
          labelDisplayedRows={({ from, to }) => `שורות ${from}-${to} `}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </div>
  );
}

EnhancedTableRadio.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialOrderBy: PropTypes.string.isRequired,
  onSelectedRow: PropTypes.func.isRequired,
  onGetMoreRows: PropTypes.func.isRequired
};
