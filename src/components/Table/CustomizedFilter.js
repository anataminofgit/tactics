/* , withStyles
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//import NativeSelect from "@material-ui/core/NativeSelect";
//import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";

import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/customFilterStyle.js";

const useStyles = makeStyles(styles);

/* const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase); */

/* const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
})); */

/* 
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
})); */

export default function CustomizedFilter(props) {
  const noFilter = "ללא סינון";

  const classes = useStyles();
  const [filterItem, setfilterItem] = React.useState(noFilter);
  const [filterTextField, setfilterTextField] = React.useState("");

  const handleInputChange = e => {
    const { value } = e.target;
    setfilterTextField(value);
  };

  const handleChange = event => {
    setfilterItem(event.target.value);
  };

  const { filterItems, onFilterSearch } = props;

  const onHandleSearch = () => {
    const notTofilter = filterItem === noFilter || filterTextField === "";
    const item = notTofilter ? null : filterItem;
    const field = notTofilter ? null : filterTextField;
    const itemId = notTofilter
      ? null
      : filterItems.findIndex(val => val === filterItem);
    onFilterSearch(item, itemId, field);
  };

  return (
    <div>
      <FormControl className={classes.margin + " " + classes.formControl}>
        <InputLabel className={classes.root} id="demo-simple-select-label">
          סינון לפי:
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterItem}
          onChange={handleChange}
        >
          <MenuItem value={noFilter}>{noFilter}</MenuItem>
          {filterItems.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <CustomInput
        formControlProps={{
          className: classes.margin + " " + classes.search
        }}
        inputProps={{
          placeholder: "חיפוש",
          onChange: handleInputChange,
          inputProps: {
            "aria-label": "Search"
          }
        }}
      />
      <Button
        onClick={onHandleSearch}
        color="white"
        aria-label="edit"
        justIcon
        round
      >
        <Search />
      </Button>
    </div>
  );
}

CustomizedFilter.propTypes = {
  filterItems: PropTypes.arrayOf(String).isRequired,
  onFilterSearch: PropTypes.func.isRequired
};
