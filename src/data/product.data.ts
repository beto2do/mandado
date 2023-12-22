import 'server-only'
import clientPromise from '@/lib/mongodb/mongodb'

export async function findProducts() {
    const productGroup = [];
    const client = await clientPromise
    const db = client.db("mandado");
    const productsCollection = db.collection('products');
    const products = productsCollection.find();
    for await (const p of products) {
        productGroup.push(p);
    }
    
    return productGroup;
}