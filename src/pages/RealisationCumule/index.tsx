import { usePageLooper } from "../../contexts/PageLooper";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Stack, Typography, Grid } from "@mui/joy";
import { green, red, grey } from "@mui/material/colors";

ChartJS.register(ArcElement, Tooltip, Legend);

export default () => {
    const { realisationCumuleData } = usePageLooper();

    const indicateurs = realisationCumuleData?.indicateurs || [];

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize={"2vw"}
                textColor={grey[700]}
                fontWeight={300}
            >
                Réalisations cumulées par indicateur
            </Typography>

            <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
                {indicateurs.map((ind, idx) => {
                    const realise = ind.total_realise;
                    const reste = Math.max(ind.cible_totale - ind.total_realise, 0);
                    const unite = ind.unite || "";

                    const labels = [
                        `${realise.toLocaleString()} ${unite} réalisé`,
                        `${reste.toLocaleString()} ${unite} restant`,
                    ];

                    const dataPie = {
                        labels,
                        datasets: [
                            {
                                label: ind.intitule_ref_ind,
                                data: [realise, reste],
                                backgroundColor: [green[500], red[400]],
                            },
                        ],
                    };

                    return (
                        <Grid xs={12} sm={6} md={4} key={idx}>
                            <Stack
                                sx={{
                                    p: 2,
                                    borderRadius: "12px",
                                    backgroundColor: "white",
                                    boxShadow: "md",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    level="h4"
                                    textAlign="center"
                                    fontWeight={400}
                                    mb={1}
                                    fontSize="1.1vw"
                                >
                                    {ind.intitule_ref_ind}
                                </Typography>

                                <Pie
                                    data={dataPie}
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                labels: {
                                                    font: { size: 12 },
                                                    padding: 10,
                                                },
                                            },
                                            tooltip: {
                                                callbacks: {
                                                    label: (ctx) => {
                                                        const value = ctx.raw;
                                                        const label = ctx.label;
                                                        return `${label} : ${value} ${unite}`;
                                                    },
                                                },
                                            },
                                        },
                                    }}
                                />
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>
        </Stack>
    );
}
