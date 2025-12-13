import { Box, Card, CardCover } from "@mui/joy";
import { IMAGES } from "../../constant";

export default () => {
    return (
        <Card
            sx={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
                zIndex: -1,
                p: 0
            }}
        >
            <CardCover
                component={'img'}
                src={IMAGES.backgroundForet}
            />
            <CardCover>
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(rgba(0,60,30,0.75), rgba(0,60,30,0.75))",
                    }}
                />
            </CardCover>
        </Card>
    )
}
