import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export function ProductForm() {
    return (
        <>
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Category" variant="outlined" fullWidth/>
            <TextField label="Calories" type="number" variant="outlined" fullWidth/>
            <TextField label="Fat" type="number" variant="outlined" fullWidth/>
            <TextField label="Carbs" type="number" variant="outlined" fullWidth/>
            <TextField label="Protein" type="number" variant="outlined" fullWidth/>
            <FormControlLabel control={<Switch defaultChecked />} label="Out of Stock" />
            <Button 
            variant="contained" 
            className='pointer-events-auto bg-red-500 text-white hover:bg-red-400 hover:border-0 border-0 h-14'
            sx={{backgroundColor:'#ef4444'}}
            > 
            <AddIcon className='text-white' /> Create
            </Button>
        </>
    )
}