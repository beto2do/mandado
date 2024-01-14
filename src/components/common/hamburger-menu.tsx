import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { MenuLink } from '@/models';

export function HamburgerMenu({
        pages, 
        anchorElNav,
        onClick, 
        onClose, 
        className = ''
    }:{
        pages:MenuLink[], 
        anchorElNav:null | HTMLElement
        onClick:(event: React.MouseEvent<HTMLElement>) => void, 
        onClose:() => void, 
        className?: string
    }) {
    return (
        <Box className={`flex grow ${className}`}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onClick}
            color="inherit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={onClose}
            sx={{
            display: { xs: 'block', md: 'none' },
            }}
        >
            {pages.map((page) => (
                <MenuItem key={page.label} onClick={onClose}>
                    <Link 
                        className='text-center'
                        href={page.path}
                    >
                        {page.label}
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    </Box>
    )
}