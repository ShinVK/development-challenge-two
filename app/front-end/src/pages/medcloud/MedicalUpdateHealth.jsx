import { Container, Paper, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import HeaderAppBar from '../../components/Appbar';
import DrawerMedCloud from '../../components/DrawerMedCloud';
import UpdateMedicalProfile from '../../components/UpateMedicalProfile';
import Context from '../../context/Context';


export default function MedicalUpdateHealth() {
  const {
    accessUser
  } = useContext(Context)

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (accessUser !== 'medcloud')
    setAuthorized(true);
  }, [accessUser])
  

  return (
    <>
      { authorized ? 
        <Typography>
          Desculpe, você não pode acessa essa página
        </Typography>  
      :
      <>
      <HeaderAppBar />
        <DrawerMedCloud />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <Paper>
            <UpdateMedicalProfile />
          </Paper>
        </Container>
      </>
    }
    </>
  )
}
