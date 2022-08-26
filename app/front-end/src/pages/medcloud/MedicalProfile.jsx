import { Container, Paper, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import HeaderAppBar from '../../components/Appbar';
import Bio from '../../components/Bio';
import DrawerMedCloud from '../../components/DrawerMedCloud';
import Context from '../../context/Context';


export default function MedicalProfile() {
  const {
    accessUser
  } = useContext(Context)

  const [authorized, setAuthorized] = useState(false);

  console.log(accessUser)
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
            <Bio />
          </Paper>
        </Container>
      </>
    }
    </>
  )
}
