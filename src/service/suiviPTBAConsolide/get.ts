import axios from "axios";

export interface VersionPtba {
  id_version_ptba: number;
  annee_ptba: number;
  version_ptba: string;
  libelle_complet: string;
}

export interface Taux {
  valeur: number;
  pourcentage: number;
}

export interface Statistiques {
  nombre_activites: number;
  taux_avancement: Taux;
  taux_indicateurs: Taux;
  taux_couts: Taux;
}

export interface SerieGraphique {
  name: string;
  data: number[];
}

export interface DonneesGraphique {
  categories: string[];
  series: SerieGraphique[];
}

export interface SUIVI_PTBA_CONSOLIDE_T {
  version_ptba: VersionPtba;
  statistiques: Statistiques;
  donnees_graphique: DonneesGraphique;
}


export default async () => {
    return {
        "version_ptba": {
            "id_version_ptba": 3,
            "annee_ptba": 2026,
            "version_ptba": "Initiale",
            "libelle_complet": "2026 Initiale"
        },
        "statistiques": {
            "nombre_activites": 66,
            "taux_avancement": {
                "valeur": 3.08,
                "pourcentage": 3.1
            },
            "taux_indicateurs": {
                "valeur": 0.76,
                "pourcentage": 0.8
            },
            "taux_couts": {
                "valeur": 0,
                "pourcentage": 0
            }
        },
        "donnees_graphique": {
            "categories": [
                ""
            ],
            "series": [
                {
                    "name": "Avancement",
                    "data": [3.1]
                },
                {
                    "name": "Indicateurs",
                    "data": [0.8]
                },
                {
                    "name": "Coûts",
                    "data": [0]
                }
            ]
        }
    }
    try {
        const { data } = await axios.get(`https://sise.fc-psfe.org/API_Suivi_PTBA_consolide.php`);
        return data as SUIVI_PTBA_CONSOLIDE_T;
    } catch (error) {
        console.error(error);
        return false;
    }
}