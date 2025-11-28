import axios from "axios";

export interface VersionPtba {
  id_version_ptba: number;
  annee_ptba: number;
  version_ptba: string;
  libelle_complet: string;
}

export interface Composante {
  code: string;
  intitule: string;
  libelle_complet: string;
  nombre_activites: number;
  taux_avancement: number;
  taux_indicateurs: number;
  taux_couts: number;
}

export interface SerieGraphique {
  name: string;
  data: number[];
}

export interface DonneesGraphique {
  categories: string[];
  series: SerieGraphique[];
}

export interface SUIVI_PTBA_PROGRAMME_T {
  version_ptba: VersionPtba;
  composantes: Composante[];
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
        "composantes": [
            {
                "code": "01",
                "intitule": "AMENAGEMENT & RENOUVELLEMENT DE LA RESSOURCE FORESTIERE",
                "libelle_complet": "Programme 01",
                "nombre_activites": 9,
                "taux_avancement": 22.6,
                "taux_indicateurs": 5.6,
                "taux_couts": 0
            },
            {
                "code": "02",
                "intitule": "SECURISAT° & VALORISAT° DES RESSOURCES FAUNIQ & AIRES PROTEG",
                "libelle_complet": "Programme 02",
                "nombre_activites": 18,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "03",
                "intitule": "VALORISAT° DES RESSOURC FOREST LIGNEUSES & NON LIGNEUSES",
                "libelle_complet": "Programme 03",
                "nombre_activites": 0,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "04",
                "intitule": "PILOTAGE, GEST° INSTITUTIONNELLE & GOUVERNANCE DU S/SECTEUR",
                "libelle_complet": "Programme 04",
                "nombre_activites": 2,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "05",
                "intitule": "GEST° ENVIRONNEMENTALE DES ACTIVITES FORESTIERES",
                "libelle_complet": "Programme 05",
                "nombre_activites": 4,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "06",
                "intitule": "AMENAGEMENT DU TERRITOIRE",
                "libelle_complet": "Programme 06",
                "nombre_activites": 6,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "07",
                "intitule": "DOTATION POUR PLANIFICATION, MISE EN OEUVRE, S&E",
                "libelle_complet": "Programme 07",
                "nombre_activites": 0,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "08",
                "intitule": "AFR 100 Programme de restauration des paysages forestiers au Nord et à l'Extrême Nord",
                "libelle_complet": "Programme 08",
                "nombre_activites": 6,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "09",
                "intitule": "FONDS DE CONTREPARTIE DE L'ETAT",
                "libelle_complet": "Programme 09",
                "nombre_activites": 0,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            },
            {
                "code": "99",
                "intitule": "DOTATION POUR IMPREVUS",
                "libelle_complet": "Programme 99",
                "nombre_activites": 0,
                "taux_avancement": 0,
                "taux_indicateurs": 0,
                "taux_couts": 0
            }
        ],
        "donnees_graphique": {
            "categories": [
                "Programme 01",
                "Programme 02",
                "Programme 03",
                "Programme 04",
                "Programme 05",
                "Programme 06",
                "Programme 07",
                "Programme 08",
                "Programme 09",
                "Programme 99"
            ],
            "series": [
                {
                    "name": "Avancement",
                    "data": [22.6, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    "name": "Indicateurs",
                    "data": [5.6, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    "name": "Coûts",
                    "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                }
            ]
        }
    }

    try {
        const { data } = await axios.get(`https://sise.fc-psfe.org/API_Suivi_PTBA_rogramme.php`);
        return data as SUIVI_PTBA_PROGRAMME_T;
    } catch (error) {
        console.error(error);
        return false;
    }
}