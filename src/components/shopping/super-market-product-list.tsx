import { useEffect } from 'react';
import { getShoppingList } from '@/services/shopping';
import Product from '@/models/product';
import ListItem from '@mui/material/ListItem';
import SuperMarketProduct from '@/components/shopping/product';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useShopping, useShoppingDispatch } from '@/contexts/shopping-context';

export default function SuperMarketProductList() {
    const groceryList :Product[] =  useShopping();
    const dispatch = useShoppingDispatch();

    useEffect(()=> {
        let ignore = false;

        if(!ignore) {
            getShoppingList().then(products => {
                dispatch({
                    type: 'onload',
                    products: products
                });
            });
        }
        return () => {
            ignore = true
        }
    },[]);

    const groceryGroup = groceryList.map(product => {
        return (
          <ListItem 
              key={'list_element' + product.id}
              secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                  </IconButton>
                }
              disablePadding
          >
              <SuperMarketProduct 
                  key={'super_market_product' + product.id}
                  id={product.id} 
                  name={product.name} 
                  isGrabbed={product.isGrabbed}
              >
              </SuperMarketProduct>
          </ListItem>
          );
      });
    return (groceryGroup);
}