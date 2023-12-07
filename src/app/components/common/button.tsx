export default function Button({onClick, children}: {onClick: any, children:any}) {
    return (
        <button 
            className='pointer-events-auto rounded-md bg-red-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-red-500'
            onClick={e => {
                e.stopPropagation();
                onClick();
            }}
        >
            {children}
        </button>
    );
}