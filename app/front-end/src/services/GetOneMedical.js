import axios from 'axios';
import ENDPOINT from './endpoint';

async function getOneMedical(token, id, role) {
  try {
    const url = `${ENDPOINT}/${role}/user/${id}`;
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

export default getOneMedical;