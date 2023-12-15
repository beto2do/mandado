import AddElement from '@/components/common/add-element';
import {Product, ProductStatus} from '@/models';
import SuperMarketProductList from './super-market-product-list';
import {
    shoppingSlice,
    useSelector,
    useDispatch,
    selectProducts
  } 
from '@/lib/redux';

export default function ShoppingList() {
    const groceryList :Product[] =  useSelector(selectProducts);
    const dispatch = useDispatch();

    return (
        <>
            <AddElement 
                onAdd={(productName: string) => {
                    //TODO change way to create the id
                    dispatch(shoppingSlice.actions.add(
                        {
                            id: `${groceryList.length}`,
                            name: productName,
                            isGrabbed: false,
                            status: ProductStatus.VIEW,
                        }
                    ));
                }}
            ></AddElement>
             <SuperMarketProductList></SuperMarketProductList>
        </>
    );
}