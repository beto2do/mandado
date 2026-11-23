import { ProductTable, ProductBar } from "@/components/product";
import { ProductTableHeader } from "@/models";

export function ProductView() {
  const headerData: ProductTableHeader[] = [
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
      label: "Edit",
      align: "right",
    },
    {
      label: "Delete",
      align: "right",
    },
  ];

  return (
    <>
      <ProductBar></ProductBar>
      <ProductTable headerData={headerData}></ProductTable>
    </>
  );
}
