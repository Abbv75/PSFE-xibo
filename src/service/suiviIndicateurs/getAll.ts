import axios from "axios";
import { SUIVI_INDICATEUR_T } from "../../types";

export default async () => {
    return [
        {
            "id_ref_ind": 2,
            "code_ref_ind": "001",
            "intitule": "Nombre d’aires protégées disposant des infrastructures d’accueil et de séjour des écogardes et équipements",
            "referentiel": 1,
            "projet": "2000001616",
            "donnees_annees": [
                {
                    "annee": 2024,
                    "cible": 2,
                    "realisation": 3
                },
                {
                    "annee": 2025,
                    "cible": 5,
                    "realisation": 2
                },
                {
                    "annee": 2026,
                    "cible": 8,
                    "realisation": 0
                },
                {
                    "annee": 2027,
                    "cible": 10,
                    "realisation": 0
                }
            ]
        },
        {
            "id_ref_ind": 1,
            "code_ref_ind": "003",
            "intitule": "Superficie de forêt domaniale sécurisée",
            "referentiel": 2,
            "projet": "2000001616",
            "donnees_annees": [
                {
                    "annee": 2024,
                    "cible": 500,
                    "realisation": 25000
                },
                {
                    "annee": 2025,
                    "cible": 700,
                    "realisation": 0
                },
                {
                    "annee": 2026,
                    "cible": 1000,
                    "realisation": 0
                },
                {
                    "annee": 2027,
                    "cible": 0,
                    "realisation": 0
                }
            ]
        }
    ]
    try {
        const { data } = await axios.get(`https://sise.fc-psfe.org/API_Suivi_Indicateurs.php`);
        return data as SUIVI_INDICATEUR_T[];
    } catch (error) {
        console.error(error);
        return false;
    }
}