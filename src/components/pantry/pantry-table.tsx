"use client";
import { useState, useEffect } from "react";
import { TableView } from "@/components/common";
import { PantryTable } from "@/models";
import { getPantryTable } from "@/services";

export function PantryTables() {
  const [pantries, setPantries] = useState<PantryTable[]>([]);

  useEffect(() => {
    let ignore = false;

    getPantryTable()
    .then((pantriesData) => {
      if (!ignore) {
        setPantries(pantriesData);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      {pantries.map((table) => (
        <TableView
          key={table._id}
          headers={table.headers}
          rows={table.rows}
        ></TableView>
      ))}
    </>
  );
}
