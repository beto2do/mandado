import { TableCellBaseProps } from '@mui/material/TableCell/TableCell'

export interface TableHeaders {
    label: string, 
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
}

export interface TableRows {
    id: string, 
    columns: TableCell[],
}

export interface TableCell {
    label:string, 
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify', 
    component?: React.ElementType<React.ThHTMLAttributes<HTMLTableCellElement>>, 
    scope?:TableCellBaseProps['scope'],
    chip?: string
}