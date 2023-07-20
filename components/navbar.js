import React, { useState } from 'react';
import { Fragment } from 'react';
import { Outlet} from 'react-router-dom';
import { ButfirstmeLogo } from '../public/assets/header_material/Logo_icon.svg';
import { ButfirstmeLogoText } from '../public/assets/header_material/logo_text.svg';
import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material';
import TopNavbar from '../components/topnavbar';
import Link from 'next/link';
import Footer from './footer';

const StyledLink = styled(Link)(({ theme, isActive }) => ({
  position: 'relative',
  textDecoration: 'none',
  color: 'inherit',
  marginRight: '16px',
  padding: '8px 16px',
  fontWeight: isActive ? 'normal' : 'bold',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: isActive ? '100%' : 0,
    height: '8px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
}));

const Navbar = () => {
  const [pathname, setPathname] = useState('/');

  return (
<Fragment>
    <AppBar position="static" sx={{ bgcolor: '#fff', color: '#000' }} elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
           
            
            <nav style={{ display: 'flex' }}>
              <StyledLink href="/" isActive={pathname === '/'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: '25px' }}>Home</Typography>
              </StyledLink>
              <StyledLink href="/preise" isActive={pathname === '/preise'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: '25px' }}>Preise</Typography>
              </StyledLink>

              <StyledLink href="/magazin" isActive={pathname === '/magazin'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: '25px' }}>Magazin</Typography>
              </StyledLink>

              <StyledLink href="/uberuns" isActive={pathname === '/uberuns'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: '25px' }}>Über Uns</Typography>
              </StyledLink>

              <StyledLink href="/kontakt" isActive={pathname === '/kontakt'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: '25px' }}>Kontakt</Typography>
              </StyledLink>

              <StyledLink href="/shop" isActive={pathname === '/shop'}>
                <Typography variant="subtitle1" fontFamily="Montserrat-Bold" sx={{ fontSize: '25px' }}>Shop</Typography>
              </StyledLink>
            </nav>
          </Toolbar>
        </Container>
    </AppBar>
</Fragment>
);
};

export default Navbar;


            {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
              {/* <ButfirstmeLogo style={{ height: 50, width: 50, marginRight: 6 }} />
              <ButfirstmeLogoText style={{ height: 50, width: 180, marginLeft: 16 }} /> */}
            {/* </Link> */}
