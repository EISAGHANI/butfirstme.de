import {  Button, Container, Grid,  Typography } from '@mui/material';
import { ReactComponent as YellowLine } from '../public/assets/servicesandoffers/yellow_line.svg';
import React from 'react';

import backgroundImage1 from '../public/assets/membershipplansnew/Price_table_a.svg';
import backgroundImage2 from '../public/assets/membershipplansnew/Price_table_b.svg';
import backgroundImage3 from '../public/assets/membershipplansnew/Price_table_c.svg';
import backgroundImage4 from '../public/assets/membershipplansnew/Price_table_d.svg';
import backgroundImage5 from '../public/assets/membershipplansnew/Price_table_e.svg';
import backgroundImage6 from '../public/assets/membershipplansnew/Price_table_f.svg';

const Membership = () => {
  const backgroundImages = [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
    backgroundImage5,
    backgroundImage6,
  ];

  const gridItemStyles = {
    backgroundRepeat: 'no-repeat',
    height: '400px',
    
  };

  return (
    <Container>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography marginTop="30px" fontSize="48px" fontFamily="Montserrat-Bold">
            <span style={{ color: '#0E4062' }}>MEMBERSHIP</span> <span style={{ color: '#F9AE19' }}>PLANS</span>
          </Typography>
        </Grid>
        <Grid item xs={12} marginBottom={'2px'}>
          <Typography variant="p" noWrap fontSize="24px">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Expedita iste accusantium odit iure nat</span>
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={'10px'} mb={'10px'}>
        {backgroundImages.map((image, index) => (
          <Grid key={index} item lg={2} md={4} xs={6} sx={{ backgroundImage: `url(${image})`, ...gridItemStyles }}>
            <Button  component='a' href='/services'  variant='contained'  size='small' color = 'secondary' sx={{ marginLeft: '50px', marginTop: '330px' }} >
              <Typography fontFamily={'Montserrat-light'}> more </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      <YellowLine style={{ margin: '16px' }} />
    </Container>
  );
};

export default Membership;
