import axios from 'axios';
import ENDPOINT from './endpoint';

async function deleteMedical(token, id) {
  try {
    const url = `${ENDPOINT}/medical/${id}`;
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

export default deleteMedical;