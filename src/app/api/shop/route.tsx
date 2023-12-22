import { findProducts } from '@/data/product.data'

export async function GET() {
    const data = await findProducts();
    return Response.json(data)
}