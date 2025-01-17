import React, { useState, useEffect, useContext } from 'react';
import Paper from '@mui/material/Paper';
import Context from '../context/Context';
import getAllUsersAdmin from '../services/GetAllAdmin';
import updateAccessAdmin from '../services/UpdateAccess';
import { Button, MenuItem, TextField, Typography } from '@mui/material';


export default function UpdateAccess() {
  const {
    token
  } = useContext(Context);

  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [userLogin, setUserLogin] = useState('');

  const [userAccess, setUserAccess] = useState('');

  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState('Login Inválido');

  const accessRoles = [
    'administrator', 'medcloud', 'customer' 
  ]

  useEffect( () => {
    async function fetchAllUsers() {
      const data = await getAllUsersAdmin(token);
      console.log(data);
      setUsers(data);
    }
    fetchAllUsers()
  }, [token])
  
  const handleChangeSelect = ({ target }) => {
    const { value } = target;
    setUserId(value);

    const result = users.filter(({ id }) => id === value);
    const { access, login } = result[0]
    setUserAccess(access);
    setUserLogin(login);
    console.log(userId, login, access);
  }

  const onClick = async () => {
    const data = await updateAccessAdmin(token, userId, {
      access: userAccess
    })
    setShowMsg(true);
    if (data.access) {
      return setMsg(`usuário ${userLogin} atualizado com sucesso`);
    } 
    setMsg(`Não foi possível atualizar o usuário ${userLogin}`)
    
    console.log(data)
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
      <TextField
        value={ userAccess }
        select
        label="access"
        helperText="Selecione a permissão"
        onChange={ ({ target: { value }}) => setUserAccess(value) }
        sx={{ width: '300px', mr: 5}}
      >
        { accessRoles.map((accessRole, i) => (
          <MenuItem key={ i } value={ accessRole }>
            { accessRole }
          </MenuItem>
        ))}
      </TextField>
      <Button
        variant="outlined"
        onClick={ onClick }
      >
        Atualizar Cadastro
      </Button>
      { showMsg && 
        <Typography sx={{ color: 'red', textAlign: 'center', mt: 3,}}>
          { msg }
        </Typography>
      }
    </Paper>
  );
}
