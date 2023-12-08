
"use client"
import ShoppingList from '../../components/shopping/shopping-list';
import { ShoppingProvider } from '../../contexts/shopping-context';

export default function Shop() {

    return (
      <main className="flex flex-col justify-between">
        <ShoppingProvider>
          <ShoppingList></ShoppingList>
        </ShoppingProvider>
      </main>
    )
}