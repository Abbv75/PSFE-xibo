import axios from "axios";
import { SUIVI_INDICATEUR_T } from "../../types";

export default async () => {
    try {
        const { data } = await axios.get(`https://sise.fc-psfe.org/API_Suivi_Indicateurs.php`);
        return data as SUIVI_INDICATEUR_T[];
    } catch (error) {
        console.error(error);
        return false;
    }
}