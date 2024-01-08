"use client"

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import StoreFront from '@mui/icons-material/Storefront';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const pages = [
    {
        label:'Shopping', 
        path:'/shop'
    },
    {
        label:'Meals',
        path:'/meal'
    },
    {
        label:'Pantry', 
        path:'/pantry'
    },
    {
        label:'Products', 
        path:'/product'
    }
];

export function GlobalNavBar() {
    const segment = useSelectedLayoutSegment();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
    <>
        <AppBar position="static" sx={{backgroundColor:'#ef4444'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <StoreFront sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link href="/" >Man-dado</Link>
                    </Typography>
  
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
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
                            onClose={handleCloseNavMenu}
                            sx={{
                            display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
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
                    <StoreFront sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Man-dado
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link
                            className='block text-white my-4 px-2 py-1.5'
                            key={page.label}
                            onClick={handleCloseNavMenu}
                            href={page.path}
                            >
                            {page.label}
                            </Link>
                        ))}
                    </Box>
                    {segment !== 'login' ? <Link href="/login">Login</Link> : null}
                </Toolbar>
            </Container>
        </AppBar>
    </>
    );
}