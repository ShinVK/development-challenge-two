import axios from 'axios';
import ENDPOINT from './endpoint';

async function updatePasswordUser(token, id, passwords) {
  try {
    const url = `${ENDPOINT}/register/${id}`;
    const resp = await axios.put(url, passwords, {
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

export default updatePasswordUser;