"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { KeyboardKeys } from '@/models';

export default function AddElement({onAdd}:{onAdd: any}) {
    const [text, setText] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);

    const addElement = () => {
        if(text === '') {
            setIsEmpty(true);
        } else {
            setIsEmpty(false);
            setText('');
            onAdd(text);
        }
    }

    const pressEnter = (e: any) => {
        if(e.type === 'keydown' && e.key === KeyboardKeys.ENTER) {
            addElement();
        }
    }

    return (
    <div className="flex gap-1">
        <TextField
            error={isEmpty}
            label="Add Element"
            value={text}
            helperText={isEmpty ? 'Value is required' : '' }
            onChange={(e: any) => setText(e.target.value)}
            onKeyDown={pressEnter}
        />
        <Button
            className='pointer-events-auto bg-red-600 text-white hover:bg-red-500 hover:border-0 border-0 h-14'
            variant="contained"
            onClick={addElement}
        >Add</Button>
    </div>
    );
}
