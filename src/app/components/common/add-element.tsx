"use client"
import { useState } from 'react';
import Button from '../common/button';

export default function AddElement({onAdd}:{onAdd: any}) {
    const [text, setText] = useState('');
    return (
    <div className="flex gap-1">
        <input
            className='block w-full py-1.5 px-3 text-base font-normal leading-6 border-solid border border-zinc-300 rounded' 
            placeholder="Add Element"
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <Button
            onClick={() => {
                setText('');
                onAdd(text);
            }}
        >Add</Button>
    </div>
    );
}
