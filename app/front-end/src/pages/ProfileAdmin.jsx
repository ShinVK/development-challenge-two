import { Container, Paper, Typography } from '@mui/material';
import React from 'react'
import HeaderAppBar from '../components/Appbar';
import Bio from '../components/Bio';
import PermanentDrawerLeft from '../components/Drawer';
// import Context from '../context/Context';

function ProfileAdmin() {
  // const {
  //   accessUser
  // } = useContext(Context
  

  return (
    <>
     
      <>
        <HeaderAppBar />
        <PermanentDrawerLeft />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <Paper>
            <Bio />
          </Paper>
        </Container>
      </>
    </>
  )
}

export default ProfileAdmin