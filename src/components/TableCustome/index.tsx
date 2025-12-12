import React from "react";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    SxProps,
    Theme,
} from "@mui/material";
import { green } from "@mui/material/colors";

interface Column {
    label: string;
    key: string;
    center?: boolean;
}

interface TableCustomProps {
    columns: Column[];
    data: Record<string, any>[] | 'gap'[];
    theadSx?: SxProps<Theme>;
    tbodySx?: SxProps<Theme>;
}


const TableCustom: React.FC<TableCustomProps> = ({ columns, data, theadSx, tbodySx }) => {
    return (
        <Table>
            <TableHead
                sx={[{
                    bgcolor: green[900],
                    color: 'white',
                }, theadSx as any]}
            >
                <TableRow>
                    {columns.map((col) => (
                        <TableCell
                            key={col.key}
                            sx={{
                                color: "white",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                fontSize: '1.5vw',
                                paddingY: '1vw',
                                paddingX: '1vw',
                            }}
                            align={col.center ? "center" : "left"}
                        >{col.label}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody sx={tbodySx}>

                {data.map((row, idx) => row == 'gap'
                    ? (
                        <TableRow sx={{ p: 10 }} children={<TableCell sx={{ border: 0 }} />} />
                    )
                    : (
                        <TableRow
                            key={idx}
                            sx={{
                                backgroundColor: idx % 2 === 0 ? "#f5f5f5" : "white",
                                "&:hover": {
                                    backgroundColor: "#e3f2fd",
                                },
                            }}
                        >
                            {columns.map((col) => (
                                <TableCell
                                    key={col.key}
                                    sx={{
                                        fontSize: "1.2vw",
                                        paddingY: '0.5vw',
                                        paddingX: '1vw',
                                    }}
                                    align={col.center ? "center" : "left"}
                                >{row[col.key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    );
};

export default TableCustom;
