import { usePageLooper } from "../../contexts/PageLooper";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Stack, Typography } from "@mui/joy";
import { blue, green, orange, red, purple, grey } from "@mui/material/colors";

export default function SuiviPTBAConsolide() {
    const { suiviPTBAConsolide } = usePageLooper();
    const graph = suiviPTBAConsolide?.donnees_graphique;

    const labels = graph?.series.map(s => s.name) ?? [];
    const valeurs = graph?.series.flatMap(s => s.data ?? []) ?? [];

    // Palette de couleurs différentes
    const palette = [
        blue[600],
        orange[600],
        green[600],
        red[600],
        purple[600],
        "#607D8B", // grey-blue
    ];

    // Construction des points avec une couleur par barre
    const dataColoree = valeurs.map((val, i) => ({
        y: val,
        color: palette[i % palette.length],
    }));

    const options: Options = {
        chart: {
            type: "column",
            backgroundColor: "white",
            animation: false,
            //@ts-ignore
            // style:{height : '70vh'}
        },

        title: { text: "" },

        xAxis: {
            categories: labels,
            labels: { style: { fontSize: "12px" } },
        },

        yAxis: {
            min: 0,
            max: 100,
            title: { text: "Pourcentage (%)" },
        },

        legend: { enabled: false },

        tooltip: {
            valueSuffix: " %",
            pointFormat: `<b>{point.y}%</b> exécuté`,
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: "{y}%",
                    style: {
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "13px",
                        textOutline: "1px contrast",
                    },
                },
            },
            column: {
                borderRadius: 4,
                pointPadding: 0.15,
                borderWidth: 0,
            },
        },

        series: [
            {
                type: "column",
                name: "Pourcentage d'exécution",
                data: dataColoree,
            },
        ],

        credits: { enabled: false },
    };

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

            <div style={{ width: "100%", height: "70vh" }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </Stack>
    );
}
