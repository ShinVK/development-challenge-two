import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react'
import Context from '../context/Context'
import getOnePersonal from '../services/GetOnePersonal';

export default function Bio() {
  const {
    token,
    id,
  } = useContext(Context);

  const [user, setUser] = useState({})

  useEffect(() => {
    async function fetchOnePersonal() {
      const data = await getOnePersonal(token, id);
      console.log(data);
      setUser(data);
    }
    fetchOnePersonal();
  }, [id, token])
  

  return (
    <Box sx={ { p: 5 }}>
      <Typography sx={{ mb: 2}}>
        { `Nome completo: ${user.firstName} ${user.lastName}` }
      </Typography>
      <Typography sx={{ mb: 2}}>
        { `Email: ${user.email}` }
      </Typography>
      <Typography sx={{ mb: 2}}>
        { `Nascimento: ${user.birthDate}` }
      </Typography>
      <Typography sx={{ mb: 2}}>
        { `Localização: ${user.city} - ${user.state}` }
      </Typography>
    </Box>
  )
}
