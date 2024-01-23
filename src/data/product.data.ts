import "server-only";
import { MongoClient } from "mongodb";
import clientPromise from "@/lib/mongodb/mongodb";
import { Product } from "@/models/product";

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

export async function createProduct(product: Product) {
  const productsCollection = await getProductsCollection();
  productsCollection.insertOne(product);
}

async function getProductsCollection() {
  client = await clientPromise;
  const db = client.db("mandado");
  return db.collection<Product>("products");
}
