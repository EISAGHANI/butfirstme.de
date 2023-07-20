import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { ReactComponent as ButfirstmeLogo } from '../public/assets/header_material/Logo_icon.svg';
import { ReactComponent as ButfirstmeLogoText } from '../public/assets/header_material/logo_text.svg';
import { Typography,  IconButton} from '@mui/material';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { SvgIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterBackground = styled(Box)({
  backgroundSize: 'cover',
  backgroundColor: '#0099bc',
  height: '300px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center'
});
const Item = styled(Box)({
  display: 'flex',
  justifyContent:'center',
  margin: 10,
  color: 'white'
})
const Division = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',

})

const icons = [
  { id: 1, component: FacebookIcon, link: 'https://www.facebook.com/' },
  { id: 2, component: TwitterIcon, link: 'https://www.twitter.com/' },
  { id: 3, component: GoogleIcon, link: 'https://plus.google.com/' },
  { id: 4, component: LinkedInIcon, link: 'https://www.linkedin.com/' },
  { id: 5, component: YouTubeIcon, link: 'https://www.youtube.com/' },
];


export default function Footer() {
  return (
    <FooterBackground >
        <Grid container direction={'column'} xs={6} md={4} lg={3}>
        <Item style={{ height: '75px'}}>
              {/* <ButfirstmeLogo/> */}
            </Item>
            <Item style={{ height: '35px'}}>
              {/* <ButfirstmeLogoText/> */}
            </Item>
            <Item>
              <Typography>
                Lorem ipsum asdflkjsdf 
              </Typography>
            </Item>
            <Item>
              <Typography>
               © but FIRST ME 2023
              </Typography>
        </Item>
        </Grid>
        <Grid container  direction={'row'} xs={6} md={8} lg={9}>
            <Division container direction={'column'} xs={4} md={4} lg={4} >
                <Typography variant="h2" margin={2}>
                    Services
                </Typography>
                <Link href={''}>
                    Lorem ipsum
                </Link >
                <Link href={''} >
                    Lorem ipsum
                </Link>
                <Link href={''} >
                    Lorem ipsum
                </Link>
                <Link href={''}>
                    Lorem ipsum
                </Link>
                <Link href={''}>
                    Lorem ipsum
                </Link>
            </Division>
            <Division container direction={'column'} xs={4} md={4} lg={4} >
                <Typography variant="h2" margin={2}>
                    Links
                </Typography>
                <Link href={''}>
                    Lorem ipsum
                </Link >
                <Link href={''}>
                    Lorem ipsum
                </Link>
                <Link href={''}>
                    Lorem ipsum
                </Link>
                <Link href={''}>
                    Lorem ipsum
                </Link>
                <Link href={''}>
                    Lorem ipsum
                </Link>
            </Division>
            <Division container direction={'column'} xs={4} md={4} lg={4} >
              <Typography variant="h2">
                    Contacts
              </Typography>
              <IconButton >
                <PhoneIcon color='secondary' />
                <Typography variant='body1' color='white' >
                  +1 123 456 789
                </Typography>
              </IconButton>
              <IconButton >
                <PhoneIcon color='secondary' />
                <Typography variant='body1' color='white' >
                  +1 123 456 789
                </Typography>
              </IconButton>
              <IconButton >
                <EmailIcon color='secondary' />
                <Typography variant='body1' color='white' >
                  info@butfirstme.de
                </Typography>
              </IconButton>
              <Box direction={'column'}>
                <Typography variant="h3">
                      Follow Us
                </Typography>
                {icons.map((icon) => (
                  <IconButton component='a' href={icon.link} target='_blank' rel='noopener noreferrer' key={icon.id}>
                    <SvgIcon component={icon.component} color = 'secondary'/>
                  </IconButton>
                ))}
              </Box>
            </Division>
          </Grid>
    </FooterBackground>
  );
}









 {/* <Grid container direction={'column'} xs={12} md={6} lg={3}>
            <Item style={{ height: '75px'}}>
              <ButfirstmeLogo/>
            </Item>
            <Item style={{ height: '35px'}}>
              <ButfirstmeLogoText/>
            </Item>
            <Item>
              <Typography>
                Lorem ipsum asdflkjsdf 
              </Typography>
            </Item>
            <Item>
              <Typography>
               © but FIRST ME 2023
              </Typography>
            </Item>
          </Grid>
          <Grid container  direction={'row'} xs={12} md={6} lg={9}>
            <Division container direction={'column'} xs={12} md={12} lg={4} >
                <Typography variant="h2" margin={2}>
                    Services
                </Typography>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link >
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
            </Division>
            <Division container direction={'column'} xs={12} md={12} lg={4} >
                <Typography variant="h2" margin={2}>
                    Links
                </Typography>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link >
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
                <Link variant="text" margin={1}>
                    Lorem ipsum
                </Link>
            </Division>
            <Division container direction={'column'} xs={12} md={6} lg={4} >
              <Typography variant="h2">
                    Contacts
              </Typography>
              <IconButton >
                <PhoneIcon color='secondary' />
                <Typography variant='body1' color='white' >
                  +1 123 456 789
                </Typography>
              </IconButton>
              <IconButton >
                <PhoneIcon color='secondary' />
                <Typography variant='body1' color='white' >
                  +1 123 456 789
                </Typography>
              </IconButton>
              <IconButton >
                <EmailIcon color='secondary' />
                <Typography variant='body1' color='white' >
                  info@butfirstme.de
                </Typography>
              </IconButton>
              <Box direction={'column'}>
                <Typography variant="h3">
                      Follow Us
                </Typography>
                {icons.map((icon) => (
                  <IconButton component='a' href={icon.link} target='_blank' rel='noopener noreferrer' key={icon.id}>
                    <SvgIcon component={icon.component} color = 'secondary'/>
                  </IconButton>
                ))}
              </Box>
            </Division>
          </Grid>
          */}