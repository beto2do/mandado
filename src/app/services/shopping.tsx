import Product from '../models/product';

export function getShoppingList(): Array<Product>  {
    return [
        {
            id: '1',
            name:'Epazote',
            isGrabbed: true
        },
        {
            id: '2',
            name:'Tomates',
            isGrabbed: false
        },
        {
            id: '3',
            name:'Totopos',
            isGrabbed: true
        },
        {
            id: '4',
            name:'Bolillo',
            isGrabbed: false
        },
        {
            id: '5',
            name:'Yogurt',
            isGrabbed: true
        }
    ];
}