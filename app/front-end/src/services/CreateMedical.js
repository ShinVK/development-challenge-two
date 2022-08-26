import axios from 'axios';
import ENDPOINT from './endpoint';

async function createMedical(token, id, dataMedical) {
  try {
    const url = `${ENDPOINT}/medical/${id}`;
    const resp = await axios.post(url, dataMedical, {
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

export default createMedical;