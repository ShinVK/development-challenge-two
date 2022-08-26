import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import HeaderAppBar from '../components/Appbar';
import FormPersonal from '../components/FormPersonal';

export default function RegisterPersonal() {
  return (
    <>
      <HeaderAppBar />
      <Container maxWidth="xl" sx={ {mt: 15}}>
        <Paper sx={{ backgroundColor: '#f0feff' }}>
          <Typography
            component="div"
            sx={{
              pt: 2,
              ml: 5,
              fontSize: '2rem'
            }}
          >
            Agora só falta algumas informações
          </Typography>
          <Grid container justifyContent='center' alignContent="center">
            <Grid item xs={ 5 }>
              <FormPersonal />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}
