import PageAccueil from "../pages/PageAccueil";
import PrixCategorieParRegion from "../pages/PrixCategorieParRegion";
import PrixMoyenProduitParRegion from "../pages/PrixMoyenProduitParRegion";
import RealisationCumule from "../pages/RealisationCumule";
import SuiviDesIndicateurs from "../pages/SuiviDesIndicateurs";
import SuiviPTBAConsolide from "../pages/SuiviPTBAConsolide";
import SuiviPTBAProgramme from "../pages/SuiviPTBAProgramme";

export default [
    {
        id: "accueil",
        component: <PageAccueil />,
        duration: 30000,
    },
    {
        id: "SuiviDesIndicateurs",
        component: <SuiviDesIndicateurs />,
        duration: 1000,
    },
    {
        id: "SuiviPTBAProgramme",
        component: <SuiviPTBAProgramme />,
        duration: 30000,
    },
    {
        id: "RealisationCumule",
        component: <RealisationCumule />,
        duration: 30000,
    },
    {
        id: "SuivitPTBAConsolide",
        component: <SuiviPTBAConsolide />,
        duration: 30000,
    },
    // {
    //     id: "PrixMoyenProduitParRegion Oignon bulbe",
    //     component: <PrixMoyenProduitParRegion produit="Oignon bulbe" />,
    //     duration: 10000,
    // },
    // {
    //     id: "PrixMoyenProduitParRegion Oignon Local",
    //     component: <PrixMoyenProduitParRegion produit="Oignon Local" />,
    //     duration: 10000,
    // },
    // {
    //     id: "PrixCategorieParRegion",
    //     component: <PrixCategorieParRegion />,
    //     duration: 10000,
    // },
];