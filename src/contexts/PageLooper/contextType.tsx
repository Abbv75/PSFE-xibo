import { PTBA_ZIBO_T } from "../../service/ptba_zibo/get";
import { REALISATION_CUMULE_T } from "../../service/realisationCumule/get";
import { SUIVI_PTBA_CONSOLIDE_T } from "../../service/suiviPTBAConsolide/get";
import { SUIVI_PTBA_PROGRAMME_T } from "../../service/suiviPTBAProgramme/get";
import { API_mobile_activite_T, API_MOBILE_PPM_T, GET_ALL_VALIDATION_T, PAGE_T, SUIVI_INDICATEUR_T, USE_STATE_T } from "../../types";

export default interface contextType {
    pages: PAGE_T[],
    setPages: USE_STATE_T<PAGE_T[]>,
    apiData: GET_ALL_VALIDATION_T[],
    cacheMoyennes: { [produit: string]: any },
    currentIndex: number,
    setCurrentIndex: USE_STATE_T<number>,
    isPlaying: boolean,
    setIsPlaying: USE_STATE_T<boolean>,
    nextPage: () => any;
    timeLeft: number,
    suiviIndicateurData: SUIVI_INDICATEUR_T[],
    suiviPTBAConsolide?: SUIVI_PTBA_CONSOLIDE_T,
    suiviPTBAProgramme?: SUIVI_PTBA_PROGRAMME_T,
    realisationCumuleData?: REALISATION_CUMULE_T,
    ptba_ziboData: PTBA_ZIBO_T[],
    API_mobile_ppmData?: API_MOBILE_PPM_T,
    API_mobile_activiteData: API_mobile_activite_T[]
    API_mobile_actionData: API_mobile_activite_T[]
    API_mobile_programmeData: API_mobile_activite_T[]
}