import { Product } from '@/models'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

export function PantryTable({products}: {products: Product[]}) {
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table" className='table-auto'>
          <TableHead className='bg-slate-600'>
            <TableRow>
              <TableCell className='text-white'>Desserts</TableCell>
              <TableCell className='text-white' align="right">Calories</TableCell>
              <TableCell className='text-white' align="right">Fat&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                  <Chip label="Out of stock" className='bg-red-300 ml-1' />
                </TableCell>
                <TableCell align="right">{product.calories}</TableCell>
                <TableCell align="right">{product.fat}</TableCell>
                <TableCell align="right">{product.carbs}</TableCell>
                <TableCell align="right">{product.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}