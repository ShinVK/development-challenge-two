import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Context from '../context/Context';
import { Button, MenuItem, TextField, Typography } from '@mui/material';
import getAllMedicalData from '../services/GetAllMedical';
import deleteMedical from '../services/DeleteMedical';


export default function DeleteMedicalUser() {
  const {
    token
  } = useContext(Context);

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [userLogin, setUserLogin] = useState('');


  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState('');


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

    const result = users.filter(({ id }) => id === value);
    const { login } = result[0]
    setUserLogin(login);
  }

  const onClick = async () => {
    const data = await deleteMedical(token, userId);
    console.log(data);
    const { response: { data: { message }}} = data;
    if (message) {
      setMsg(`Não foi possível remover o usuário`);
      return setShowMsg(true);
    }
    setMsg(`${userLogin} - dados médicos deletado`);
    return setShowMsg(true);
    

  }
  return (
    <Paper sx={{ width: '100%', p: 10}}>
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
        sx={{ backgroundColor: 'red'}}
        onClick={ onClick }
      >
        Deletar Usuário
      </Button>
      { showMsg && 
        <Typography sx={{ color: 'red', textAlign: 'center', mt: 3,}}>
          { msg }
        </Typography>
      }
    </Paper>
  );
}
