'use client';
import Product from '../../models/product';
import { useState } from 'react';

export default function SuperMarketProduct(product: Product) {
    const [checked, setChecked] = useState(product.isGrabbed);
    const checkboxId = `super_market_product_checkbox${product.id}`;

    return (
        <>
            <input
                type='checkbox' 
                id={checkboxId} 
                checked={checked}
                onChange={()=> {
                    setChecked(!checked);
                }}
            >
            </input>
            <div>
                <label htmlFor={checkboxId}>{product.name}</label>
            </div>
        </>
    );
}