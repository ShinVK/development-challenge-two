import { Container, Paper } from '@mui/material';
import React from 'react'
import HeaderAppBar from '../../components/Appbar';
import DrawerCustomer from '../../components/DrawerCustomer';
import UpdateProf from '../../components/UpdateProfile';


export default function CustomerUpdateProfile() {
  return (
    <>
       <HeaderAppBar />
        <DrawerCustomer />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <Paper>
            <UpdateProf />
          </Paper>
        </Container>
    </>
  )
}
