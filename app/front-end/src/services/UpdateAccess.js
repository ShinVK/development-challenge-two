import axios from 'axios';
import ENDPOINT from './endpoint';

async function updateAccessAdmin(token, id, role) {
  try {
    const url = `${ENDPOINT}/admin/user/${id}`;
    const resp = await axios.put(url, role, {
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

export default updateAccessAdmin;