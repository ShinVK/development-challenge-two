import axios from 'axios';
import ENDPOINT from './endpoint';

async function updateMedicalData(token, id, MedicalData) {
  try {
    const url = `${ENDPOINT}/medical/${id}`;
    const resp = await axios.put(url, MedicalData, {
      headers: {
        authorization: token,
      }
    });
    const { data } = resp;
    return data
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default updateMedicalData;