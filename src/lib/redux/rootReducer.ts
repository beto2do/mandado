import { shoppingSlice, globalSnackbarSlice, productSlice } from "./slices";

export const reducer = {
  shopping: shoppingSlice.reducer,
  snackbar: globalSnackbarSlice.reducer,
  product: productSlice.reducer,
};
