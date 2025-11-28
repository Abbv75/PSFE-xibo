import { Box, LinearProgress, Sheet, Stack, Typography } from "@mui/joy";
import PageLooperContext from "../../providers/PageLooperContext";
import Header from "../Header";
import ActionZone from "./ActionZone";
import { usePageLooper } from "../../contexts/PageLooper";

const PageLooper = () => {
    const {
        pages,
        setPages,
        apiData,
        cacheMoyennes,
        isPlaying,
        setCurrentIndex,
        setIsPlaying,
        currentIndex,
        nextPage,
        timeLeft
    } = usePageLooper();

    if (!apiData.length) {
        return (
            <LinearProgress />
        )
    }

    return (
        <PageLooperContext.Provider value={{
            pages,
            setPages,
            setCurrentIndex,
            cacheMoyennes,
            apiData,
            isPlaying,
            setIsPlaying,
            nextPage
        }}>
            {/* Decorations */}
            <Box sx={{ position: "fixed", top: '-14vw', right: '-8vw', width: '25vw', height: '25vw', borderRadius: "50%", background: "linear-gradient(135deg, #4caf50, #ff9800)", zIndex: -1 }} />
            <Box sx={{ position: "fixed", bottom: '-16vw', left: '1vw', width: '25vw', height: '25vw', borderRadius: '50%', background: "linear-gradient(45deg, #0e160cff, #06aa0eff)", zIndex: -1 }} />

            {/* Timer + page info */}
            <Sheet
                variant="soft"
                sx={{ position: "fixed", top: pages[currentIndex].id != 'accueil' ? '5vw' : '1vw', right: '1vw', px: 2, py: 1, borderRadius: "md", boxShadow: "sm", zIndex: 1000 }}
            >
                <Typography level="body-lg" fontWeight="lg" fontSize={'1vw'}>
                    ⏱ {timeLeft}s — Page {currentIndex + 1} / {pages.length}
                </Typography>
            </Sheet>

            <ActionZone />

            {/* Affichage de la page courante */}
            <Stack
                width={'100%'}
                // gap={'1vw'}
                height={'100vh'}
            >
                {pages[currentIndex].id != 'accueil' && (<Header />)}

                {pages[currentIndex]?.component}
            </Stack>
        </PageLooperContext.Provider>
    );
};

export default PageLooper;
