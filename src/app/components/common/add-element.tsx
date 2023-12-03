"use client"
import { useState } from 'react';
import Button from '../common/button';
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
            onClick={() => {
                setText('');
                onAdd(text);
            }}
        >Add</Button>
    </div>
    );
}
