import * as React from 'react';
// import { signInWithGooglePopUp, createUserDocumentFromAUth } from '../node_modules/@firebase/util/'
import {signIn, signOut } from 'next-auth/react';
import backgroundImage1 from '../public/assets/header_material/close-up-hand-with-painting-pallete.jpg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
// import { ReactComponent as ButfirstmeLogo } from '../public/assets/header_material/Logo_icon.svg';
// import { ReactComponent as ButfirstmeLogoText } from '../public/assets/header_material/logo_text.svg';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import login_validate from '@/lib/validate';


const defaultTheme = createTheme();

export default function SignIn() {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: login_validate,
    onSubmit
  });

  console.log(formik.errors);

  async function onSubmit(values) {
    console.log(values);
  }


  // Google Handler Function
  async function handleGoogleSignin() {
    await signIn('google', { callbackUrl: 'http://localhost:3000/' });
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ width: '100vw', position: 'relative', left: '50%', transform: 'translateX(-50%)', backgroundImage: `url(${backgroundImage1})`, backgroundSize: 'cover', backgroundPosition: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Paper variant="outlined" rounded elevation={3} sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box component="form"  noValidate borderRadius={2} boxShadow={'3px 3px 3px 3px'}>
              <Box container sx={{ bgcolor: "#F9AE19" }}>
                {/* <ButfirstmeLogo style={{ height: '100px', width: '100px', marginRight: '6px' }} />
                <ButfirstmeLogoText style={{ height: '100px', width: '200px', marginLeft: '16px' }} /> */}
              </Box>
              <Box sx={{ ml: 7 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField  id="email" {...formik.getFieldProps('email')} margin="normal" required  label="Email Address" name="email" autoComplete="email" autoFocus  InputProps={{startAdornment: (<AccountCircleIcon sx={{ color: '#F9AE19' }} />),}}/>
                </Box>
                {formik.errors.email && formik.touched.email ? <span>{formik.errors.email}</span> : null}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <TextField  id="password" name="password" {...formik.getFieldProps('password')} margin="normal" required  label="Password" type="password" autoComplete="current-password" InputProps={{startAdornment: (<LockOutlinedIcon sx={{ color: '#F9AE19' }} />),}}/>
                </Box>
                {formik.errors.password && formik.touched.email ? <span>{formik.errors.password}</span> : null}
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} sx={{ marginRight: 20 }} label="Remember me" />
                <Button type="submit" onSubmit={formik.handleSubmit} variant="contained" sx={{ mt: 2, mb: 2, marginRight: 3, bgcolor: "#F9AE19" }}>Sign In</Button>
                <Button onClick={handleGoogleSignin} type="submit" variant="contained" sx={{ mt: 2, mb: 2, bgcolor: "#F9AE19" }}>Sign In with Google</Button>
              </Box>
              <Grid container sx={{ m: 2, paddingRight: 4 }}>
                <Grid item xs={6}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                  <Link href="/signup" variant="body2">
                    {"New User? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
