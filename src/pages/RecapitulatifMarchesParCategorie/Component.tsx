import { Stack, Typography, Grid } from '@mui/joy';
import { transformPPMDataForVersion_T } from '../../types';
import { grey } from '@mui/material/colors';
import {
    Chart as ChartJS, Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import TableCustom from '../../components/TableCustome';

ChartJS.register(ArcElement, Tooltip, Legend);

const Component = ({ data }: { data: transformPPMDataForVersion_T }) => {
    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize="2vw"
                textColor={grey[700]}
                fontWeight={300}
            >
                Version : {data.version.numero} ({data.version.annee})
            </Typography>

            <Grid container>
                <Grid xs={12} md={8}>
                    <TableCustom
                        data={data.tableauCategories.map(d => ({
                            ...d,
                            cout_total_usd: d.cout_total_usd.toLocaleString('fr-FR', {
                                style: 'currency',
                                currency: 'USD',
                            }),
                            montant_realise: d.montant_realise.toLocaleString('fr-FR', {
                                style: 'currency',
                                currency: 'USD',
                            }),
                            taux_realisation: d.taux_realisation.toLocaleString('fr-FR', {
                                style: 'percent',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })
                        }))}
                        columns={[
                            {
                                key: 'nom',
                                label: 'Nom'
                            },
                            {
                                key: 'nombre_marches',
                                label: 'Nombre de marchés'
                            },
                            {
                                key: 'cout_total_usd',
                                label: 'Cout total (USD)'
                            },
                            {
                                key: 'montant_realise',
                                label: 'Montant de réalisation'
                            },
                            {
                                key: 'taux_realisation',
                                label: 'Taux de réalisation'
                            },
                        ]}
                    />

                </Grid>
                <Grid xs={12} md={4}>
                    <Doughnut
                        data={{
                            labels: data.donutData.map(d => d.name),
                            datasets: [
                                {
                                    data: data.donutData.map(d => d.value),
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: { display: true },
                            },
                        }}
                        style={{
                            maxWidth: '100%'
                        }}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Component