import StoreFront from '@mui/icons-material/Storefront';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export function LogoApp({ mobile=false }) {
    const mobileClasses = mobile ? 'flex lg:hidden xl:hidden 2xl:hidden': 'hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex';
    const typographyClasses = `mr-4 font-mono font-bold tracking-widest text-inherit no-underline ${mobileClasses} ${mobile ? 'sm:grow md:grow':''}`;
    
    return (
        <>
        <StoreFront className={`mr-2 ${mobileClasses}`}/>
        <Typography
            variant="h6"
            noWrap
            className={typographyClasses}
        >
            <Link href="/" >Man-dado</Link>
        </Typography>
        </>
    )
}