import { Container, Grid, Typography} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ProfileImage from '../../assets/Testimonials/Mock1.png';
import ProfileImage2 from '../../assets/Testimonials/Mock2.jpg';
import ProfileImage3 from '../../assets/Testimonials/Mock3.jpg';
import ProfileImage4 from '../../assets/Testimonials/Mock4.jpeg';
import Rating from '@mui/material/Rating';
import React from 'react'



const Testimonials = () => {
  // this state is for star rating in Testimonials
  const [value, setValue] = React.useState(3);


  return (
    <Container>
        <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography marginTop='30px' fontSize={'48px'} fontFamily={'Montserrat-Bold'}> 
              <span style={{ color: '#0E4062' }}>TESTIMONIALS</span>
            </Typography>
       
          <Typography variant='p' noWrap fontSize={'24px'}>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Expedita iste accusantium odit iure nat</span>
          </Typography>
        </Grid>
        <Grid container direction={'row'} margin={5}>
            <Grid container direction={'row'} lg = {3} >
                  <Card sx={{ maxWidth: 345 }} >
                      <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
                          <Avatar alt="Remy Sharp" src={ProfileImage} sx={{ width: 125, height: 125 }}/>
                      </Stack>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" color={'black'} >
                          Henry
                        </Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, optio? Ea dolorum qui, aut, tempora velit quo quia nisi libero ab vitae eos nulla earum sequi accusamus voluptatem ipsa at.
                        </Typography>
                      </CardContent>
                  </Card>
            </Grid>
            <Grid container direction={'row'} lg = {3} >
                  <Card sx={{ maxWidth: 345 }} >
                      <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
                          <Avatar alt="Remy Sharp" src={ProfileImage2} sx={{ width: 125, height: 125 }}/>
                      </Stack>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" color={'black'} >
                          Karl Marks
                        </Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, optio? Ea dolorum qui, aut, tempora velit quo quia nisi libero ab vitae eos nulla earum sequi accusamus voluptatem ipsa at.
                        </Typography>
                      </CardContent>
                  </Card>
            </Grid>
            <Grid container direction={'row'} lg = {3} >
                  <Card sx={{ maxWidth: 345 }} >
                      <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
                          <Avatar alt="Remy Sharp" src={ProfileImage3} sx={{ width: 125, height: 125 }}/>
                      </Stack>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" color={'black'} >
                          Maria
                        </Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, optio? Ea dolorum qui, aut, tempora velit quo quia nisi libero ab vitae eos nulla earum sequi accusamus voluptatem ipsa at.
                        </Typography>
                      </CardContent>
                  </Card>
            </Grid>
            <Grid container direction={'row'} lg = {3} >
                  <Card sx={{ maxWidth: 345 }} >
                      <Stack direction="row" spacing={2} justifyContent={'center'} alignItems={'center'}>
                          <Avatar alt="Remy Sharp" src={ProfileImage4} sx={{ width: 125, height: 125 }}/>
                      </Stack>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div" color={'black'} >
                          Micheal
                        </Typography>
                        <Rating name="read-only" value={value} readOnly />
                        <Typography variant="body2" color="text.secondary">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, optio? Ea dolorum qui, aut, tempora velit quo quia nisi libero ab vitae eos nulla earum sequi accusamus voluptatem ipsa at.
                        </Typography>
                      </CardContent>
                  </Card>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Testimonials;