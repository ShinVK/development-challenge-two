import { Container, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import HeaderAppBar from '../../components/Appbar';
import PermanentDrawerLeft from '../../components/Drawer';
import UpdateProf from '../../components/UpdateProfile';
import Context from '../../context/Context';

export default function AdminUpdateProfile() {
  const {
    accessUser
  } = useContext(Context)

  const [authorized, setAuthorized] = useState(false);



  useEffect(() => {
    if (accessUser !== 'administrator')
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
        <PermanentDrawerLeft />
        <Container maxWidth="lg" sx={ {ml: 35, mt: 10}}>
          <UpdateProf />
        </Container>
      </>
    }
    </>
  )
}

