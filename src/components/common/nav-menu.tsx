import Box from '@mui/material/Box';
import { MenuLink } from '@/models';
import Link from 'next/link';

export function NavMenu({pages, onClick, className = ''}:{pages:MenuLink[], onClick:() => void, className?: string}) {
    return (
        <Box className={`flex grow ${className}`}>
        {pages.map((page) => (
            <Link
            className='block text-white my-4 px-2 py-1.5'
            key={page.label}
            onClick={onClick}
            href={page.path}
            >
            {page.label}
            </Link>
        ))}
        </Box>
    )
}