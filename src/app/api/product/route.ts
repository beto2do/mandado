import { findProducts, createProduct } from '@/data/product.data'

export async function GET() {
    const data = await findProducts();
    return Response.json(data)
}

export async function POST(request: Request) {
    const res = await request.json()
    //TODO validate data
    createProduct(res);
    return Response.json({ res })
}