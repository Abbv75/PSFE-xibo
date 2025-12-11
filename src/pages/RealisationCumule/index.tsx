import { usePageLooper } from "../../contexts/PageLooper";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Stack, Typography, Grid } from "@mui/joy";
import { green, red, grey } from "@mui/material/colors";

export default function RealisationCumulee() {
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

                    const options = {
                        chart: {
                            type: "pie",
                            backgroundColor: "transparent",
                        },
                        title: {
                            text: "",
                        },
                        tooltip: {
                            pointFormat:
                                `<b>{point.y} ${unite}</b> ({point.percentage:.1f}%)`,
                        },
                        plotOptions: {
                            pie: {
                                allowPointSelect: true,
                                cursor: "pointer",
                                dataLabels: {
                                    enabled: true,
                                    format: "{point.name}<br>{point.y} " + unite,
                                    style: {
                                        fontSize: "11px",
                                    },
                                },
                            },
                        },
                        series: [
                            {
                                name: ind.intitule_ref_ind,
                                colorByPoint: true,
                                data: [
                                    {
                                        name: `${realise.toLocaleString()} ${unite} réalisé`,
                                        y: realise,
                                        color: green[500],
                                    },
                                    {
                                        name: `${reste.toLocaleString()} ${unite} restant`,
                                        y: reste,
                                        color: red[400],
                                    },
                                ],
                            },
                        ],
                        credits: { enabled: false },
                        legend: {
                            enabled: true,
                        },
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

                                <HighchartsReact
                                    highcharts={Highcharts}
                                    options={options}
                                />
                            </Stack>
                        </Grid>
                    );
                })}
            </Grid>
        </Stack>
    );
}
