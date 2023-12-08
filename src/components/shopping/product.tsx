'use client';
import Product from '../../app/models/product';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export default function SuperMarketProduct(product: Product) {
    const [checked, setChecked] = useState(product.isGrabbed);
    const checkboxId = `super_market_product_checkbox${product.id}`;

    function handleToggle() {
        setChecked(!checked);
    }

    return (
        <ListItemButton role={undefined} onClick={handleToggle} dense>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    tabIndex={-1}
                    id={checkboxId} 
                    checked={checked}
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