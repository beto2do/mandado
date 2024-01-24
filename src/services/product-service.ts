import { Product } from "@/models";

const urlProduct = "/api/product";

export async function createNewProduct(product: Product) {
  const response = await fetch(urlProduct, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(product),
  });

  return response.json();
}

export async function getProducts() {
  const response = await fetch(urlProduct);
  return response.json();
}
