export default function ListElement({ children }: any) {
    return (
        <li className="flex py-4 first:pt-0 last:pb-0">
            {children}
        </li>
    );
}