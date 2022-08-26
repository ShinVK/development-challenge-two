import axios from 'axios';
import ENDPOINT from './endpoint';

async function createPersonalData(token, id, loginValues) {
  try {
    const url = `${ENDPOINT}/personal/${id}`;
    const resp = await axios.post(url, loginValues, {
      headers: {
        authorization: token
      }
    });
    const { data } = resp;
    return data
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default createPersonalData;