import axios from 'axios';
import ENDPOINT from './endpoint';

async function getOnePersonal(token, id) {
  try {
    const url = `${ENDPOINT}/personal/${id}`;
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

export default getOnePersonal;