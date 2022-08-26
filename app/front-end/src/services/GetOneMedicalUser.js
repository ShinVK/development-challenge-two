import axios from 'axios';
import ENDPOINT from './endpoint';

async function getOneMedicalPersonal(token, id) {
  try {
    const url = `${ENDPOINT}/personal/medical/${id}`;
    const resp = await axios.get(url, {
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

export default getOneMedicalPersonal;