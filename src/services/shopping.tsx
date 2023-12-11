'use server'
import Product from '@/models/product';

export async function getShoppingList() : Promise<Product[]> {
    const products =  await new Promise<Product[]>(( resolve, reject)  => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: '0',
                        name:'Epazote',
                        isGrabbed: true
                    },
                    {
                        id: '1',
                        name:'Tomates',
                        isGrabbed: false
                    },
                    {
                        id: '2',
                        name:'Totopos',
                        isGrabbed: true
                    },
                    {
                        id: '3',
                        name:'Bolillo',
                        isGrabbed: false
                    },
                    {
                        id: '4',
                        name:'Yogurt',
                        isGrabbed: true
                    }
                ]
            )
          }, 3000);
    });
    return products;
}
