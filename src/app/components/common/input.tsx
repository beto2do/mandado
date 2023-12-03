import { forwardRef, LegacyRef } from 'react';

const Input =  forwardRef(({placeholder, value, onChange}: any, ref:LegacyRef<HTMLInputElement> | undefined) => {
        return(
            <input
                className='block w-full py-1.5 px-3 text-base font-normal leading-6 border-solid border border-zinc-300 rounded' 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={ref}
            />
        );
    }
);

export default Input;