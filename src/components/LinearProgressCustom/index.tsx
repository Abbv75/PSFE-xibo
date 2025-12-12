import { Typography, LinearProgress, Box } from "@mui/joy";
import { green } from "@mui/material/colors";

export default (value: number, progressColor: string) => (
    <Box
        sx={{
            position: "relative",
            width: "100%",
            height: 40,
            borderRadius: 1,
            overflow: "hidden",
            backgroundColor: "#4caf50",
        }}
    >
        <LinearProgress
            determinate
            value={value}
            sx={{
                height: "100%",
                borderRadius: 1,
                "--LinearProgress-progressColor": progressColor,
                backgroundColor: green[700],
            }}
        />
        <Typography
            level="body-md"
            sx={{
                position: "absolute",
                width: "100%",
                top: 0,
                left: 0,
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
            }}
        >
            {value.toFixed(2)}%
        </Typography>
    </Box>
);