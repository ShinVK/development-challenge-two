import axios from 'axios';
import ENDPOINT from './endpoint';

async function updatePersonalData(token, id, personalData) {
  try {
    const url = `${ENDPOINT}/personal/${id}`;
    const resp = await axios.put(url, personalData, {
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

export default updatePersonalData;