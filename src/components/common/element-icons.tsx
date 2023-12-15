import { MouseEventHandler } from 'react';
import Product, { ProductStatus } from '../../models/product';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function ElementIcons({
    product, 
    onEditEvent, 
    onDeleteEvent
    }: {
        product: Product, 
        onEditEvent?: MouseEventHandler<Element> | undefined, 
        onDeleteEvent?: MouseEventHandler<Element> | undefined
    }) 
{
    return (
        <>
            <IconButton 
                edge="end" 
                aria-label="comments" 
                onClick={onEditEvent}>
                <EditIcon />
            </IconButton>
            <IconButton 
            edge="end" 
            aria-label="comments" 
            disabled={product.status === ProductStatus.EDITION}
            onClick={onDeleteEvent}>
                <DeleteIcon/>
            </IconButton>
        </>
    );
}