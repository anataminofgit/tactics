import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

export default function AlertDialog(props) {
  const { title, content, cancel, ok, toOpen, onClose } = props;
  const [open, setOpen] = React.useState(toOpen);

  const handleClose = value => {
    if (onClose) onClose(value);
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(toOpen);

    return () => {};
  }, [toOpen]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            key={cancel ? cancel : "cancel"}
            onClick={() => handleClose("cancel")}
            color="primary"
          >
            {cancel ? cancel : "cancel"}
          </Button>
          <Button
            key={ok ? ok : "ok"}
            onClick={() => handleClose("ok")}
            color="primary"
            autoFocus
          >
            {ok ? ok : "ok"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
AlertDialog.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  cancel: PropTypes.string,
  ok: PropTypes.string,
  toOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func
};
