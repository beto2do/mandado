import AddElement from '@/components/common/add-element';
import Product from '@/models/product';
import { useShopping, useShoppingDispatch } from '@/contexts/shopping-context';
import SuperMarketProductList from './super-market-product-list';

export default function ShoppingList() {
    const groceryList :Product[] =  useShopping();
    const dispatch = useShoppingDispatch();

    return (
        <>
            <AddElement 
                onAdd={(productName: string) => {
                    //TODO change way to create the id
                    dispatch({
                        type: 'added',
                        id: groceryList.length,
                        name: productName
                    });
                }}
            ></AddElement>
             <SuperMarketProductList></SuperMarketProductList>
        </>
    );
}