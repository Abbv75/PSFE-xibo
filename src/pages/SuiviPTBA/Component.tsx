import { Stack, Typography, LinearProgress, Grid, Box } from "@mui/joy";
import { green, grey } from "@mui/material/colors";
import TableCustom from "../../components/TableCustome";
import { PTBA_ZIBO_T } from "../../service/ptba_zibo/get";
import { useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import LinearProgressCustom from "../../components/LinearProgressCustom";

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
        return data.activites.map((act, i) => {
            const total_prop_percent = parseFloat(act.total_prop || "0");
            const taux_decaissement_percent = parseFloat(act.taux_decaissement || "0");

            return {
                ...act,
                total_prop_percent,
                taux_decaissement_percent,
                total_prop: LinearProgressCustom(total_prop_percent, colors[0]),
                taux_decaissement: LinearProgressCustom(taux_decaissement_percent, colors[1]),
            };
        });
    }, [data]);

    const allZero = useMemo(
        () => transformedData.every((d) => d.total_prop_percent === 0),
        [transformedData]
    );

    // Highcharts data
    const pieSeries = useMemo(
        () => (
            allZero
                ? []
                : transformedData.map((d, i) => ({
                    name: d.intitule_activite_ptba,
                    y: d.total_prop_percent,
                    color: colors[i % colors.length],
                }))
        ),
        [transformedData]
    )


    const pieOptions: Highcharts.Options = useMemo(() => ({
        chart: {
            type: "pie",
            backgroundColor: "white",
            height: "70%",
            animation: false,
        },
        title: {
            text: "Répartition du taux de réalisation par activités",
            style: { fontSize: "16px", fontWeight: "bold" },
        },
        tooltip: {
            pointFormat: "<b>{point.percentage:.1f}%</b> ({point.y}%)",
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: true,
                    format: "{point.name}: {point.percentage:.1f}%",
                    style: {
                        color: "white",
                        fontWeight: "bold",
                        textOutline: "1px contrast",
                    },
                },
            },
        },
        series: [
            {
                type: "pie",
                name: "Taux de réalisation",
                data: pieSeries,
            },
        ],
        credits: { enabled: false },
    }), [pieSeries]);

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
                            { label: "Intitulé", key: "intitule_activite_ptba" },
                            { label: "Avancement", key: "total_prop" },
                            { label: "Taux de décaissement", key: "taux_decaissement" },
                        ]}
                        data={transformedData}
                    />
                </Grid>

                {!allZero && pieSeries?.length  && (
                    <Grid xs={12} md={4}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={pieOptions}
                        />
                    </Grid>
                )}
            </Grid>
        </Stack>
    );
};

export default Component;
