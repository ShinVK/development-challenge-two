import { Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react'
import Context from '../context/Context';

export default function Medical() {
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
      <div>Medical</div>
    }
    </>
  )
}
