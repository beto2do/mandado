import {
  findProducts,
  createProduct,
  updateProduct,
} from "@/data/product.data";

export async function GET() {
  const data = await findProducts();
  return Response.json(data);
}

export async function POST(request: Request) {
  const res = await request.json();
  //TODO validate data
  createProduct(res);
  return Response.json(res);
}

export async function PUT(request: Request) {
  const res = await request.json();
  //TODO validate data
  updateProduct(res);
  return Response.json(res);
}
