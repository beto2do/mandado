import { ReactNode } from 'react';

export interface SnackbarModel {
    open: boolean,
    autoHideDuration: number,
    message: ReactNode,
}

export class SnackbarClass implements SnackbarModel {
    constructor(public open: boolean, public autoHideDuration: number, public message: ReactNode) {}
}

export interface SnackbarState {
    snackbar: SnackbarModel
}