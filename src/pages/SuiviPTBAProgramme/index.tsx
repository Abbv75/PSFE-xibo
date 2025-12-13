import { usePageLooper } from "../../contexts/PageLooper";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Box, Stack, Typography } from "@mui/joy";
import { blue, green, grey, orange } from "@mui/material/colors";
import TableCustom from "../../components/TableCustome";

export default function SuiviPTBAProgramme() {
    const { suiviPTBAProgramme } = usePageLooper();
    const graph = suiviPTBAProgramme?.donnees_graphique;

    const categories = graph?.categories ?? [];
    const series = graph?.series ?? [];

    // --- TableCustom ---
    const tableColumns = [{ label: "#", key: "type" }, ...categories.map(c => ({ label: c, key: c }))];

    const tableData = series.map(serie => {
        const row: Record<string, any> = { type: serie.name };
        serie.data.forEach((val, idx) => {
            row[categories[idx]] = val ?? 0;
        });
        return row;
    });

    const barColors = [blue[600], orange[600], green[600]];

    const chartSeries = series.map((serie, i) => ({
        type: "column" as const,
        name: serie.name,
        data: serie.data ?? [],
        color: barColors[i % barColors.length],
        dataLabels: {
            enabled: true,
            style: {
                color: "white",
                fontWeight: "bold",
                textOutline: "1px contrast",
                fontSize: "13px",
            },
        },
    }));

    const options: Options = {
        chart: {
            type: "column",
            backgroundColor: "white",
            animation: false,
        },
        title: { text: "" },
        xAxis: {
            categories,
            labels: { style: { fontSize: "12px" } },
        },
        yAxis: {
            min: 0,
            max: 100,
            title: { text: "Pourcentage (%)" },
            labels: { style: { fontSize: "12px" } },
        },
        legend: {
            enabled: true,
            itemStyle: { fontSize: "13px" },
        },
        tooltip: {
            valueSuffix: " %",
            headerFormat: "<b>{point.key}</b><br/>",
            pointFormat: "{series.name} : <b>{point.y}%</b>",
        },
        plotOptions: {
            series: { animation: false },
            column: {
                borderRadius: 3,
                pointPadding: 0.15,
                borderWidth: 0,
            },
        },
        series: chartSeries,
        credits: { enabled: false },
    };

    return (
        <Stack sx={{ gap: 1, p: 3 }}>
            <Typography
                level="h4"
                fontSize="2vw"
                fontWeight={700}
                textColor={green[50]}
            >
                Suivi du PTBA par programme
            </Typography>

            <Stack>
                <Box
                    sx={{
                        'thead *':{
                            fontSize : '0.9vw !important'
                        }
                    }}
                >
                    <TableCustom columns={tableColumns} data={tableData} />
                </Box>

                <HighchartsReact highcharts={Highcharts} options={options} />
            </Stack>
        </Stack>
    );
}
