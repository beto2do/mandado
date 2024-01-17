import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SnackbarModel, SnackbarState, SnackbarClass } from '@/models'

const defaultSnackbar: SnackbarModel =  new SnackbarClass(false, 6000, '');

const initialState: SnackbarState = {
    snackbar: defaultSnackbar
}

export const globalSnackbarSlice = createSlice({
  name: 'globalSnackbar',
  initialState,
  reducers: {
    showSnackBar: (state, action: PayloadAction<SnackbarModel>) => {
      state.snackbar = action.payload;
    },
    reset: (state) => {
      state.snackbar = defaultSnackbar;
    },
  }
})

export const { showSnackBar, reset } = globalSnackbarSlice.actions

export default globalSnackbarSlice.reducer