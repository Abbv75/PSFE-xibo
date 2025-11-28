import axios from "axios";

interface IndicateurSuivi {
  id_ref_ind: number;
  code_ref_ind: string;
  intitule_ref_ind: string;
  referentiel_id: number;
  referentiel_nom: string;
  unite: string;
  cible_totale: number;
  total_realise: number;
  taux_realisation: number;
  couleur_taux: string; // éventuellement: "info" | "success" | "warning" | "danger"
  date_dernier_suivi: string; // format "YYYY-MM-DD HH:mm:ss"
  valeur_dernier_suivi: number;
  structure: string;
}

interface TotauxIndicateurs {
  total_cible: number;
  total_realise: number;
  taux_global: number;
}

export interface REALISATION_CUMULE_T {
  indicateurs: IndicateurSuivi[];
  totaux: TotauxIndicateurs;
  nombre_indicateurs: number;
}


export default async () => {
  try {
    const { data } = await axios.get(`https://sise.fc-psfe.org/API_Realisations_cumulees.php`);
    return data as REALISATION_CUMULE_T;
  } catch (error) {
    console.error(error);
    return false;
  }
}