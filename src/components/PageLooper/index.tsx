import { LinearProgress, Sheet, Stack, Typography } from "@mui/joy";
import Header from "../Header";
import ActionZone from "./ActionZone";
import { usePageLooper } from "../../contexts/PageLooper";
import { useEffect, useMemo, useState } from "react";
import Background from "./Background";
import Timer from "./Timer";

const PageLooper = () => {
    const {
        pages,
        currentIndex,
    } = usePageLooper();

    const [showLoader, setshowLoader] = useState(true);

    const currentPage = useMemo(() => pages[currentIndex], [pages, currentIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setshowLoader(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    if (showLoader) {
        return (
            <LinearProgress />
        )
    }

    return (
        <>
            {/* background */}
            <Background />

            {/* Timer + page info */}
            <Timer />

            <ActionZone />

            {/* Affichage de la page courante */}
            <Stack
                width={'100%'}
                height={'100vh'}
            >
                {currentPage.id != 'accueil' && (<Header />)}

                {currentPage?.component}
            </Stack>
        </>
    );
};

export default PageLooper;
