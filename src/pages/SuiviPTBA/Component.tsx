import { Stack, Typography, LinearProgress, Grid, Box } from '@mui/joy';
import { green, grey } from '@mui/material/colors';
import TableCustom from '../../components/TableCustome';
import { PTBA_ZIBO_T } from '../../service/ptba_zibo/get';
import { useMemo } from 'react';
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    ArcElement,
    Title
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

const colors = [
    "#4e79a7",
    "#f28e2b",
    "#59a14f",
    "#e15759",
    "#76b7b2",
    "#edc948",
    "#b07aa1",
    "#ff9da7",
    "#9c755f",
    "#bab0ab",
];

const Component = ({ data }: { data: PTBA_ZIBO_T }) => {

    const transformedData = useMemo(() => {
        return data.activites.map(act => {
            const total_prop_percent = parseFloat(act.total_prop || "0");
            const taux_decaissement_percent = parseFloat(act.taux_decaissement || "0");

            const renderLinear = (value: number, progressColor: string) => (
                <Box sx={{ position: 'relative', width: '100%', height: 40, borderRadius: 1, overflow: 'hidden', backgroundColor: '#4caf50' }}>
                    <LinearProgress
                        determinate
                        value={value}
                        sx={{
                            height: '100%',
                            borderRadius: 1,
                            '--LinearProgress-progressColor': progressColor,
                            backgroundColor: green[700],
                        }}
                    />
                    <Typography
                        level="body-md"
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            top: 0,
                            left: 0,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    >
                        {value.toFixed(2)}%
                    </Typography>
                </Box>
            );


            return {
                ...act,
                total_prop_percent,
                taux_decaissement_percent,
                total_prop: renderLinear(total_prop_percent, colors[0]),
                taux_decaissement: renderLinear(taux_decaissement_percent, colors[1]),
            };
        });
    }, [data]);

    const allZero = transformedData.every(d => d.total_prop_percent === 0);

    const donutData = useMemo(() => {
        if (allZero) return null;

        const values = transformedData.map(d => d.total_prop_percent);
        const labels = transformedData.map(d => d.intitule_activite_ptba);
        return {
            labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: values.map((_, i) => colors[i % colors.length]),
                    borderWidth: 1,
                    label: "Pourcentage du cout sur le total",
                },
            ],
        };
    }, [transformedData, allZero]);

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize={"2vw"}
                textColor={grey[700]}
                fontWeight={300}
            >
                Suivi des tâches de <b>{data.responsable}</b>
            </Typography>

            <Grid container spacing={2}>
                <Grid xs={12} md={allZero ? 12 : 8}>
                    <TableCustom
                        columns={[
                            { label: 'Intitulé', key: 'intitule_activite_ptba' },
                            { label: 'Étapes', key: 'total_prop' },
                            { label: 'Taux de décaissement', key: 'taux_decaissement' },
                        ]}
                        data={transformedData}
                    />
                </Grid>

                {!allZero && donutData && (
                    <Grid xs={12} md={4}>
                        <Doughnut
                            data={donutData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: { display: true },
                                    title: {
                                        display: true,
                                        text: "Répartition du taux de réalisation par activités",
                                        font: { size: 18, weight: "bold" },
                                        padding: 20
                                    },
                                    datalabels: {
                                        color: 'white',
                                        font: { weight: 'bold', size: 14 },
                                        formatter: (value, ctx) => {
                                            const dataset = ctx.chart.data.datasets[0].data as number[];
                                            const total = dataset.reduce((a, b) => a + b, 0);
                                            const percentage = (value / total) * 100;
                                            return `${percentage.toFixed(1)}%`;
                                        }
                                    }
                                },
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        </Stack>
    );
};

export default Component;
