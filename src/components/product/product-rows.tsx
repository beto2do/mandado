"use client";
import { useState } from "react";
import { TableRow, TableCell } from "@mui/material";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import { CustomModal } from "@/components/common";
import { Product, IdProductForm } from "@/models";
import { ProductForm } from "@/components/product";

export function ProductRows({ products }: { products: Product[] }) {
  const [open, setOpen] = useState(false);
  const [productId, setProductId] = useState<IdProductForm>(undefined);
  const handleClose = () => {
    setOpen(false);
  };
  const handleProductEdition = (id: string) => {
    setProductId(id);
    setOpen(true);
  };
  const handleProductDelete = (id: string) => {
    alert('delete =>'+id)
  }

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
              <PendingActionsIcon className="text-gray-500" />
            ) : (
              <InventorySharpIcon className="text-green-600" />
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
          <TableCell align="right">
            <IconButton
              aria-label="Delete"
              onClick={() => {
                handleProductDelete(row._id);
              }}
            >
              <DeleteForeverIcon className="text-red-500" />
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
        <ProductForm productId={productId} onSuccessful={handleClose} />
      </CustomModal>
    </>
  );
}
