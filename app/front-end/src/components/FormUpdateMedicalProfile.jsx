import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react'
import Context from '../context/Context'
import getOneMedical from '../services/GetOneMedical';
import updateMedicalData from '../services/UpdateMedicalProfile';

export default function FormUpdateMedicalProfile() {
  const {
    token,
    idEdit,
  } = useContext(Context);

  const [weightEdit, setweightEdit] = useState('');
  const [heightEdit, setheightEdit] = useState('');
  const [obsEdit, setobsEdit] = useState('');

  const [errorMsg, seterrorMsg] = useState(false);
  const [msg, setMsg] = useState('Falha na operação');

  useEffect(() => {
    async function fetchOnePersonal() {
      const data = await getOneMedical(token, idEdit, 'medical');
      const { weight, height, observations } = data;
      setweightEdit(weight);
      setheightEdit(height);
      setobsEdit(observations);
    }
    fetchOnePersonal();
  }, [idEdit, token])
  
  const onClick = async () => {
    // requisição PostLogin ------
    const personalData = {
      weight: Number(weightEdit),
      height: Number(heightEdit),
      observations: obsEdit,
    }

    const data= await updateMedicalData(token, idEdit, personalData);
   
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
                Atualizar medical profile
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
