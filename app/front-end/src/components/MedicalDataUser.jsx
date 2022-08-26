import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useContext } from 'react';
import Context from '../context/Context';
import getOneMedicalPersonal from '../services/GetOneMedicalUser';

export default function MedicalDataProfile() {
  const { token, id } = useContext(Context);

  const [weightEdit, setweightEdit] = useState('');
  const [heightEdit, setheightEdit] = useState('');
  const [obsEdit, setobsEdit] = useState('');

  useEffect(() => {
    async function fetchOnePersonal() {
      const data = await getOneMedicalPersonal(token, id);
      const { weight, height, observations } = data;
      setweightEdit(weight);
      setheightEdit(height);
      setobsEdit(observations);
    }
    fetchOnePersonal();
  }, [id, token]);

  return (
    <Box sx={{ p: 5 }}>
      { weightEdit ? 
 
        <Box sx={{ p: 5 }}>
        <Typography>Dados Médicos</Typography>
          <Typography sx={{ mb: 2 }}>{`Peso: ${weightEdit} kgs`}</Typography>
          <Typography sx={{ mb: 2 }}>{`Altura: ${heightEdit} cm`}</Typography>
          <Typography sx={{ mb: 2 }}>{`Observações: ${obsEdit}`}</Typography>
        </Box>
      : 
      <Typography>
        Ops você ainda não possui dados médicos cadastrados
      </Typography>
    }
    </Box>
  );
}
