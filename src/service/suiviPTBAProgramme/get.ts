import axios from "axios";

interface VersionPtba {
  id_version_ptba: number;
  annee_ptba: number;
  version_ptba: string;
  libelle_complet: string;
}

interface Composante {
  code: string;
  intitule: string;
  libelle_complet: string;
  nombre_activites: number;
  taux_avancement: number;
  taux_indicateurs: number;
  taux_couts: number;
}

interface SerieGraphique {
  name: string;
  data: number[];
}

interface DonneesGraphique {
  categories: string[];
  series: SerieGraphique[];
}

export interface SUIVI_PTBA_PROGRAMME_T {
  version_ptba: VersionPtba;
  composantes: Composante[];
  donnees_graphique: DonneesGraphique;
}


export default async () => {
    try {
        const { data } = await axios.get(`https://sise.fc-psfe.org/API_Suivi_PTBA_rogramme.php`);
        return data as SUIVI_PTBA_PROGRAMME_T;
    } catch (error) {
        console.error(error);
        return false;
    }
}