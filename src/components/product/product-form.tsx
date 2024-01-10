"use client"
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { FormControlError, Product } from '@/models'
import { FormEvent, ChangeEvent, useState } from 'react'

export function ProductForm() {
    const defaultError = {error: false, msg: ''};
    const nameMessage = 'Product Name is required';
    const categoryMessage = 'Category is required';
    const caloriesMessage = 'Calories field is required';
    const fatMessage = 'Fat field is required';
    const carbsMessage = 'Carbs field is required';
    const proteinMessage = 'Protein field is required';
    const [productProperties, setProductProperties] = useState({});
    const [nameError, setNameError] = useState<FormControlError>(defaultError);
    const [categoryError, setCategoryError] = useState<FormControlError>(defaultError);
    const [caloriesError, setCaloriesError] = useState<FormControlError>(defaultError);
    const [fatError, setFatError] = useState<FormControlError>(defaultError);
    const [carbsError, setCarbsError] = useState<FormControlError>(defaultError);
    const [proteinError, setProteinError] = useState<FormControlError>(defaultError);

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(validateProperties()) {
            alert('sending data ...')
        }
    }

    function validateProperties() {
        let product = productProperties as Product;
        let numErrors = 0;

        setNameError(defaultError);
        setCategoryError(defaultError);
        setCaloriesError(defaultError);
        setFatError(defaultError);
        setCarbsError(defaultError);
        setProteinError(defaultError);

        if(!product.name) {
            setNameError({error: true, msg: nameMessage});
            numErrors++;
        }
        if(!product.category) {
            setCategoryError({error: true, msg: categoryMessage});
            numErrors++;
        }
        if(!product.calories) {
            setCaloriesError({error: true, msg: caloriesMessage});
            numErrors++;
        }
        if(!product.fat) {
            setFatError({error: true, msg: fatMessage});
            numErrors++;
        }
        if(!product.carbs) {
            setCarbsError({error: true, msg: carbsMessage});
            numErrors++;
        }
        if(!product.protein) {
            setProteinError({error: true, msg: proteinMessage});
            numErrors++;
        }


        return numErrors === 0;
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setProductProperties(properties => ({...properties, [name]: value}));
      }

    return (
        <form className='mx-3 my-2.5' onSubmit={handleSubmit}>
            <h2>Add New Product</h2>
            <TextField 
            name="name"
            label="Name" 
            error={nameError.error}
            helperText={nameError.msg}
            className='my-2' 
            variant="outlined" 
            fullWidth
            autoComplete='off'
            onChange={handleChange} />
            <TextField 
            name="category"
            error={categoryError.error}
            helperText={categoryError.msg}
            className='my-2' 
            label="Category" 
            variant="outlined" 
            fullWidth
            autoComplete='off'
            onChange={handleChange} />
            <TextField 
            name="calories"
            error={caloriesError.error}
            helperText={caloriesError.msg}
            className='my-2' 
            label="Calories" 
            type="number" 
            variant="outlined" 
            fullWidth
            onChange={handleChange} />
            <TextField 
            name="fat"
            error={fatError.error}
            helperText={fatError.msg}
            className='my-2' 
            label="Fat" 
            type="number" 
            variant="outlined" 
            fullWidth
            onChange={handleChange} />
            <TextField 
            name="carbs"
            error={carbsError.error}
            helperText={carbsError.msg}
            className='my-2' 
            label="Carbs" 
            type="number" 
            variant="outlined" 
            fullWidth
            onChange={handleChange} />
            <TextField 
            name="protein"
            error={proteinError.error}
            helperText={proteinError.msg}
            className='my-2' 
            label="Protein" 
            type="number" 
            variant="outlined" 
            fullWidth
            onChange={handleChange} />
            <div>
                <FormControlLabel 
                    name='isOutOfStock'
                    control={<Switch defaultChecked onChange={handleChange} />} 
                    label="Out of Stock"/>
            </div>
            <div className='flex justify-end'>
                <Button 
                type='submit'
                size='small'
                variant="contained" 
                className='pointer-events-auto bg-red-500 text-white hover:bg-red-400 hover:border-0 border-0'
                sx={{backgroundColor:'#ef4444'}}
                > 
                <AddIcon className='text-white' /> Create
                </Button>
            </div>
        </form>
    )
}