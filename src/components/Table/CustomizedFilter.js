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
