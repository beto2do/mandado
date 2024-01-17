import { ReactNode } from 'react';

export interface SnackbarModel {
    open: boolean,
    autoHideDuration: number,
    message: ReactNode,
}

export class SnackbarClass implements SnackbarModel {
    open: boolean;
    autoHideDuration: number;
    message: ReactNode;

    constructor(open: boolean, autoHideDuration: number, message: ReactNode) {
        this.open = open;
        this.autoHideDuration = autoHideDuration;
        this.message = message;
    }
}

export interface SnackbarState {
    snackbar: SnackbarModel
}