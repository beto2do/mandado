import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SnackbarModel, SnackbarState, SnackbarClass } from "@/models";

const defaultSnackbar: SnackbarModel = new SnackbarClass(false, 6000, "");

const initialState: SnackbarState = {
  open: defaultSnackbar.open,
  autoHideDuration: defaultSnackbar.autoHideDuration,
  message: defaultSnackbar.message,
};

export const globalSnackbarSlice = createSlice({
  name: "globalSnackbar",
  initialState,
  reducers: {
    showSnackBar: (state, action: PayloadAction<SnackbarModel>) => {
      state.open = action.payload.open;
      state.autoHideDuration = action.payload.autoHideDuration;
      state.message = action.payload.message;
    },
    reset: (state) => {
      state.open = defaultSnackbar.open;
      state.autoHideDuration = defaultSnackbar.autoHideDuration;
      state.message = defaultSnackbar.message;
    },
  },
});

export const { showSnackBar, reset } = globalSnackbarSlice.actions;

export default globalSnackbarSlice.reducer;
