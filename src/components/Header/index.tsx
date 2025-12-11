import React from "react";
import { Box, Stack, Typography } from "@mui/joy";
import { IMAGES } from "../../constant";

const Header: React.FC = () => {
    return (
        <Stack
            px={'2vw'}
            py={'0.5vw'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bgcolor={'white'}
            sx={{
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
        >
            {/* Logo projet */}
            <Stack gap={1} direction={'row'} >
                {[IMAGES.logo, IMAGES.minister1, IMAGES.minister2].map((logo, index) => (
                    <Box
                        component="img"
                        src={logo}
                        alt=""
                        sx={{ height: '3vw', width: "auto" }}
                    />
                ))}
            </Stack>


            {/* Titre du projet */}
            <Stack spacing={0} sx={{ textAlign: "center" }}>
                <Typography level="h4" fontWeight="lg" fontSize={'1.2vw'}>
                    PSFE Cameroun
                </Typography>
                <Typography level="body-md" fontWeight="md" fontSize={'1vw'}>
                    Programme sectoriel forêts et environnement du Cameroun
                </Typography>
            </Stack>

            {/* Logos bailleurs / partenaires */}
            <Stack direction="row" spacing={2}>
                <Box component="img" src={IMAGES.logo_padfa} alt="Bailleur 1" sx={{ height: '3vw', width: "auto" }} />
                {/* <Box component="img" src="/assets/bailleur2.png" alt="Bailleur 2" sx={{ height: 50, width: "auto" }} /> */}
                {/* Ajouter d'autres bailleurs si nécessaire */}
            </Stack>
        </Stack>
    );
};

export default Header;
