import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react'
import Context from '../context/Context'
import getOnePersonal from '../services/GetOnePersonal';
import updatePersonalData from '../services/UpdatePersonal';

export default function UpdateProf() {
  const {
    token,
    id,
  } = useContext(Context);

  const [firstNameEdit, setfirstNameEdit] = useState('');
  const [lastNameEdit, setlastNameEdit] = useState('');
  const [birthDateEdit, setbirthDateEdit] = useState('');
  const [emailEdit, setemailEdit] = useState('');
  const [cityEdit, setcityEdit] = useState('');
  const [stateEdit, setstateEdit] = useState('');

  const [errorMsg, seterrorMsg] = useState(false);
  const [msg, setMsg] = useState('Falha na operação');

  useEffect(() => {
    async function fetchOnePersonal() {
      const data = await getOnePersonal(token, id);
      const { firstName, lastName, email, birthDate, city, state } = data;
      console.log(data)
      setfirstNameEdit(firstName);
      setlastNameEdit(lastName);
      setbirthDateEdit(birthDate);
      setemailEdit(email);
      setcityEdit(city);
      setstateEdit(state);
    }
    fetchOnePersonal();
  }, [id, token])
  
  const onClick = async () => {
    // requisição PostLogin ------
    const personalData = {
      firstName: firstNameEdit,
      lastName: lastNameEdit,
      email: emailEdit,
      birthDate: birthDateEdit,
      city: cityEdit,
      state: stateEdit,
    }

    const data= await updatePersonalData(token, id, personalData)
   
    if (!data.id) {
      const { response: { data: { message }}} = data;
      setMsg(message);
      return seterrorMsg(true)
    };
    


    seterrorMsg(true);
    return setMsg('Cadastro atualizado');
  }

  return (
    <Box sx={ { p: 5 }}>
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
              value={ firstNameEdit }
              onChange={ ({target: { value}}) => setfirstNameEdit(value) }
              placeholder='Primeiro Nome'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name="lastname"
              type="text"
              variant="outlined"
              value={ lastNameEdit }
              onChange={ ({target: { value}}) => setlastNameEdit(value) }
              placeholder='Segundo Nome'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name="email"
              type="text"
              variant="outlined"
              value={ emailEdit }
              onChange={ ({target: { value}}) => setemailEdit(value) }
              placeholder='Email'
            />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField
              name="city"
              type="text"
              variant="outlined"
              value={ cityEdit }
              onChange={ ({target: { value}}) => setcityEdit(value) }
              placeholder='Cidade'
            />
          </Grid>

          <Grid item xs={ 12 }>
            <TextField
              name="state"
              type="text"
              variant="outlined"
              value={ stateEdit }
              onChange={ ({target: { value}}) => setstateEdit(value) }
              placeholder='Estado'
            />
          </Grid>

          <Grid container>
            <Grid item xs={ 12 } sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
              <Button
                variant="outlined"
                onClick={ onClick }
              >
                Atualizar profile
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
    </Box>
  )
}
