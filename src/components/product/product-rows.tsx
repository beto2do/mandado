"use client";
import { useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { CustomModal } from "@/components/common";
import { Product } from "@/models";
import { ProductForm } from "@/components/product";

export function ProductRows({ products }: { products: Product[] }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleProductEdition = (id: string) => {
    setOpen(true);
  };

  return (
    <>
      {products.map((row) => (
        <TableRow
          hover
          key={row.name}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.category}</TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
          <TableCell align="right">
            {row.isOutOfStock ? (
              <InventorySharpIcon className="text-green-600" />
            ) : (
              <PendingActionsIcon className="text-gray-500" />
            )}
          </TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="edit"
              onClick={() => {
                handleProductEdition(row._id);
              }}
            >
              <EditIcon className="text-red-500" />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
      <CustomModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ProductForm onSuccessful={handleClose} />
      </CustomModal>
    </>
  );
}
