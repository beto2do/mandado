import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddElement({
    text, 
    isEmpty, 
    onChange, 
    pressEnter, 
    addElement
    }: {
    text: string, 
    isEmpty: boolean, 
    onChange: ChangeEventHandler<HTMLInputElement>, 
    pressEnter: KeyboardEventHandler<HTMLDivElement>, 
    addElement: MouseEventHandler<HTMLButtonElement>
    }) {

    return (
    <div className="flex gap-1">
        <TextField
            error={isEmpty}
            label="Add Element"
            value={text}
            helperText={isEmpty ? 'Value is required' : '' }
            onChange={onChange}
            onKeyDown={pressEnter}
        />
        <Button
            className='pointer-events-auto bg-red-500 text-white hover:bg-red-400 hover:border-0 border-0 h-14'
            variant="contained"
            sx={{backgroundColor:'#ef4444'}}
            onClick={addElement}
        >Add</Button>
    </div>
    );
}
