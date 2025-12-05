import axios from "axios";
import { API_MOBILE_PPM_T } from "../../types";


export default async () => {
  try {
    const { data } = await axios.get(`https://sise.fc-psfe.org/API_mobile_ppm.php`);
    return data.data as API_MOBILE_PPM_T;
  } catch (error) {
    console.error(error);
    return false;
  }
}