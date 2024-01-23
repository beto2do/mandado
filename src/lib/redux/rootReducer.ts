import { shoppingSlice, globalSnackbarSlice } from "./slices";

export const reducer = {
  shopping: shoppingSlice.reducer,
  snackbar: globalSnackbarSlice.reducer,
};
