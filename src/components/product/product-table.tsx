"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ProductRows } from "@/components/product";
import { useEffect } from "react";
import { useSelector } from "@/lib/redux";
import { selectAllProducts, fetchProducts, useDispatch } from "@/lib/redux";
import { SkeletonList } from "@/components/common";

export function ProductTable() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector((state) => state.product.status);

  useEffect(() => {
    let ignore = false;

    if (productStatus === "idle") {
      if (!ignore) {
        dispatch(fetchProducts());
      }
    }

    return () => {
      ignore = true;
    };
  }, [productStatus, dispatch]);

  let content;
  const productTable = (
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
          <ProductRows products={products} />
        </TableBody>
      </Table>
    </TableContainer>
  );

  //TODO handle error case
  if (productStatus === "loading" || productStatus === "idle") {
    content = <SkeletonList />;
  } else if (productStatus === "succeeded") {
    content = productTable;
  }

  return content;
}
