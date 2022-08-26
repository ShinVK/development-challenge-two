import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Context from '../context/Context';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import getAllMedicalData from '../services/GetAllMedical';
import { useHistory } from 'react-router-dom';


export default function UpdateMedicalProfile() {
  const {
    token,
    setIdEdit
  } = useContext(Context);

  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect( () => {
    async function fetchAllUsers() {
      const data = await getAllMedicalData(token);
      const dataMap = data.map((user) => ({
        login: user.user.login,
        id: user.user.id,
      }))
      console.log(dataMap)
      setUsers(dataMap);
    }

    fetchAllUsers()
  }, [token])


  
  const handleChangeSelect = ({ target }) => {
    const { value } = target;
    setUserId(value);
  }

  const onClick = async () => {
    setIdEdit(userId);
    history.push('/medcloud/update/profile/form');
  }

  return (
    <Paper sx={{ width: '100%', p: 10}}>
      <Typography>
        Selecione um usuário
      </Typography>
      <TextField
        value={ userId }
        select
        label="usuário"
        helperText="Selecione o usuário"
        onChange={ handleChangeSelect }
        sx={{ width: '400px', mr: 5}}
      >
        { users.map((user) => (
          <MenuItem key={ user.id } value={ user.id }>
            { user.login }
          </MenuItem>
        ))}
      </TextField>
     
      <Button
        variant="outlined"
        onClick={ onClick }
      >
        Atualizar Cadastro
      </Button>
    </Paper>
  );
}
