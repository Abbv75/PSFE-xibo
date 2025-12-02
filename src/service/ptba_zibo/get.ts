import axios from "axios";

interface ActivitePTBA {
  code_activite_ptba: string;
  couleur_retard: string;
  derniere_date_fin: string;
  derniere_date_reelle: string;
  id_ptba: string;
  intitule_activite_ptba: string;
  observation: string;
  responsable: string;
  statut_retard: string;
  taux_decaissement: string;
  total_prop: string;
}

export interface PTBA_ZIBO_T {
  activites: ActivitePTBA[],
  responsable: string
}

export default async () => {
  try {
    const { data } = await axios.get(`https://suivi.fc-psfe.org/api/ptba_zibo.php`);
    return data.responsables as PTBA_ZIBO_T[];
  } catch (error) {
    console.error(error);
    return false;
  }
}