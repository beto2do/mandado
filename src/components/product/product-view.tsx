"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useEffect, useState } from 'react';
import { Product } from '@/models';

export function ProductView() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=> {
        let ignore = false;

        fetch('/api/product')
        .then(response => response.json())
        .then(dataProducts => {
            if(!ignore) {
                setProducts(dataProducts);
            }
        })
        return () => {
            ignore = true
        }
    },[]);

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='bg-slate-600'>
            <TableRow>
              <TableCell className='text-white'>Name</TableCell>
              <TableCell className='text-white' align="right">Category</TableCell>
              <TableCell className='text-white' align="right">Calories</TableCell>
              <TableCell className='text-white' align="right">Fat&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Protein&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Out of Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((row) => (
              <TableRow
                hover
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.isOutOfStock ? <InventorySharpIcon className='text-green-600' /> : <PendingActionsIcon className='text-gray-500' />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}