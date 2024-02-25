import "server-only";
import { MongoClient, ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb/mongodb";
import { UpdateProduct, DocumentProduct } from "@/models/product";

let client: MongoClient;

export async function findProducts() {
  const productGroup = [];
  const productsCollection = await getProductsCollection();
  const products = productsCollection.find();
  for await (const p of products) {
    productGroup.push(p);
  }

  return productGroup;
}

export async function createProduct(product: DocumentProduct) {
  const productsCollection = await getProductsCollection();
  productsCollection.insertOne(product);
}

export async function updateProduct(product: UpdateProduct) {
  const productsCollection = await getProductsCollection();
  await productsCollection.updateOne(
    { _id: new ObjectId(product._id) },
    {
      $set: {
        name: product.name,
        status: product.status,
        isGrabbed: product.isGrabbed,
        category: product.category,
        calories: product.calories,
        fat: product.fat,
        carbs: product.carbs,
        protein: product.protein,
        isOutOfStock: product.isOutOfStock,
      },
    },
    { upsert: false },
  );
}

async function getProductsCollection() {
  client = await clientPromise;
  const db = client.db("mandado");
  return db.collection<DocumentProduct>("products");
}
