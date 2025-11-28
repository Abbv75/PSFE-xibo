import { Stack, Typography } from '@mui/joy'
import { SUIVI_INDICATEUR_T } from '../../types'
import { blue, grey, orange } from '@mui/material/colors'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Component = ({ data }: { data: SUIVI_INDICATEUR_T }) => {
    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize={"2vw"}
                textColor={grey[700]}
                fontWeight={300}
            >
                {data.intitule}
            </Typography>

            <Bar
                data={{
                    labels: data.donnees_annees.map(({ annee }) => annee),
                    datasets: [
                        {
                            label: 'Cible prévisionnelles',
                            data: data.donnees_annees.map(({ cible }) => cible),
                            backgroundColor: orange[600],
                        },
                        {
                            label: 'Réalisations cumulées',
                            data: data.donnees_annees.map(({ realisation }) => realisation),
                            backgroundColor: blue[600],
                        },
                    ],
                }}
                options={{
                    responsive: true,
                    plugins: { legend: { display: true,  } },
                    scales: { y: { beginAtZero: true } },
                }}
                style={{
                    maxHeight: '70vh',
                    background: 'white',
                    fontSize:"2vw"
                }}
            />
        </Stack>
    )
}

export default Component