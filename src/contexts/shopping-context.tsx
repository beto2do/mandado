"use client"
import {  createContext, useContext, useReducer, Dispatch } from 'react';
import Product from '@/models/product';

const ShoppingContext = createContext<Product[]>([]);
const ShoppingDispatchContext = createContext<Dispatch<any>>(()=>{});

export function ShoppingProvider({children}: {children: any}) {
    const [groceries, dispatch] = useReducer(shoppingReducer, initialGroceries);
    return (
        <ShoppingContext.Provider value={groceries}>
            <ShoppingDispatchContext.Provider value={dispatch}>
                {children}
            </ShoppingDispatchContext.Provider>
        </ShoppingContext.Provider>
    );
}

export function useShopping() {
    return useContext(ShoppingContext);
}

export function useShoppingDispatch() {
    return useContext(ShoppingDispatchContext);
}

function shoppingReducer(groceries: Product[], action: any) : Product[] {
    switch(action.type){
        case 'added': {
            return [
                ...groceries,
                {
                    id: action.id,
                    name:action.name,
                    isGrabbed: false
                }
            ];
        }
        case 'onload': {
            return [
                ...action.products
            ]
        }
        default : {
            throw Error('Unknown action: ', action.type);
        }
    }
}

const initialGroceries :Product[] = [];