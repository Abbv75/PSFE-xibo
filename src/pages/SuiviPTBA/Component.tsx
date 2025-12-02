import { Stack, Typography, LinearProgress } from '@mui/joy';
import { grey } from '@mui/material/colors';
import TableCustom from '../../components/TableCustome';
import { PTBA_ZIBO_T } from '../../service/ptba_zibo/get';
import { useMemo } from 'react';

const Component = ({ data }: { data: PTBA_ZIBO_T }) => {

    const transformedData = useMemo(() => {
        return data.activites.map(act => {
            const total_prop_percent = parseFloat(act.total_prop || "0") // Déjà un pourcentage
            const taux_decaissement_percent = parseFloat(act.taux_decaissement || "0") // Déjà un pourcentage

            return {
                ...act,
                total_prop: (
                    <Stack sx={{ width: "100%" }}>
                        <Typography level="body-xs">{total_prop_percent.toFixed(2)}%</Typography>

                        <LinearProgress
                            determinate={true}
                            value={total_prop_percent}
                            sx={{
                                '--LinearProgress-trackColor': 'red',
                                '--LinearProgress-progressColor': 'blue',
                            }}
                            variant='outlined'
                        />
                    </Stack>
                ),
                taux_decaissement: (
                    <Stack sx={{ width: "100%" }}>
                        <Typography level="body-xs">{taux_decaissement_percent.toFixed(2)}%</Typography>

                        <LinearProgress
                            determinate={true}
                            value={taux_decaissement_percent}
                            sx={{
                                '--LinearProgress-trackColor': 'red',
                                '--LinearProgress-progressColor': 'blue',
                            }}
                            variant='outlined'
                            color='success'
                        />
                    </Stack>
                ),
            };
        });
    }, [data]);

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize={"2vw"}
                textColor={grey[700]}
                fontWeight={300}
            >
                Suivit des taches de <b>{data.responsable}</b>
            </Typography>

            <TableCustom
                columns={[
                    { label: 'Intitulé', key: 'intitule_activite_ptba' },
                    { label: 'Étapes', key: 'total_prop' },
                    { label: 'Taux de décaissement', key: 'taux_decaissement' },
                    { label: 'Observation', key: 'observation' },
                    { label: 'Dernière date', key: 'derniere_date_fin' },
                    { label: 'Statut de retard', key: 'statut_retard' },
                ]}
                data={transformedData}
            />
        </Stack>
    );
};

export default Component;
