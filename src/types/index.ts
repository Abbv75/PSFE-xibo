import { Dispatch, SetStateAction } from "react";

export type USE_STATE_T<T = any> = Dispatch<SetStateAction<T>>

export type LOADING_STATE_T = "En cours de chargement."
  | "Chargement finit."
  | "Chargement échoué."
  | "Chargememnt reussi"
  | "En attente"
  | null;

export interface GET_ALL_VALIDATION_T {
  idValidation: number;
  numFiche: string;
  region: string;
  departement: string;
  arrondissement: string;
  commune: string;
  localite: string;
  marche: string;
  categorie: string;
  sousCategorie: string;
  produit: string;
  qualiteProduit: string | null;
  photo: string;
  dateCollecte: string;
  dateEnregistrement: string;
  dateValidation: string | null;
  prix: string;
  variete: string | null;
  niveauApprovisionnement: string | null;
  enqueteur: string;
  numeroEnqueteur: string;
  superviseur: string;
  precedent?: GET_ALL_VALIDATION_T;
  codeProduit: string
};

export interface PAGE_T {
  id: string;
  component: React.ReactNode;
  duration: number;
  preload?: boolean;
};

export interface FILIERE_T {
  id_filiere: number;
  code_filiere: string;
  libelle: string;
  description: string;
  date_ajout: string;
  date_modif: string | null;
  statut: boolean | null;
}

export interface CATEGORIE_PRODUIT_T {
  id_categorie_produit: number;
  code_categorie: string;
  libelle: string;
  description: string;
  date_ajout: string;
  date_modif: string | null;
  filiere: FILIERE_T;
}

export interface FORME_PRODUIT_T {
  id_forme_produit: number;
  code_forme: string;
  libelle: string;
  description: string;
  date_ajout: string;
  date_modif: string | null;
}

export interface PRODUIT_T {
  id_produit: number;
  code_produit: string;
  nom_produit: string;
  image: string;
  description: string;
  date_ajout: string;
  date_modif: string | null;
  statut: boolean;
  categorie_produit: CATEGORIE_PRODUIT_T;
  forme_produit: FORME_PRODUIT_T;
}



export interface SUIVI_INDICATEUR_DONNEE_ANNEE_T {
  annee: number;
  cible: number;
  realisation: number;
}

export interface SUIVI_INDICATEUR_T {
  id_ref_ind: number;
  code_ref_ind: string;
  intitule: string;
  referentiel: number;
  projet: string;
  donnees_annees: SUIVI_INDICATEUR_DONNEE_ANNEE_T[];
}

export interface API_MOBILE_PPM_T {
  versions: {
    id_version: number;
    annee: number;
    date_version: string;
    numero_version: string;
  }[];

  categories: {
    code: string;
    nom: string;
    versions: {
      [versionId: string]: {
        id_version: string;
        info_version: {
          id_version: number;
          annee: number;
          date_version: string;
          numero_version: string;
        };
        nombre_marches: number;
        cout_total_usd: number;
        montant_realise: number;
        taux_realisation: number;
        cout_total_usd_formatted: string;
        montant_realise_formatted: string;
        taux_realisation_formatted: string;
      };
    };
    totaux_globaux: {
      nombre_marches: number;
      cout_total_usd: number;
      montant_realise: number;
    };
  }[];

  totaux_par_version: {
    [versionId: string]: {
      nombre_marches: number;
      cout_total_usd: number;
      montant_realise: number;
      taux_realisation: number;
      cout_total_usd_formatted: string;
      montant_realise_formatted: string;
      taux_realisation_formatted: string;
    };
  };

  totaux_globaux: {
    nombre_marches: number;
    cout_total_usd: number;
    montant_realise: number;
    taux_realisation: number;
    cout_total_usd_formatted: string;
    montant_realise_formatted: string;
    taux_realisation_formatted: string;
  };
}

export interface transformPPMDataForVersion_T {
  version: {
    id: number;
    numero: string;
    annee: number;
    date: string;
  };

  tableauCategories: Array<{
    code: string;
    nom: string;
    nombre_marches: number;
    cout_total_usd: number;
    montant_realise: number;
    taux_realisation: number;
  }>;

  donutData: Array<{
    name: string;
    value: number;
  }>;
}

export interface API_mobile_activite_T {
    code: string;
    libelle: string;
    etapes?: string;  // parfois "-"
    etapes_valeur?: number;
    indicateurs?: string; // parfois "-"
    indicateurs_valeur?: number;
    pourcentage_decaissement: string;
    pourcentage_decaissement_valeur: number;
    pourcentage_engagement: string;
    pourcentage_engagement_valeur: number;
    has_engagement_issue: boolean;
    cout_prevu: number;
    cout_realise: number;
    cout_engage: number;
}