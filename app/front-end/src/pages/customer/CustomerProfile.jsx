import { Container, Paper} from '@mui/material';
import React from 'react'
import HeaderAppBar from '../../components/Appbar';
import Bio from '../../components/Bio';
import DrawerCustomer from '../../components/DrawerCustomer';


export default function CustomerProfile() {
  return (
    <>
       <HeaderAppBar />
        <DrawerCustomer />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <Paper>
           <Bio />
          </Paper>
        </Container>
    </>
  )
}
