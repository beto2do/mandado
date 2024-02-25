import { TableCellBaseProps } from "@mui/material/TableCell";

type AlignValue = "inherit" | "left" | "center" | "right" | "justify";

export type TableHeaders = Pick<TableCell, "label" | "align">;

export interface TableRows {
  id: string;
  columns: TableCell[];
}

export interface TableCell {
  label: string;
  align?: AlignValue;
  component?: React.ElementType<React.ThHTMLAttributes<HTMLTableCellElement>>;
  scope?: TableCellBaseProps["scope"];
  chip?: string;
}

export interface PantryTable {
  _id: string;
  headers: TableHeaders[];
  rows: TableRows[];
}

export interface MenuLink {
  label: string;
  path: string;
}
