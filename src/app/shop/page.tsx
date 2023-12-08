
"use client"
import ShoppingList from '../../components/shopping/shopping-list';
import { ShoppingProvider } from '../../contexts/shopping-context';

export default function Shop() {

    return (
        <ShoppingProvider>
          <ShoppingList></ShoppingList>
        </ShoppingProvider>
    )
}