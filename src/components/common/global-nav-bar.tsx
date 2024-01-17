"use client"

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { LogoApp, NavMenu, HamburgerMenu } from '@/components/common'
import { responsiveView } from '@/models'

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
                    <HamburgerMenu 
                        pages={pages} 
                        anchorElNav={anchorElNav} 
                        onClick={handleOpenNavMenu} 
                        onClose={handleCloseNavMenu} 
                        className={responsiveView.MOBILE}/>
                    <LogoApp mobile={true}/>
                    <NavMenu pages={pages} onClick={handleCloseNavMenu} className={responsiveView.DESKTOP}/>
                    {segment !== 'login' ? <Link href="/login">Login</Link> : null}
                </Toolbar>
            </Container>
        </AppBar>
    </>
    );
}