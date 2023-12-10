import Product from '@/models/product';

export async function getShoppingList() : Promise<Product[]> {
    const products = await fetch('/api/shop')
                            .then((res) => res.json())
                            .then((res) => res.data);
    return products;
}