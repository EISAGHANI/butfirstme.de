import { Button, Container, Grid , Typography} from '@mui/material';
import { ReactComponent as YellowLine } from '../../assets/Services and Offers/yellow_line.svg';
import { ReactComponent as ImageAboutus } from '../../assets/About Us/Aboutus_gfx.svg'
import React from 'react'



const AboutUs = () => {
  return (
    <Container>
      <Grid container direction={'row'} justifyContent={'center'} spacing={0}>
        <Typography marginTop='30px' fontSize={'48px'} fontFamily={'Montserrat-Bold'}>
          <span style={{ color: '#0E4062' }}>ABOUT</span> <span style={{ color: '#F9AE19' }}>US</span>
        </Typography>
       
      </Grid>
      <Grid container mt={'10px'}>
        <Grid container lg= {8} direction={'row'} justifyContent={'center'}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint esse et doloremque dolor, fugiat alias autem quibusdam sed dolorem molestias hic recusandae ad voluptas eum ab voluptates reiciendis quia ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatem neque explicabo veniam doloribus, nemo soluta dolore. Aperiam accusamus hic delectus. Alias id porro sint dolore qui sit esse quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat temporibus et praesentium quasi quo inventore incidunt quidem cupiditate? Voluptates impedit soluta eveniet fuga consectetur? Autem perferendis minima debitis obcaecati.</Typography>
            <Button  component='a' href='/services'  variant='contained' size='small' color = 'secondary'  >
              <Typography fontFamily={'Montserrat-light'}> more </Typography>
            </Button>
        </Grid>
        <Grid container lg = {4}>
          <ImageAboutus/>
        </Grid>
      </Grid>
      <YellowLine style={{ margin: '16px' }} />
    </Container>
  )
}

export default AboutUs