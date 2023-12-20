
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import {TableHeaders, TableRows} from '@/models'

export function TableView({headers, rows}:{
    headers: TableHeaders[], 
    rows: TableRows[]
    }) {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table" className='table-auto'>
          <TableHead className='bg-slate-600'>
            <TableRow>
                {
                    headers.map(header => (
                        <TableCell className='text-white' align={header.align}>{header.label}</TableCell>
                    ))
                }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {
                    row.columns.map(column => (
                        <TableCell 
                            component={column.component}
                            scope={column.scope}
                            align={column.align}>
                        {column.label}
                        {column.chip && <Chip label={column.chip} className='bg-red-300 ml-1' />}
                      </TableCell>
                    ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}