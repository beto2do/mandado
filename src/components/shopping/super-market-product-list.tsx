'use client';
import { useEffect } from 'react';
import { getShoppingList } from '@/services/shopping';
import Product from '@/models/product';
import ListItem from '@mui/material/ListItem';
import SuperMarketProduct from '@/components/shopping/product';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
    shoppingSlice,
    useSelector,
    useDispatch,
    selectProducts
  } 
from '@/lib/redux';
import SkeletonList from '@/components/common/skeleton-list';

export default function SuperMarketProductList() {
    const groceryList :Product[] =  useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(()=> {
        let ignore = false;

        if(!ignore) {
            getShoppingList().then(products => {
                dispatch(shoppingSlice.actions.upload(products));
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
                <>
                    <IconButton edge="end" aria-label="comments">
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="comments">
                        <DeleteIcon onClick={()=> dispatch(shoppingSlice.actions.delete(product)) }/>
                    </IconButton>
                </>
                }
              disablePadding
          >
              <SuperMarketProduct 
                  key={'super_market_product' + product.id}
                  product={product}
              >
              </SuperMarketProduct>
          </ListItem>
          );
      });

    return (groceryList.length > 0 ? groceryGroup : <SkeletonList/>);
}