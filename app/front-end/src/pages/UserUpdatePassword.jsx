import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderAppBar from '../components/Appbar';
import Context from '../context/Context';
import updatePasswordUser from '../services/UpdatePassword';

export default function UpdatePassword() {
  const [oldPassword, setoldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const [disabled, setdisabled] = useState(true);
  const [errorMsg, seterrorMsg] = useState(false);
  // mensagem de erro de acordo com a resposta do backend
  const [msg, setMsg] = useState('Falha no registro');

  // provider state
  const { id, token } = useContext(Context);

  // para redirecionar
  const history = useHistory();

  // resetar msg para false toda vez
  useEffect(() => {
    seterrorMsg(false);
  }, []);

  const handleLogin = ({ target }) => {
    const { value } = target;
    setoldPassword(value);
    if (value.length > 4 && password.length > 4 && password === password2) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
    if (value.length > 4 && oldPassword.length > 4 && value === password2) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  const handlePassword2 = ({ target }) => {
    const { value } = target;
    setPassword2(value);
    if (value.length > 4 && oldPassword.length > 4 && password === value) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  };

  const onClickLogin = async () => {
    // requisição PostLogin ------
    const pass = {
      oldPassword,
      newPassword: password,
    }
    const data = await updatePasswordUser(token, id, pass);
    console.log(data)
    if (!data.id) {
      const { response: { data: { message }}} = data;
      setMsg(message);
      return seterrorMsg(true)
    };
    setMsg('Senha atualizada')
    return seterrorMsg(true);
  }

  return (
    <>
      <HeaderAppBar />
      <Container maxWidth='md' sx={{ ml: 35, mt: 10 }}>
        <Paper>
          <Paper sx={{ width: '70%', mt: 5, p: 5, mr: 5, mb: 5 }}>
            <form>
              <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mr: 15 }}>
                <Typography>Escolha uma nova senha</Typography>
                <Grid item xs={11}>
                  <TextField
                    type='password'
                    variant='outlined'
                    value={oldPassword}
                    onChange={handleLogin}
                    placeholder='Senha antiga'
                  />
                </Grid>
                <Grid item xs={11}>
                  <TextField
                    type='password'
                    variant='outlined'
                    value={password}
                    onChange={handlePassword}
                    placeholder='Nova senha'
                  />
                </Grid>

                <Grid item xs={11}>
                  <TextField
                    type='password'
                    variant='outlined'
                    value={password2}
                    onChange={handlePassword2}
                    placeholder='confirme sua nova senha'
                  />
                </Grid>

                <Grid container>
                  <Grid
                    item
                    xs={5}
                    sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
                  >
                    <Button
                      disabled={disabled}
                      variant='outlined'
                      onClick={onClickLogin}
                    >
                      Atualizar Senha
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}
                  >
                    <Button
                      onClick={() => history.goBack()}
                      variant='contained'
                      sx={{ p: 1 }}
                    >
                      Voltar
                    </Button>
                  </Grid>
                  {errorMsg && (
                    <Typography
                      sx={{ color: 'red', textAlign: 'center', mt: 3 }}
                    >
                      {msg}
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Paper>
      </Container>
    </>
  );
}
