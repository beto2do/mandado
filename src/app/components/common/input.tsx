import { forwardRef, LegacyRef, AllHTMLAttributes } from 'react';

const Input =  forwardRef((props: AllHTMLAttributes<HTMLInputElement>, ref:LegacyRef<HTMLInputElement> | undefined) => {
        return(
            <input
                className='block w-full py-1.5 px-3 text-base font-normal leading-6 border-solid border border-zinc-300 rounded' 
                {...props}
                ref={ref}
            />
        );
    }
);

export default Input;