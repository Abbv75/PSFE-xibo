import axios from "axios";
import { API_mobile_activite_T } from "../../types";


export default async () => {
  try {
    const { data } = await axios.get(`https://sise.fc-psfe.org/API_mobile_action.php`);
    return data.data.activites as API_mobile_activite_T[];
  } catch (error) {
    console.error(error);
    return false;
  }
}