import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import HeaderAppBar from '../components/Appbar';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function Login() {
  return (
    <>
      <HeaderAppBar />
      <Container maxWidth="xl" sx={ {mt: 5}}>
        <Paper sx={{ backgroundColor: '#f0feff' }}>
        <Typography
          component="div"
          sx={{
            pt: 2,
            ml: 5,
            fontSize: '4rem'
          }}
        >
            Seja Bem-Vindo
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={ 6 }>
              <LoginForm />
            </Grid>
            <Grid item xs={ 6 }>
              <RegisterForm />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      
    </>
  )
}
