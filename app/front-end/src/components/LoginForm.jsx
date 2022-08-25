import { Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import Postlogin from '../services/PostLogin';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setdisabled] = useState(true)

  const handleLogin = ({ target }) => {
    const { value } = target;
    setLogin(value);
    if (value.length > 0 && password.length > 0) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  }

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
    if (value.length > 0 && login.length > 0) {
      setdisabled(false)
    } else {
      setdisabled(true)
    }
  }

  const onClickLogin = async () => {
    // requisição PostLogin ------
    const data = await Postlogin({login, password})
    console.log(data);
  }

  return (
    <Paper sx={{ width: '40%', mt: 20, p: 5}}>
       <form>
        <Grid container spacing={{ xs: 2, md: 3}} sx={{ mr: 15}}>
          <Grid item xs={ 12 }>
            <TextField
              type="text"
              variant="outlined"
              value={ login }
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

          <Grid container>
            <Grid item xs={ 12 } sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
              <Button
                disabled={ disabled }
                variant="outlined"
                onClick={ onClickLogin }
              >
                Entrar
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </form>

    </Paper>
  )
}
