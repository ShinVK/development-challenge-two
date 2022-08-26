import axios from 'axios';
import ENDPOINT from './endpoint';

async function getAllMedicalData(token) {
  try {
    const url = `${ENDPOINT}/medical/all`;
    const resp = await axios.delete(url, {
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

export default getAllMedicalData;