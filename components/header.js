import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import backgroundImage1 from '../public/assets/home_header_content/hero_image.svg';
import backgroundImageHeading from '../public/assets/home_header_content/Header_BG_solid.svg';
import { Grid, Typography } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Header = () => {
  return (
    <Grid  Container sx={{width: '100%', position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundImage: {backgroundImage1}, backgroundSize: 'cover', backgroundPosition: 'center', height: '600px'}}>
          <Box height={120} display={'flex'} justifyContent={'right'} marginRight={10}>
               <Box lg ={4} sx={{border:'1px solid white', width: '50'}} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                  <PublicIcon color='secondary'/>
               </Box>
               <Box lg ={8} sx={{border:'1px solid white'}} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <Typography color={'white'}>
                    Link zu abes Angebote/Preise
                  </Typography>
                  <Button variant='contained' color='secondary' >
                    REGRISTIERUNG
                  </Button>
                  <Typography color={'white'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
                  <Button variant='contained' color='secondary'>
                    LOS GEHT'S
                  </Button>
               </Box>
          </Box>
          <Box height={40} display={'flex'}  justifyContent={'center'} alignItems={'center'}>
              <Box  height={40} sx={{ backgroundImage: `url(${backgroundImageHeading})`, backgroundSize: 'cover', backgroundPosition: 'left', width: '40%'}}/>
              <Box >
                <Typography variant='h4' color={'white'}>
                  DWIN WEG ZU
                </Typography>
              </Box> 
              <Box  height={40} sx={{ backgroundSize: 'cover', backgroundPosition: 'right', width: '40%'}}/>
          </Box>
          <Box height={50} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <Typography height={25} color={'white'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
                  <Typography height={25} color={'white'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
          </Box>
          <Box height={90} display={'flex'} justifyContent={'center'} alignItems={'center'} >
              <Button variant="contained" color='secondary' sx={{marginRight: '10px'}} startIcon={<PlayCircleOutlineIcon color='primary'/>}>
                SCHAU VIDEO
              </Button>
              <Button variant="contained" color='secondary' sx={{marginLeft: '10px'}}>
              SELBST & SOFORT HILFE
              </Button>

          </Box>
          <Box height={300} display={'flex'}  flexDirection={'column'}  alignItems={'center'}>
                  <Typography  color={'secondary'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
                  <Typography  color={'white'} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    Bereit, dich selbst neu zu entdecken und deine mentale Stärke zu entfesseln?
                    Wir sind hier, um dich auf deinem Weg zur persönlichen Entwicklung zu begleiten
                    und dir die Werkzeuge zu geben, um ein erfülltes und ausgeglichenes Leben zu führen.
                    Für eine Stabile & starke Psyche. Erlebe eine Welt voller Potenzial und lerne,
                    dein Leben bewusst zu lenken und zu gestalten. Nimm dein Leben in die Hand und wage
                    den ersten Schritt in Richtung
                    Veränderung : starte jetzt deine Veränderung!  Link zur Anmeldung
                  </Typography>
                  <Typography  color={'secondary'}>
                    Kostenlos. Anonym.Hochwerig
                  </Typography>
          </Box>
    </Grid>
  );
};

export default Header;

