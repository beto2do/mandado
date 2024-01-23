import { Product } from "@/models";

export async function createNewProduct(product: Product) {
  const response = await fetch("/api/product", {
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
