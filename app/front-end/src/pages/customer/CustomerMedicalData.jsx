import { Container, Paper } from '@mui/material';
import React from 'react'
import HeaderAppBar from '../../components/Appbar';
import DrawerCustomer from '../../components/DrawerCustomer';
import MedicalDataProfile from '../../components/MedicalDataUser';

export default function CustomerMedicalData() {
  return (
    <>
       <HeaderAppBar />
        <DrawerCustomer />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <Paper>
            <MedicalDataProfile />
          </Paper>
        </Container>
    </>
  )
}
