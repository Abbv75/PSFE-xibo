import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/joy";
import { IMAGES } from "../../constant";
import { green, red, yellow } from "@mui/material/colors";

const Header: React.FC = () => {
    return (
        <Stack>
            <Stack
                px={'2vw'}
                py={'0.5vw'}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    bgcolor: '#0000005b',
                    backdropFilter: `blur(10px)`
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
                    <Typography level="h4" fontWeight="lg" fontSize={'1.2vw'} textColor={green[50]}>
                        PSFE Cameroun
                    </Typography>
                    <Typography level="body-md" fontWeight="md" fontSize={'1vw'} textColor={green[50]}>
                        Programme sectoriel forêts et environnement du Cameroun
                    </Typography>
                </Stack>

                {/* Logos bailleurs / partenaires */}
                <Stack direction="row" spacing={2}>
                    <Box component="img" src={IMAGES.Flag_of_Cameroon} alt="Flag_of_Cameroon" sx={{ height: '3vw', width: "auto" }} />
                    {/* <Box component="img" src="/assets/bailleur2.png" alt="Bailleur 2" sx={{ height: 50, width: "auto" }} /> */}
                    {/* Ajouter d'autres bailleurs si nécessaire */}
                </Stack>
            </Stack>
            <Grid container >
                {[green[700], red[700], yellow[700]].map((color, index) => (
                    <Grid xs={4} p={'5px'} bgcolor={color} key={index} />
                ))}
            </Grid>
        </Stack>
    );
};

export default Header;
