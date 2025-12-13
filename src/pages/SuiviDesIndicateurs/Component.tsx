import { Stack, Typography } from "@mui/joy";
import { SUIVI_INDICATEUR_T } from "../../types";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { blue, orange, grey, green } from "@mui/material/colors";

const Component = ({ data }: { data: SUIVI_INDICATEUR_T }) => {
    const categories = data.donnees_annees.map(d => d.annee);

    const options: Highcharts.Options = {
        chart: {
            type: "column",
            backgroundColor: "white",
            animation: false,
        },

        title: { text: "" },

        //@ts-ignore
        xAxis: {
            categories,
            labels: { style: { fontSize: "12px" } },
        },

        yAxis: {
            min: 0,
            title: { text: "" },
        },

        legend: {
            enabled: true,
            itemStyle: { fontSize: "13px" },
        },

        tooltip: {
            shared: true,
            valueSuffix: "",
            headerFormat: "<b>{point.key}</b><br/>",
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: "12px",
                        fontWeight: "bold",
                        textOutline: "1px contrast",
                    },
                },
            },
            column: {
                borderRadius: 4,
                borderWidth: 0,
                pointPadding: 0.1,
            },
        },

        series: [
            {
                type: "column",
                name: "Cible prévisionnelle",
                data: data.donnees_annees.map(d => d.cible),
                color: orange[600],
            },
            {
                type: "spline", // ← Réalisations en courbe
                name: "Réalisations cumulées",
                data: data.donnees_annees.map(d => d.realisation),
                color: blue[600],
                marker: {
                    enabled: true,
                    radius: 4,
                    symbol: "circle",
                },
                tooltip: {
                    valueSuffix: "",
                },
            },
        ],

        credits: { enabled: false },
    };

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize="2vw"
                textColor={green[50]}
                fontWeight={700}
            >
                {data.intitule}
            </Typography>

            <div style={{ width: "100%", height: "70vh" }}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </Stack>
    );
};

export default Component;