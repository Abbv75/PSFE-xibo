import { usePageLooper } from "../../contexts/PageLooper";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Stack, Typography } from "@mui/joy";
import { blue, green, grey, orange } from "@mui/material/colors";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

export default () => {
    const { suiviPTBAProgramme } = usePageLooper();

    const barColors = [blue[600], orange[600], green[600]];

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
                    datasets:
                        suiviPTBAProgramme?.donnees_graphique.series.map(({ name, data }, index) => ({
                            label: name,
                            data: data,
                            backgroundColor: barColors[index % barColors.length], // applique bleu, orange, vert
                        })) || [],
                }}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { display: true },
                        datalabels: {
                            color: 'white', // couleur des labels,
                            font: { weight: 'bold', size: 14 },
                        },
                    },
                    scales: {
                        y: { beginAtZero: true, max: 100 },
                    },
                }}
                style={{
                    maxHeight: '70vh',
                    background: 'white',
                }}
            />
        </Stack>
    )
}
