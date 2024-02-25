import { findPantries } from "@/data/pantry.data";

export async function GET() {
  const data = await findPantries();
  return Response.json(data);
}
