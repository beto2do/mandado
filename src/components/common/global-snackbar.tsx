"use client";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { SyntheticEvent } from "react";
import {
  globalSnackbarSlice,
  useSelector,
  useDispatch,
  selectSnackbar,
} from "@/lib/redux";
import { SnackbarModel } from "@/models";

export function GlobalSnackbar() {
  const snackbar: SnackbarModel = useSelector(selectSnackbar);
  const dispatch = useDispatch();

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(globalSnackbarSlice.actions.reset());
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={snackbar.autoHideDuration}
      onClose={handleClose}
      message={snackbar.message}
      action={action}
    />
  );
}
