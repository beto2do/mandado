import "server-only";
import clientPromise from "@/lib/mongodb/mongodb";
import { ObjectId } from "mongodb";
import {
  PantryTable,
  TableRows,
  TableCell,
  TableHeaders,
  Product,
} from "@/models";
import { TableCellBaseProps } from "@mui/material/TableCell";
import { getGroupCatProducts } from "@/data/product.data";

function createHeader(category: string): TableHeaders[] {
  return [
    {
      label: category,
      align: undefined,
    },
    {
      label: "Calories",
      align: "right",
    },
    {
      label: "Fat",
      align: "right",
    },
    {
      label: "Carbs",
      align: "right",
    },
    {
      label: "Protein",
      align: "right",
    },
  ];
}

function createDessertRows(products: Product[]): TableRows[] {
  const productsAdapter = products.map((p) => {
    return createRow(p._id, [
      createTableCell(
        p.name,
        undefined,
        "th",
        "row",
        getOutofStockLabel(p.isOutOfStock),
      ),
      createTableCell(
        `${p.calories}`,
        "right",
        undefined,
        undefined,
        undefined,
      ),
      createTableCell(`${p.fat}`, "right", undefined, undefined, undefined),
      createTableCell(`${p.carbs}`, "right", undefined, undefined, undefined),
      createTableCell(`${p.protein}`, "right", undefined, undefined, undefined),
    ]);
  });
  return productsAdapter;
}

function createRow(id: string, columns: TableCell[]): TableRows {
  return { id, columns };
}

function createTableCell(
  label: string,
  align?: "inherit" | "left" | "center" | "right" | "justify",
  component?: React.ElementType<React.ThHTMLAttributes<HTMLTableCellElement>>,
  scope?: TableCellBaseProps["scope"],
  chip?: string,
): TableCell {
  return {
    label: label,
    align: align,
    component: component,
    scope: scope,
    chip: chip,
  };
}

function getOutofStockLabel(isOutOfStock: boolean): string {
  return isOutOfStock ? "out of stock" : "";
}

export async function findPantries(): Promise<PantryTable[]> {
  const pantryGroup = [];
  const pantries = await getGroupCatProducts();

  for await (const p of pantries) {
    pantryGroup.push({
      _id: p._id,
      headers: createHeader(p._id),
      rows: createDessertRows(p.products),
    });
  }

  return pantryGroup;
}
