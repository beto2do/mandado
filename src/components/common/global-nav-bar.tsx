"use client"

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { LogoApp, NavMenu } from '@/components/common'
import { ResponsiveView } from '@/models'

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
                    <LogoApp/>
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
                    <LogoApp mobile={true}/>
                    <NavMenu pages={pages} onClick={handleCloseNavMenu} className={ResponsiveView.DESKTOP}/>
                    {segment !== 'login' ? <Link href="/login">Login</Link> : null}
                </Toolbar>
            </Container>
        </AppBar>
    </>
    );
}