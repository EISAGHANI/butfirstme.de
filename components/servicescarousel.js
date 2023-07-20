import {  Button, Grid, Typography, Box, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { SvgIcon } from "@mui/material/SvgIcon";
import { ReactComponent as IbooksIcon } from '../public/assets/servicesandoffers/IBooks_icon.svg';
import { ReactComponent as GamesIcon } from '../public/assets/servicesandoffers/Games_icon.svg';
import { ReactComponent as LearningPlatformIcon } from '../public/assets/servicesandoffers/Learning_platform_icon.svg';
import { ReactComponent as YellowLine } from '../public/assets/servicesandoffers/yellow_line.svg';
import React from 'react';

const ServicesCarousel = () => {
  return (
    <Container  >
        <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography marginTop='30px' fontSize={'48px'} fontFamily={'Montserrat-Bold'}> 
              <span style={{ color: '#0E4062' }}>SERVICES</span> <span style={{ color: '#F9AE19' }}>&amp; OFFERS</span>
            </Typography>
       
          <Typography variant='p' noWrap fontSize={'24px'}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Expedita iste accusantium odit iure nat</span>
          </Typography>
        </Grid>
  
 {/* Carousel of services starts from here */}
      <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={true} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={1000}>
          <Box>
            <Grid item sx={{ width: '100vw',  position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '80px', paddingBottom: '80px',}}>
              <Grid maxWidth="xl" sx={{ textAlign: 'center',color: 'black',}}>
                {/* <SvgIcon src={IbooksIcon} style={{ height: '100px', width: '60px', marginRight: '6px' }}/> */}
                {/* <IbooksIcon   style={{ height: '100px', width: '60px', marginRight: '6px' }} /> */}
                <Typography variant='h1' fontSize="48px" fontFamily={'Montserrat-Bold'}>IBOOKS DOWNLOAD</Typography>
                <Typography variant='body1' fontSize="24px" fontFamily={'Montserrat-light'}>We build bridges</Typography>
                <Typography variant='body1' fontSize="24px" fontFamily={'Montserrat-light'}>by providing innovative mental health solutions</Typography>
                <Button variant="contained" sx={{ bgcolor: '#F9AE19', marginTop:'10px' }}>
                  Call to Action
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid item sx={{ width: '100vw',  position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '80px', paddingBottom: '80px',}}>
              <Grid maxWidth="xl" sx={{ textAlign: 'center',color: 'black',}}>
                {/* <GamesIcon   style={{ height: '100px', width: '60px', marginRight: '6px' }} /> */}
                <Typography variant='h1' fontSize="48px" fontFamily={'Montserrat-Bold'}>GAMES SECTION</Typography>
                <Typography variant='body1' fontSize="24px" fontFamily={'Montserrat-light'}>We build bridges</Typography>
                <Typography variant='body1' fontSize="24px" fontFamily={'Montserrat-light'}>by providing innovative mental health solutions</Typography>
                <Button variant="contained" sx={{ bgcolor: '#F9AE19' , marginTop:'10px' }}>
                  Call to Action
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid item sx={{ width: '100vw',  position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '80px', paddingBottom: '80px',}}>
              <Grid maxWidth="xl" sx={{ textAlign: 'center',color: 'black',}}>
                {/* <LearningPlatformIcon   style={{ height: '100px', width: '60px', marginRight: '6px' }} /> */}
                <Typography variant='h1' fontSize="48px" fontFamily={'Montserrat-Bold'}>LEARNING TOOLS</Typography>
                <Typography variant='body1' fontSize="24px" fontFamily={'Montserrat-light'}>We build bridges</Typography>
                <Typography variant='body1' fontSize="24px" fontFamily={'Montserrat-light'}>by providing innovative mental health solutions</Typography>
                <Button variant="contained" sx={{ bgcolor: '#F9AE19', marginTop:'10px'  }}>
                  Call to Action
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Carousel>
        {/* <YellowLine style={{  margin: '16px' }}/> */}
  </Container>
  


  )
}

export default ServicesCarousel