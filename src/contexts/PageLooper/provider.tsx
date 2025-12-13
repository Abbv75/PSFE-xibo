import { Context } from './context';
import contextType from './contextType';
import PageLooper from '../../components/PageLooper';
import { useState, useRef, useEffect } from 'react';
import INITIAL_PAGES from '../../constant/initialPages';
import { PAGE_T, SUIVI_INDICATEUR_T, API_MOBILE_PPM_T, API_mobile_activite_T } from '../../types';
import { getAllSuiviIndicateurs } from '../../service/suiviIndicateurs';
import { getSuiviPTBAConsolide } from '../../service/suiviPTBAConsolide';
import { SUIVI_PTBA_CONSOLIDE_T } from '../../service/suiviPTBAConsolide/get';
import { getSuiviPTBAProgramme } from '../../service/suiviPTBAProgramme';
import { SUIVI_PTBA_PROGRAMME_T } from '../../service/suiviPTBAProgramme/get';
import { getRealisationCumule } from '../../service/realisationCumule';
import { REALISATION_CUMULE_T } from '../../service/realisationCumule/get';
import { getPtba_zibo } from '../../service/ptba_zibo';
import { PTBA_ZIBO_T } from '../../service/ptba_zibo/get';
import { getAPI_mobile_action, getAPI_mobile_activite, getAPI_mobile_ppm, getAPI_mobile_programme } from '../../service/be_repport_api';

export default () => {
    const [pages, setPages] = useState<PAGE_T[]>(INITIAL_PAGES);

    const [suiviIndicateurData, setsuiviIndicateurData] = useState<SUIVI_INDICATEUR_T[]>([]);
    const [suiviPTBAConsolide, setsuiviPTBAConsolide] = useState<SUIVI_PTBA_CONSOLIDE_T | undefined>();
    const [suiviPTBAProgramme, setsuiviPTBAProgramme] = useState<SUIVI_PTBA_PROGRAMME_T | undefined>();
    const [realisationCumuleData, setrealisationCumuleData] = useState<REALISATION_CUMULE_T | undefined>();
    const [ptba_ziboData, setptba_ziboData] = useState<PTBA_ZIBO_T[]>([]);
    const [API_mobile_ppmData, setAPI_mobile_ppmData] = useState<API_MOBILE_PPM_T | undefined>(undefined);
    const [API_mobile_activiteData, setAPI_mobile_activiteData] = useState<API_mobile_activite_T[]>([])
    const [API_mobile_actionData, setAPI_mobile_actionData] = useState<API_mobile_activite_T[]>([])
    const [API_mobile_programmeData, setAPI_mobile_programmeData] = useState<API_mobile_activite_T[]>([])

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [timeLeft, setTimeLeft] = useState(pages[0].duration / 1000);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextPage = () => setCurrentIndex((prev) => (prev + 1) % pages.length);

    const loadData = () => {
        getAllSuiviIndicateurs().then(res => res && setsuiviIndicateurData(res));
        getSuiviPTBAConsolide().then(res => res && setsuiviPTBAConsolide(res));
        getSuiviPTBAProgramme().then(res => res && setsuiviPTBAProgramme(res));
        getRealisationCumule().then(res => res && setrealisationCumuleData(res));
        getPtba_zibo().then(res => res && setptba_ziboData(res));
        getAPI_mobile_ppm().then(res => res && setAPI_mobile_ppmData(res));
        getAPI_mobile_activite().then(res => res && setAPI_mobile_activiteData(res));
        getAPI_mobile_action().then(res => res && setAPI_mobile_actionData(res));
        getAPI_mobile_programme().then(res => res && setAPI_mobile_programmeData(res));
    }

    useEffect(() => {
        if (!isPlaying || !pages[currentIndex]) return;

        const duration = pages[currentIndex].duration;
        setTimeLeft(duration / 1000);

        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    nextPage();
                    return duration / 1000;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [currentIndex, isPlaying, pages]);


    useEffect(() => {
        loadData()
    }, []);

    // --- Context value
    const value: contextType = {
        pages,
        setPages,
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        nextPage,
        timeLeft,
        suiviIndicateurData,
        suiviPTBAConsolide,
        suiviPTBAProgramme,
        realisationCumuleData,
        ptba_ziboData,
        API_mobile_ppmData,
        API_mobile_activiteData,
        API_mobile_actionData,
        API_mobile_programmeData,
    }

    return (
        <Context.Provider value={value}>
            <PageLooper />
        </Context.Provider>
    )
}