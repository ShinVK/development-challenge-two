import axios from 'axios';
import ENDPOINT from './endpoint';

async function getAllPersonalDataMedCloud(token) {
  try {
    const url = `${ENDPOINT}/medical/customers`;
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

export default getAllPersonalDataMedCloud;