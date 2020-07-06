import React from "react";
import PropTypes from "prop-types";
//import clsx from "clsx";
import { /* lighten, */ makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
//import TableFooter from "@material-ui/core/TableFooter";

import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
//import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from "uuid";

//import TableSortLabel from "@material-ui/core/TableSortLabel";
//import Toolbar from "@material-ui/core/Toolbar";
//import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { green, red, blue } from "@material-ui/core/colors";
//import CardIcon from "components/Card/CardIcon.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import AlertDialog from "components/feedback/AlertDialog.js";

//import Checkbox from "@material-ui/core/Checkbox";
//import IconButton from "@material-ui/core/IconButton";
//import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
//import DeleteIcon from "@material-ui/icons/Delete";
//import FilterListIcon from "@material-ui/icons/FilterList";

import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import EnhancedTableHead from "./EnhanceTableHead";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  console.log(`stableSort  array, comparator(${array}, ${comparator})`);
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

/* const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));
 */
/* const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}; */

/* EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
}; */

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

export default function EditableTable(props) {
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    initialOrderBy,
    onUpdateList
  } = props;

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(initialOrderBy);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [newLine, setNewLine] = React.useState(
    tableHead.reduce((acc, item) => {
      return { ...acc, [item.id]: "" };
    }, {})
  );
  const [lineMode, setLineMode] = React.useState(false);
  const [table, setTable] = React.useState({ ...tableData });
  const [dialogOpenUpdate, setDialogOpenUpdate] = React.useState(false);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  /*   const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
 */
  /* const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  }; */

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewLine({ ...newLine, [name]: value });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  // const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, table.length - page * rowsPerPage);

  //const tableHead = headCells;

  if (Object.keys(table).length < page * rowsPerPage) setPage(0);

  const renderCells = row => {
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

  const handleAddclick = () => {
    setLineMode(true);
    // if (onAddRow) onAddRow(newLine);
  };

  const handleDeleteLineClick = event => {
    const { value } = event.currentTarget;
    if (value && table[value]) {
      const tmpTable = { ...table };
      delete tmpTable[value];
      setTable(tmpTable);
    }

    setLineMode(false);
    //if (onDeleteRow) onDeleteRow();
  };

  const handleOKClick = () => {
    setLineMode(false);
    const id = uuidv4();
    const obj = { [id]: { ...newLine, id: id } };
    setTable({ ...table, ...obj });
    initNewLine();
  };

  const handleCancelClick = () => {
    setLineMode(false);
    initNewLine();
  };

  const initNewLine = () => {
    const obj = tableHead.reduce((acc, item) => {
      return { ...acc, [item.id]: "" };
    }, {});

    setNewLine(obj);
  };

  const handleUpdateList = selected => {
    setDialogOpenUpdate(false);
    if (selected === "ok") onUpdateList({ ...table });
  };
  React.useEffect(() => {
    setTable({ ...tableData });
    return () => {};
  }, [tableData]);

  const renderFields = () => {
    return tableHead.map(item => {
      return item.label ? (
        <TableCell key={item.id}>
          <CustomInput
            labelText={item.id}
            id={item.id}
            key={item.id}
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: handleInputChange,
              value: newLine[item.id] || "",
              name: item.id
            }}
          />
        </TableCell>
      ) : null;
    });
  };

  const renderNewLine = () => {
    return lineMode ? (
      <TableRow key={"newLine"} align="right">
        {renderFields()}
        <TableCell>
          <IconButton
            id={"ok"}
            value={"ok"}
            onClick={handleOKClick}
            aria-label="OK"
            className={classes.iconButton}
          >
            <Icon id={"ok"} value={"ok"} style={{ color: green[500] }}>
              check_circle
            </Icon>
          </IconButton>
          <IconButton
            id={"cancel"}
            value={"canel"}
            onClick={handleCancelClick}
            aria-label="Cancel"
            className={classes.iconButton}
          >
            <Icon id={"cancel"} value={"cancel"} style={{ color: red[500] }}>
              cancel
            </Icon>
          </IconButton>
        </TableCell>
      </TableRow>
    ) : null;
  };

  const renderAdd = () => {
    return lineMode === false ? (
      <TableRow>
        <TableCell>
          <IconButton
            id={"AddIcon"}
            onClick={handleAddclick}
            aria-label="Add"
            className={classes.iconButton}
          >
            <Icon id={"add"} value={"add"} style={{ color: blue[500] }}>
              add
            </Icon>
            <p>הוספת שורה</p>
          </IconButton>
        </TableCell>
      </TableRow>
    ) : null;
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <AlertDialog
            title="עדכון "
            content="האם לעדכן?"
            toOpen={dialogOpenUpdate}
            onClose={handleUpdateList}
          />

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
              tableHead={tableHead}
              tableHeaderColor={tableHeaderColor}
            />
            <TableBody>
              {stableSort(Object.values(table), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  //console.log("row", row);
                  return (
                    <TableRow key={row.id} align="right">
                      {renderCells(row)}
                      <TableCell>
                        <IconButton
                          id={row.id}
                          value={row.id}
                          name={row.id}
                          aria-label="Delete"
                          className={classes.iconButton}
                          onClick={handleDeleteLineClick}
                        >
                          <Icon style={{ color: red[500] }}>delete</Icon>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}

              {renderNewLine()}

              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
              {renderAdd()}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={Object.keys(table).length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="מספר שורות בכל דף"
          labelDisplayedRows={({ from, to }) => `שורות ${from}-${to} `}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />

      <Button onClick={() => setDialogOpenUpdate(true)} color="primary">
        עדכון קורס
      </Button>
    </div>
  );
}

EditableTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableData: PropTypes.object.isRequired,
  tableHead: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialOrderBy: PropTypes.string.isRequired,

  onAddRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onUpdateList: PropTypes.func.isRequired
};
