import ListElement from '../../components/common/list-element';
import AddElement from '../../components/common/add-element';
import Product from '../../models/product';
import SuperMarketProduct from '../../components/shopping/product';
import ListWrapper from '../common/list-wrapper';
import { useShopping, useShoppingDispatch } from '../../contexts/shopping-context';

export default function ShoppingList() {
    const groceryList :Product[] =  useShopping();
    const dispatch = useShoppingDispatch();
    const groceryGroup = groceryList.map(product => {
      return (
        <ListElement key={'list_element' + product.id}>
            <SuperMarketProduct 
                key={'super_market_product' + product.id}
                id={product.id} 
                name={product.name} 
                isGrabbed={product.isGrabbed}
            >
            </SuperMarketProduct>
        </ListElement>
        );
    });
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
            <ListWrapper>
                {groceryGroup}
            </ListWrapper>
        </>
    );
}