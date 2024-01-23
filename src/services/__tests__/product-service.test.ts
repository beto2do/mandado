import { createNewProduct } from "@/services";
import { Product, ProductStatus } from "@/models";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve("post request"),
  }),
) as jest.Mock;

test("A new product is created", async () => {
  const product: Product = {
    _id: "0",
    name: "Eggs",
    status: ProductStatus.VIEW,
    isGrabbed: false,
    category: "Dairy",
    calories: 1,
    fat: 2,
    carbs: 3,
    protein: 4,
    isOutOfStock: true,
  };

  const resp = await createNewProduct(product);

  expect(resp).toBe("post request");
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith("/api/product", {
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
});
