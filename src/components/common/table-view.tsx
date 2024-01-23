import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { TableHeaders, TableRows } from "@/models";

export function TableView({
  headers,
  rows,
}: {
  headers: TableHeaders[];
  rows: TableRows[];
}) {
  return (
    <TableContainer component={Paper} className="mb-2.5">
      <Table
        sx={{ minWidth: 500 }}
        aria-label="simple table"
        className="table-auto"
      >
        <TableHead className="bg-slate-600">
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={`table-header-cell${index}`}
                className="text-white"
                align={header.align}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={`table-body-row${index}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {row.columns.map((column, index) => (
                <TableCell
                  key={`table-body-cell${index}`}
                  component={column.component}
                  scope={column.scope}
                  align={column.align}
                >
                  {column.label}
                  {column.chip && (
                    <Chip label={column.chip} className="bg-red-300 ml-1" />
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
