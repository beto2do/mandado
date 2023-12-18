'use client';
import { useEffect } from 'react';
import { getShoppingList } from '@/services';
import { Product, ProductStatus } from '@/models';
import ListItem from '@mui/material/ListItem';
import SuperMarketProduct from '@/components/shopping/product';
import {
    shoppingSlice,
    useSelector,
    useDispatch,
    selectProducts
  } 
from '@/lib/redux';
import { ElementIcons, SkeletonList } from '@/components/common';

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

    const onDeleteEvent = (product: Product)=> dispatch(shoppingSlice.actions.delete(product));
    const onEditEvent = (product: Product)=> dispatch(shoppingSlice.actions.changeStatus({...product,status:ProductStatus.EDITION }));
    const onSaveEvent = (product: Product)=> {
        dispatch(shoppingSlice.actions.changeStatus({...product,status:ProductStatus.VIEW }));
    }

    const groceryGroup = groceryList.map(product => {
        return (
          <ListItem 
              key={'list_element' + product.id}
              secondaryAction={
                <ElementIcons
                    product={product}
                    onDeleteEvent={() => onDeleteEvent(product) }
                    onSaveEvent={() => onSaveEvent(product)}
                    onEditEvent={() => onEditEvent(product) }/>
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
