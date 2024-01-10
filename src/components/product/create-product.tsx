"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { CustomModal } from '@/components/common';
import { ProductForm } from '@/components/product';


export function CreateProduct() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
            <Button 
            variant="contained" 
            className='pointer-events-auto bg-red-500 text-white hover:bg-red-400 hover:border-0 border-0 h-14'
            sx={{backgroundColor:'#ef4444'}}
            onClick={handleOpen}
            > 
            <AddIcon className='text-white' /> New Product
            </Button>
            <CustomModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                    <ProductForm onSuccessful={handleClose}/>
            </CustomModal>
        </>
    )
}