import React from "react";
import { Stack, Typography } from "@mui/joy";
import { IMAGES } from "../../constant";
import { CardMedia } from "@mui/material";
import { green } from "@mui/material/colors";

const PageAccueil: React.FC = () => {
    return (
        <Stack
            sx={{
                gap: 4,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}
            height="100vh"
        >

            <Stack direction="row" gap={'1vw'} justifyContent="center" alignContent={'center'} flexWrap="wrap">
                {[IMAGES.logo, IMAGES.minister1, IMAGES.minister2].map(value => (
                    <CardMedia
                        component="img"
                        src={value}
                        sx={{ width: '10vw', height: "auto", objectFit: 'contain' }}
                    />
                ))}
            </Stack>

            <Typography level="h2" fontSize="3vw" fontWeight="lg" textColor={green[50]}>
               Fonds Commun PSFE
            </Typography>
            <Typography level="h4" fontSize="2.5vw" fontWeight="md" textColor={green[50]}>
                Programme sectoriel forêts et environnement du Cameroun
            </Typography>
        </Stack>
    );
};

export default PageAccueil;
