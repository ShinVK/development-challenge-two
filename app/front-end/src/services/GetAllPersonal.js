import axios from 'axios';
import ENDPOINT from './endpoint';

async function getAllPersonalData(token) {
  try {
    const url = `${ENDPOINT}/personal`;
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

export default getAllPersonalData;