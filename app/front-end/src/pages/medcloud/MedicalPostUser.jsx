import { Container, Paper, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import HeaderAppBar from '../../components/Appbar';
import CreateMedicalUser from '../../components/CreateMedicalUser';
import DrawerMedCloud from '../../components/DrawerMedCloud';
import Context from '../../context/Context';


export default function MedicalPostUser() {
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
            <CreateMedicalUser />
          </Paper>
        </Container>
      </>
    }
    </>
  )
}
