import { Container, Paper, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import HeaderAppBar from '../../components/Appbar';
import DrawerCustomer from '../../components/DrawerCustomer';
import Context from '../../context/Context';

export default function Customer() {
  return (
    <>
       <HeaderAppBar />
        <DrawerCustomer />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <Paper>
            <Typography sx={{ p: 15, fontSize: '2rem'}}>
              Selecione uma opção ao lado
            </Typography>
          </Paper>
        </Container>
    </>
  )
}
