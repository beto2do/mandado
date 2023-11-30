import ListElement from '../../components/common/list-element';
import Product from '../../models/product';
import SuperMarketProduct from '../../components/shopping/product';
import ListWrapper from '../common/list-wrapper';
import { getShoppingList } from '../../services/shopping';

export default function ShoppingList() {
    const groceryList :Array<Product> =  getShoppingList();
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
        <ListWrapper>
            {groceryGroup}
        </ListWrapper>
    );
}