import { useEffect } from "react";
import { PAGE_T } from "../../types";
import Component from "./Component";
import { usePageLooper } from "../../contexts/PageLooper";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from 'react-chartjs-2';
import { Stack, Typography } from "@mui/joy";
import { blue, green, grey, orange } from "@mui/material/colors";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default () => {
    const { suiviPTBAConsolide } = usePageLooper();

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize={"2vw"}
                textColor={grey[700]}
                fontWeight={300}
            >
                Suivi du PTBA Consolidé
            </Typography>

            <Bar
                data={{
                    labels: suiviPTBAConsolide?.donnees_graphique.series.map(({ name }) => name),
                    datasets: [
                        {
                            label: `Pourcentage d'execution`,
                            data: suiviPTBAConsolide?.donnees_graphique.series.flatMap(({ data }) => data),
                            backgroundColor: green[600],
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: { legend: { display: true, } },
                    scales: { y: { beginAtZero: true, max: 100 } },

                }}
                style={{
                    maxHeight: '70vh',
                    background: 'white',
                    fontSize: "2vw"
                }}
            />
        </Stack>
    )
}
