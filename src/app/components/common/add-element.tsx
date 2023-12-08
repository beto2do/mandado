"use client"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Input from '../common/input';

export default function AddElement({onAdd}:{onAdd: any}) {
    const [text, setText] = useState('');
    return (
    <div className="flex gap-1">
        <Input
            placeholder="Add Element"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
        >
        </Input>
        <Button
            className='pointer-events-auto rounded-md bg-red-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-red-500'
            onClick={() => {
                setText('');
                onAdd(text);
            }}
        >Add</Button>
    </div>
    );
}
