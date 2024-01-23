import { MouseEventHandler } from "react";
import { Product, ProductStatus } from "@/models";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCirculeIcon from "@mui/icons-material/AddCircle";

type ElementIconsProps = {
  product: Product;
  onEditEvent?: MouseEventHandler<Element> | undefined;
  onDeleteEvent?: MouseEventHandler<Element> | undefined;
  onSaveEvent?: MouseEventHandler<Element> | undefined;
};

export function ElementIcons({
  product,
  onEditEvent,
  onDeleteEvent,
  onSaveEvent,
}: ElementIconsProps) {
  const isEditionStatus = product.status === ProductStatus.EDITION;
  const editionView = isEditionStatus ? (
    <IconButton edge="end" aria-label="comments" onClick={onSaveEvent}>
      <AddCirculeIcon />
    </IconButton>
  ) : (
    <IconButton edge="end" aria-label="comments" onClick={onEditEvent}>
      <EditIcon />
    </IconButton>
  );
  return (
    <>
      {editionView}
      <IconButton
        edge="end"
        aria-label="comments"
        disabled={isEditionStatus}
        onClick={onDeleteEvent}
      >
        <DeleteIcon />
      </IconButton>
    </>
  );
}
