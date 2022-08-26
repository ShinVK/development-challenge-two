import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Context from '../context/Context';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import getAllPersonalDataMedCloud from '../services/GetAllPersonalMedCloud';


export default function CreateMedicalUser() {
  const {
    token,
    setIdEdit
  } = useContext(Context);

  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect( () => {
    async function fetchAllUsers() {
      const data = await getAllPersonalDataMedCloud(token);
      const dataMap = data.map((user) => ({
        firstName: user.firstName,
        lastName: user.lastName,
        id: user.userId,
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
    history.push('/medcloud/post/user/form');
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
            { `${user.firstName} ${user.lastName}` }
          </MenuItem>
        ))}
      </TextField>
     
      <Button
        variant="outlined"
        onClick={ onClick }
      >
        Criar cadastro médico
      </Button>
    </Paper>
  );
}
