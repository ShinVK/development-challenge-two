import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import { useHistory } from 'react-router-dom';
import createUser from '../services/CreateUser';

export default function RegisterForm() {
  const [loginUser, setLoginUser] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [disabled, setdisabled] = useState(true)
  const [errorMsg, seterrorMsg] = useState(false)
  // mensagem de erro de acordo com a resposta do backend
  const [msg, setMsg] = useState('Falha no registro');

  // provider state
  const {
    setToken,
    setId,
    setAccessUser,
    setIsLogged,
  } = useContext(Context);

  // para redirecionar
  const history = useHistory();

  // resetar msg para false toda vez
  useEffect(() => {
    seterrorMsg(false);
  }, [])

  const handleLogin = ({ target }) => {
    const { value } = target;
    setLoginUser(value);
    if (value.length > 4 && password.length > 4 && password === password2) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  }

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
    if (value.length > 4 && loginUser.length > 4 && value === password2) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  }

  const handlePassword2 = ({ target }) => {
    const { value } = target;
    setPassword2(value);
    if (value.length > 4 && loginUser.length > 4 && password === value) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  }

  const onClickLogin = async () => {
    // requisição PostLogin ------
    const data = await createUser({ login: loginUser, password })
    if (!data.user) {
      const { response: { data: { message }}} = data;
      setMsg(message);
      return seterrorMsg(true)
    };
    console.log(data);
    const { user: { access, id }, token } = data;
    setToken(token);
    setAccessUser(access);
    setId(id);
    setIsLogged(true);
    return history.push('/register');
  }

  return (
    <Paper sx={{ width: '90%', mt: 5, p: 5, mr: 5, mb: 5}}>
       <form>
        <Grid container spacing={{ xs: 2, md: 3}} sx={{ mr: 15}}>
          <Typography>
            Registre-se
          </Typography>
          <Grid item xs={ 12 }>
            <TextField
              type="text"
              variant="outlined"
              value={ loginUser }
              onChange={ handleLogin }
              placeholder='login'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              type="password"
              variant="outlined"
              value={ password }
              onChange={ handlePassword }
              placeholder='senha'
            />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField
              type="password"
              variant="outlined"
              value={ password2 }
              onChange={ handlePassword2 }
              placeholder='confirme sua senha'
            />
          </Grid>

          <Grid container>
            <Grid item xs={ 12 } sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
              <Button
                disabled={ disabled }
                variant="outlined"
                onClick={ onClickLogin }
              >
                Próximo passo
              </Button>
         
            </Grid>
            { errorMsg && 
                <Typography sx={{ color: 'red', textAlign: 'center', mt: 3,}}>
                  { msg }
                </Typography>
              }
          </Grid>
        </Grid>
      </form>

    </Paper>
  )
}
