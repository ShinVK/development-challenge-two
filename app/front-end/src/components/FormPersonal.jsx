import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import { useHistory } from 'react-router-dom';
import createPersonalData from '../services/CreatePersonal';

export default function FormPersonal() {
  // formulário de cadastro
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [errorMsg, seterrorMsg] = useState(false)
  // mensagem de erro de acordo com a resposta do backend
  const [msg, setMsg] = useState('Falha no registro');

  // provider state
  const {
    id,
    token,
  } = useContext(Context);

  // para redirecionar
  const history = useHistory();

  // resetar msg para false toda vez
  useEffect(() => {
    seterrorMsg(false);
  }, [])


  const onClick = async () => {
    // requisição PostMedical ------
    const registerForm = {
      firstName,
      lastName,
      email,
      birthDate,
      city,
      state,
    }
    const data = await createPersonalData(token, id, registerForm)
    console.log(data);
    if (!data.newUser) {
      const { response: { data: { message }}} = data;
      setMsg(message);
      return seterrorMsg(true)
    };
    return history.push('/login');
  }

  return (
    <Paper sx={{ width: '90%', mt: 5, p: 5, mb: 5}}>
       <form>
        <Grid container spacing={{ xs: 2, md: 3}} sx={{ pl: 7 }}>
          <Typography>
            Dados Pessoais
          </Typography>
          <Grid item xs={ 12 }>
            <TextField
              name="firstName"
              type="text"
              variant="outlined"
              value={ firstName }
              onChange={ ({target: { value}}) => setFirstName(value) }
              placeholder='Primeiro Nome'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name="lastname"
              type="text"
              variant="outlined"
              value={ lastName }
              onChange={ ({target: { value}}) => setLastName(value) }
              placeholder='Segundo Nome'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name="email"
              type="text"
              variant="outlined"
              value={ email }
              onChange={ ({target: { value}}) => setEmail(value) }
              placeholder='Email'
            />
          </Grid>

          <Grid item xs={ 12 }>
            <Typography sx={{ fontSize: '0.8rem'}}>
              Data de nascimento
            </Typography>
            <TextField
              name="birthDate"
              type="date"
              variant="outlined"
              value={ birthDate }
              onChange={ ({target: { value}}) => setBirthDate(value) }
            />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField
              name="city"
              type="text"
              variant="outlined"
              value={ city }
              onChange={ ({target: { value}}) => setCity(value) }
              placeholder='Cidade'
            />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField
              name="state"
              type="text"
              variant="outlined"
              value={ state }
              onChange={ ({target: { value}}) => setState(value) }
              placeholder='Estado'
            />
          </Grid>

          <Grid container>
            <Grid item xs={ 12 } sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
              <Button
                variant="outlined"
                onClick={ onClick }
              >
                Cadastrar
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
