import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ConfirmationDialogProps } from "@/models";
import { useId } from "react";

export function ConfirmationDialog({
  open,
  dialogTitle,
  dialogDesc,
  disagreeLabel,
  agreeLabel,
  handleAgree,
  handleDisagree,
}: ConfirmationDialogProps) {
  const alertDialogTitle = useId();
  const alertDialogDesc = useId();

  return (
    <>
      <Dialog
        open={open}
        onClose={handleDisagree}
        aria-labelledby={alertDialogTitle}
        aria-describedby={alertDialogDesc}
      >
        <DialogTitle id={alertDialogTitle}>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id={alertDialogDesc}>
            {dialogDesc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDisagree}>{disagreeLabel}</Button>
          <Button onClick={handleAgree} autoFocus>
            {agreeLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
