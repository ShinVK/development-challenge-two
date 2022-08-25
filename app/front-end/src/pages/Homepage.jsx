import React from 'react';
import ResponsiveAppBar from '../components/Appbar';
import back1 from '../assets/imgs/back1.jpg';
import MedcloudLogo from '../assets/imgs/logo-medcloud-4.webp';
import { Box, Grid, Paper, Typography } from '@mui/material';

const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to bottom, rgba(240,243,245,1),rgba(240,243,245,0.5)), url(${back1})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '20px',
    width: '100vw'
  }
}

export default function Homepage() {
  return (
    <div>
      <ResponsiveAppBar />
      <Paper disabledGutter style={ styles.paperContainer } sx={ { minHeight: { xs: '50vh', md: '30vh', lg: '80vh' } } }>
        <Grid
          container
          align="center"
          justifyContent="center"
        >
          <Grid item>
            <Box component="div">
              <Box
                component="img"
                sx={{
                  height: 250,
                  pt: 5,
                }}
                src={ MedcloudLogo }
              />
            </Box>
            <Typography
              variant="body1"
              component="div" 
              sx={{
                fontFamily: 'Poppins',
                textAlign: 'center',
                mt: 1,
                fontSize: { xs: '1.5rem', sm: '2rem', xl: '3rem'}
            }}>
              Seus exames na nuvem
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
