import { Sheet, Typography } from "@mui/joy";
import { usePageLooper } from "../../contexts/PageLooper";

export default () => {
    const {
        pages,
        currentIndex,
        timeLeft
    } = usePageLooper();

    return (
        <Sheet
            variant="soft"
            sx={{ position: "fixed", top: pages[currentIndex].id != 'accueil' ? '5vw' : '1vw', right: '1vw', px: 2, py: 1, borderRadius: "md", boxShadow: "sm", zIndex: 1000 }}
        >
            <Typography level="body-lg" fontWeight="lg" fontSize={'1vw'}>
                ⏱ {timeLeft}s — Page {currentIndex + 1} / {pages.length}
            </Typography>
        </Sheet>
    )
}
