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
import { green, grey } from "@mui/material/colors";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default () => {
    const { suiviPTBAProgramme } = usePageLooper();

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize={"2vw"}
                textColor={grey[700]}
                fontWeight={300}
            >
                Suivi du PTBA par programme
            </Typography>

            <Bar
                data={{
                    labels: suiviPTBAProgramme?.donnees_graphique.categories,
                    datasets: suiviPTBAProgramme?.donnees_graphique.series.map(({ name, data }) => ({
                        label: name,
                        data: data,
                        backgroundColor: green[600],
                    })) || []
                }}
                options={{
                    responsive: true,
                    plugins: { legend: { display: true, } },
                    scales: { y: { beginAtZero: true, max: 100 } },
                }}
                style={{
                    maxHeight: '70vh',
                    background: 'white',
                }}
            />
        </Stack>
    )
}
