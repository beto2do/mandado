'use client';
import Product from '../../models/product';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import {
    shoppingSlice,
    useDispatch,
  } 
from '@/lib/redux';

export default function SuperMarketProduct({product}: {product: Product}) {
    const dispatch = useDispatch();
    const checkboxId = `super_market_product_checkbox${product.id}`;

    function handleToggle(e: any) {
        e.preventDefault();
        dispatch(shoppingSlice.actions.updateIsGrabbed({...product, isGrabbed: !product.isGrabbed}))
    }   

    return (
        <ListItemButton role={undefined} onClick={handleToggle} dense>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    id={checkboxId} 
                    checked={product.isGrabbed}
                    onChange={handleToggle}
                    disableRipple
                    inputProps={{ 'aria-labelledby': checkboxId }}
                    icon={<RadioButtonUnchecked />} 
                    checkedIcon={<CheckCircle />}
                />
            </ListItemIcon>
            <ListItemText id={checkboxId} primary={product.name} />
        </ListItemButton>
    );
}