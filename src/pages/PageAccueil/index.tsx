import React from "react";
import { Stack, Typography, Box } from "@mui/joy";
import { IMAGES, PARTENAIRE_IMAMGE } from "../../constant";
import { CardMedia } from "@mui/material";
import ChargeurDePage from "./ChargeurDePage";
import Marquee from "react-fast-marquee";

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
            <ChargeurDePage />

            <Stack direction="row" gap={'1vw'} justifyContent="center" alignContent={'center'} flexWrap="wrap">
                {[IMAGES.logo, IMAGES.minister1, IMAGES.minister2].map(value => (
                    <CardMedia
                        component="img"
                        src={value}
                        sx={{ width: '10vw', height: "auto", objectFit: 'contain' }}
                    />
                ))}
            </Stack>

            <Typography level="h2" fontSize="3vw" fontWeight="lg">
                PSFE Cameroun
            </Typography>
            <Typography level="h4" fontSize="2.5vw" fontWeight="md">
                Programme sectoriel forêts et environnement du Cameroun
            </Typography>

            {/* Liste des partenaires */}
            <Box sx={{ mt: 5 }}>
                <Typography level="h4" fontSize="2vw" fontWeight="md" mb={2}>
                    Nos différents Partenaires
                </Typography>

                <Marquee>

                    <Stack direction="row" spacing={4} justifyContent="center" alignContent={'center'} flexWrap="wrap">
                        {PARTENAIRE_IMAMGE.map((partenaire, index) => (
                            <CardMedia
                                component="img"
                                src={partenaire}
                                alt={`Partenaire ${index + 1}`}
                                key={index}
                                sx={{ width: '7vw', height: "auto", objectFit: 'contain' }}
                            />
                        ))}
                    </Stack>
                </Marquee>

            </Box>
        </Stack>
    );
};

export default PageAccueil;
