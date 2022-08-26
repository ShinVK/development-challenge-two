import axios from 'axios';
import ENDPOINT from './endpoint';

async function postlogin(loginValues) {
  try {
    const url = `${ENDPOINT}/login`;
    const resp = await axios.post(url, loginValues);
    const { data } = resp;
    return data
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default postlogin;