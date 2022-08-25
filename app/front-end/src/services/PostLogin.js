import axios from 'axios';
import ENDPOINT from './endpoint';

async function Postlogin(loginValues) {
  try {
    const url = `${ENDPOINT}/login`;
    const resp = await axios.post(url, loginValues);
    const { data } = resp;
    console.log(data);
    return data
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default Postlogin;