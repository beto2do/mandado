export default function ListWrapper({children}: {children: any}) {
    return (
        <ul role="list" className="p-6 divide-y divide-slate-200">
            {children}
        </ul>
    );
}