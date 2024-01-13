import { ReactNode } from 'react';

export interface SnackbarModel {
    open: boolean,
    autoHideDuration: number,
    message: ReactNode,
}

export interface SnackbarState {
    snackbar: SnackbarModel
}