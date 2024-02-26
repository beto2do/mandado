"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
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
  const headerData: {
    label: string;
    align: "right" | "center" | "left" | "inherit" | "justify" | undefined;
  }[] = [
    {
      label: "Name",
      align: undefined,
    },
    {
      label: "Category",
      align: "right",
    },
    {
      label: "Calories",
      align: "right",
    },
    {
      label: "Fat(g)",
      align: "right",
    },
    {
      label: "Carbs(g)",
      align: "right",
    },
    {
      label: "Protein(g)",
      align: "right",
    },
    {
      label: "Out of Stock",
      align: "right",
    },
    {
      label: "Edition",
      align: "right",
    },
  ];
  const productTable = (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-slate-600">
          <TableRow>
            {headerData.map((header) => (
              <TableCell className="text-white" align={header.align}>
                {header.label}
              </TableCell>
            ))}
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
