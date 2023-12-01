import Product from '../models/product';

export function getShoppingList() :Product[] {
    return [
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
    ];
}