import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { SvgIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import React from 'react';

const icons = [
  { id: 1, component: FacebookIcon, link: 'https://www.facebook.com/' },
  { id: 2, component: TwitterIcon, link: 'https://www.twitter.com/' },
  { id: 3, component: GoogleIcon, link: 'https://plus.google.com/' },
  { id: 4, component: LinkedInIcon, link: 'https://www.linkedin.com/' },
  { id: 5, component: YouTubeIcon, link: 'https://www.youtube.com/' },
];

const TopNavbar = () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
        {icons.map((icon) => (
          <IconButton
            component='a'
            href={icon.link}
            target='_blank'
            rel='noopener noreferrer'
            key={icon.id}
            sx={{  marginRight: '2px' }}
          >
            <SvgIcon component={icon.component} color="secodary"/>
          </IconButton>
        ))}

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color='secondary' sx={{ marginRight: '8px' }}>
          <PhoneIcon />
        </IconButton>
        <Typography variant='body1' color='inherit' sx={{ marginRight: '28px' }}>
          +1 123 456 789
        </Typography>

        <Button
          component='a'
          href='/signin'
          variant='contained'
          color = 'secondary'
          sx={{  marginLeft: '18px' }}
        >
         <Typography fontFamily={'Montserrat-light'}> Log In </Typography>
        </Button>
        <Button
          component='a'
          href='/signup'
          variant='contained'
          color = 'secondary'
          sx={{ marginLeft: '18px' }}
        >
          <Typography fontFamily={'Montserrat-light'}>Sign Up</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
