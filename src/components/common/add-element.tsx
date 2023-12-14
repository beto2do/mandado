"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function AddElement({onAdd}:{onAdd: any}) {
    const [text, setText] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    return (
    <div className="flex gap-1">
        <TextField
            error={isEmpty}
            label="Add Element"
            value={text}
            helperText={isEmpty ? 'Value is required' : '' }
            onChange={(e: any) => setText(e.target.value)}
        />
        <Button
            className='pointer-events-auto bg-red-600 text-white hover:bg-red-500 hover:border-0 border-0'
            variant="contained"
            onClick={() => {
                if(text === '') {
                    setIsEmpty(true);
                } else {
                    setIsEmpty(false);
                    setText('');
                    onAdd(text);
                }
            }}
        >Add</Button>
    </div>
    );
}
