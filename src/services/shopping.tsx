'use server'
import { Product, ProductStatus } from '@/models/product';

export async function getShoppingList() : Promise<Product[]> {
    const products =  await new Promise<Product[]>(( resolve, reject)  => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: '0',
                        name:'Epazote',
                        isGrabbed: true,
                        status: ProductStatus.VIEW
                    },
                    {
                        id: '1',
                        name:'Tomates',
                        isGrabbed: false,
                        status: ProductStatus.VIEW
                    },
                    {
                        id: '2',
                        name:'Totopos',
                        isGrabbed: true,
                        status: ProductStatus.VIEW
                    },
                    {
                        id: '3',
                        name:'Bolillo',
                        isGrabbed: false,
                        status: ProductStatus.VIEW
                    },
                    {
                        id: '4',
                        name:'Yogurt',
                        isGrabbed: true,
                        status: ProductStatus.VIEW
                    }
                ]
            )
          }, 3000);
    });
    return products;
}
