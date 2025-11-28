import { GET_ALL_VALIDATION_T, PAGE_T, SUIVI_INDICATEUR_T, USE_STATE_T } from "../../types";

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
    timeLeft : number,
    suiviIndicateurData : SUIVI_INDICATEUR_T[]

}