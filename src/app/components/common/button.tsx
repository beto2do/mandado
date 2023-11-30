export default function Button({onClick, children}: {onClick: any, children:any}) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}