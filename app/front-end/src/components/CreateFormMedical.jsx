import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useContext } from 'react'
import Context from '../context/Context'
import createMedical from '../services/CreateMedical';

export default function CreateFormMedical() {
  const {
    token,
    idEdit,
  } = useContext(Context);

  const [weightEdit, setweightEdit] = useState('');
  const [heightEdit, setheightEdit] = useState('');
  const [obsEdit, setobsEdit] = useState('');

  const [errorMsg, seterrorMsg] = useState(false);
  const [msg, setMsg] = useState('Falha na operação');

  const onClick = async () => {
    // requisição PostLogin ------
    const personalData = {
      weight: Number(weightEdit),
      height: Number(heightEdit),
      observations: obsEdit,
    }

    const data= await createMedical(token, idEdit, personalData);
   
    if (!data.id) {
      const { response: { data: { message }}} = data;
      setMsg(message);
      return seterrorMsg(true)
    };
    


    seterrorMsg(true);
    return setMsg('Cadastro realizado');
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
              type="number"
              variant="outlined"
              value={ weightEdit }
              onChange={ ({target: { value}}) => setweightEdit(value) }
              placeholder='Peso em kg (inteiros)'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name="lastname"
              type="number"
              variant="outlined"
              value={ heightEdit }
              onChange={ ({target: { value}}) => setheightEdit(value) }
              placeholder='Altura em cm'
            />
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
              name="email"
              type="text"
              multiline
              maxRows={4}
              variant="outlined"
              value={ obsEdit }
              onChange={ ({target: { value}}) => setobsEdit(value) }
              placeholder='Observações médicas'
            />
          </Grid>

          <Grid container>
            <Grid item xs={ 12 } sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
              <Button
                variant="outlined"
                onClick={ onClick }
              >
                Cadastrar medical profile
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
