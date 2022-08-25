import { Container, Grid, Paper } from '@mui/material';
import React from 'react';
import HeaderAppBar from '../components/Appbar';
import LoginForm from '../components/LoginForm';

export default function Login() {
  return (
    <>
      <HeaderAppBar />
      <Container maxWidth="md">
        <Paper>
          <Grid>
            <Grid item>
              <LoginForm />
            </Grid>
          </Grid>
        </Paper>
      </Container>
      
    </>
  )
}
