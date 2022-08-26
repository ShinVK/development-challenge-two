import { Container, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import HeaderAppBar from '../../components/Appbar';
import DeleteUserAdmin from '../../components/DeleteUser';
import PermanentDrawerLeft from '../../components/Drawer';
import Context from '../../context/Context';

function AdminDeleteUser() {
  const {
    accessUser
  } = useContext(Context)

  const [authorized, setAuthorized] = useState(false);

  console.log(accessUser)
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
          <DeleteUserAdmin />
        </Container>
      </>
    }
    </>
  )
}

export default AdminDeleteUser