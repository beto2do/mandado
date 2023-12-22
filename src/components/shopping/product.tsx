'use client';
import { Product, ProductStatus, KeyboardKeys } from '@/models';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Input from '@mui/material/Input';
import {
    shoppingSlice,
    useDispatch,
  } 
from '@/lib/redux';
import { ChangeEvent } from 'react';

export default function SuperMarketProduct({product}: {product: Product}) {
    const dispatch = useDispatch();
    const checkboxId = `super_market_product_checkbox${product._id}`;

    function handleToggle(e: any) {
        e.preventDefault();
        if(product.status === ProductStatus.EDITION) {
            return;
        }

        dispatch(shoppingSlice.actions.updateIsGrabbed({...product, isGrabbed: !product.isGrabbed}))
    }   

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const newName = event.target.value;
        if(newName !== '') {
            dispatch(shoppingSlice.actions.changeName({...product, name: newName}));
        }
    };

    const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.type === 'keydown' && e.key === KeyboardKeys.ENTER) {
            dispatch(shoppingSlice.actions.changeStatus({...product,status:ProductStatus.VIEW }));
        }
    }

    const nameView =  product.status === ProductStatus.EDITION ? 
                        <Input defaultValue={product.name} onChange={onChangeInput} onKeyDown={pressEnter} autoFocus/> : 
                        <ListItemText id={checkboxId} primary={product.name} />;

    return (
        <ListItemButton 
        role={undefined} 
        onClick={handleToggle} 
        dense>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    id={checkboxId} 
                    checked={product.isGrabbed}
                    disabled={product.status === ProductStatus.EDITION}
                    onChange={handleToggle}
                    disableRipple
                    inputProps={{ 'aria-labelledby': checkboxId }}
                    icon={<RadioButtonUnchecked />} 
                    checkedIcon={<CheckCircle />}
                />
            </ListItemIcon>
           {nameView}
        </ListItemButton>
    );
}