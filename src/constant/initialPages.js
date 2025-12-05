import PageAccueil from "../pages/PageAccueil";
import RealisationCumule from "../pages/RealisationCumule";
import RecapitulatifMarchesParCategorie from "../pages/RecapitulatifMarchesParCategorie";
import SuiviDesIndicateurs from "../pages/SuiviDesIndicateurs";
import SuiviPTBA from "../pages/SuiviPTBA";
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
        id: "RecapitulatifMarchesParCategorie",
        component: <RecapitulatifMarchesParCategorie />,
        duration: 100000,
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
    {
        id: "PTBA_ZIBO",
        component: <SuiviPTBA />,
        duration: 1000,
    },
];