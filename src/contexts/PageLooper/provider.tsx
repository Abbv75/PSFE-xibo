import { Context } from './context';
import contextType from './contextType';
import PageLooper from '../../components/PageLooper';
import { useState, useRef, useEffect } from 'react';
import INITIAL_PAGES from '../../constant/initialPages';
import getAllValidation from '../../service/prixMarche/getAllValidation';
import { PAGE_T, GET_ALL_VALIDATION_T, SUIVI_INDICATEUR_T } from '../../types';
import { getAllSuiviIndicateurs } from '../../service/suiviIndicateurs';
import { getSuiviPTBAConsolide } from '../../service/suiviPTBAConsolide';
import { SUIVI_PTBA_CONSOLIDE_T } from '../../service/suiviPTBAConsolide/get';

export default () => {
    const [pages, setPages] = useState<PAGE_T[]>(INITIAL_PAGES);

    const [suiviIndicateurData, setsuiviIndicateurData] = useState<SUIVI_INDICATEUR_T[]>([]);
    const [suiviPTBAConsolide, setsuiviPTBAConsolide] = useState<SUIVI_PTBA_CONSOLIDE_T | undefined>()

    const [apiData, setapiData] = useState<GET_ALL_VALIDATION_T[]>([]);

    const [cacheMoyennes] = useState<{ [produit: string]: any }>({});

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [timeLeft, setTimeLeft] = useState(pages[0].duration / 1000);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextPage = () => setCurrentIndex((prev) => (prev + 1) % pages.length);

    const loadData = () => {
        getAllValidation().then(data => data && setapiData(data));
        getAllSuiviIndicateurs().then(res => res && setsuiviIndicateurData(res));
        getSuiviPTBAConsolide().then(res => res && setsuiviPTBAConsolide(res));
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
        apiData,
        cacheMoyennes,
        currentIndex,
        setCurrentIndex,
        isPlaying,
        setIsPlaying,
        nextPage,
        timeLeft,
        suiviIndicateurData,
        suiviPTBAConsolide
    }

    return (
        <Context.Provider value={value}>
            <PageLooper />
        </Context.Provider>
    )
}