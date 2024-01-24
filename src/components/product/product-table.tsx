"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductRows } from "@/components/product";
import { useEffect, useState } from "react";
import { Product } from "@/models";
import { getProducts } from "@/services";

export function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let ignore = false;

    getProducts().then((dataProducts) => {
      if (!ignore) {
        setProducts(dataProducts);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-slate-600">
          <TableRow>
            <TableCell className="text-white">Name</TableCell>
            <TableCell className="text-white" align="right">
              Category
            </TableCell>
            <TableCell className="text-white" align="right">
              Calories
            </TableCell>
            <TableCell className="text-white" align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell className="text-white" align="right">
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell className="text-white" align="right">
              Protein&nbsp;(g)
            </TableCell>
            <TableCell className="text-white" align="right">
              Out of Stock
            </TableCell>
            <TableCell className="text-white" align="right">
              Edition
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <ProductRows products={products}/>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
