"use client"
import { useState } from 'react';
import { KeyboardKeys } from '@/models';
import { AddElement } from '@/components/common'

export default function AddProduct({onAdd}:{onAdd: any}) {
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
        <AddElement 
            text={text} 
            isEmpty={isEmpty} 
            pressEnter={pressEnter} 
            addElement={addElement}
            onChange={(e: any) => setText(e.target.value)}/>
    );
}
