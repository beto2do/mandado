import { PantryTable } from "@/models";

const pantryUrl = "/api/pantry";

export async function getPantryTable(): Promise<PantryTable[]> {
  const response = await fetch(pantryUrl);
  return response.json();
}
