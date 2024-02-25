"use client";
import { useState, useEffect } from "react";
import { TableView } from "@/components/common";
import { PantryTable } from "@/models";

export function PantryTables() {
  const [pantries, setPantries] = useState<PantryTable[]>([]);

  useEffect(() => {
    let ignore = false;

    fetch("/api/pantry")
      .then((response) => response.json())
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
