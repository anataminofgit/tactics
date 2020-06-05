// *https://www.registers.service.gov.uk/registers/country/use-the-api*
//import fetch from "cross-fetch";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

export default function AsyncAutoComplete(props) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  //const [value, setValue] = React.useState();

  const { asyncGetList, fieldList, onSelected, initInputValue, label } = props;
  const [inputValue, setInputValue] = React.useState(initInputValue);

  const hadleChange = (event, value, reason) => {
    onSelected(value, reason);
  };

  const getDataCallBack = React.useCallback(() => {
    return asyncGetList();
  }, [asyncGetList]);

  React.useEffect(() => {
    let active = true;

    setInputValue(initInputValue);
    if (!loading) {
      return undefined;
    }

    getDataCallBack()
      .then(value => {
        if (active) {
          if (value) {
            setOptions([...value]);
          }
        }
      })
      .catch(err => {
        console.log("fetchListCourseQuery 1", err);
      });

    return () => {
      active = false;
    };
  }, [loading, getDataCallBack, initInputValue]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      label={label}
      autoComplete={true}
      onChange={hadleChange}
      id="asynchronous-list"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) =>
        option[fieldList] === value[fieldList]
      }
      getOptionLabel={option => option[fieldList]}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  );
}
AsyncAutoComplete.propTypes = {
  asyncGetList: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  fieldList: PropTypes.string.isRequired,
  initInputValue: PropTypes.string,
  label: PropTypes.string
};
