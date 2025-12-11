import { Stack, Typography, Grid } from "@mui/joy";
import { transformPPMDataForVersion_T } from "../../types";
import { grey } from "@mui/material/colors";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import TableCustom from "../../components/TableCustome";

const colors = [
    "#4e79a7",
    "#f28e2b",
    "#e15759",
    "#76b7b2",
    "#59a14f",
    "#edc948",
    "#b07aa1",
    "#ff9da7",
    "#9c755f",
    "#bab0ab",
];

export default ({ data }: { data: transformPPMDataForVersion_T }) => {
    const pieSeries = data.donutData.map((d, i) => ({
        name: d.name,
        y: d.value,
        color: colors[i % colors.length],
    }));

    const pieOptions: Highcharts.Options = {
        chart: {
            type: "pie",
            backgroundColor: "white",
            height: "70%",
            animation: false,
        },
        title: {
            text: "Répartition du cout total par catégories",
            style: { fontSize: "16px", fontWeight: "bold" },
        },
        tooltip: {
            pointFormat: "<b>{point.percentage:.1f}%</b> ({point.y})",
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
                name: "Répartition du coût",
                data: pieSeries,
            },
        ],
        credits: { enabled: false },
    };

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

            <Grid container spacing={2}>
                <Grid xs={12} md={8}>
                    <TableCustom
                        data={data.tableauCategories.map((d) => ({
                            ...d,
                            cout_total_usd: d.cout_total_usd.toLocaleString("fr-FR", {
                                style: "currency",
                                currency: "USD",
                            }),
                            montant_realise: d.montant_realise.toLocaleString("fr-FR", {
                                style: "currency",
                                currency: "USD",
                            }),
                            taux_realisation: d.taux_realisation.toLocaleString("fr-FR", {
                                style: "percent",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            }),
                        }))}
                        columns={[
                            { key: "nom", label: "Nom" },
                            { key: "nombre_marches", label: "Nombre de marchés" },
                            { key: "cout_total_usd", label: "Cout total (USD)" },
                            { key: "montant_realise", label: "Montant de réalisation" },
                            { key: "taux_realisation", label: "Taux de réalisation" },
                        ]}
                    />
                </Grid>
                <Grid xs={12} md={4}>
                    <HighchartsReact highcharts={Highcharts} options={pieOptions} />
                </Grid>
            </Grid>
        </Stack>
    );
};