import { Stack, Typography, Grid } from '@mui/joy';
import { API_mobile_activite_T } from '../../types';
import { grey } from '@mui/material/colors';
import TableCustom from '../../components/TableCustome';

const Component = ({ API_mobile_actionData, nbrPage }: { API_mobile_actionData: API_mobile_activite_T[], nbrPage?: number }) => {
    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize="2vw"
                textColor={grey[700]}
                fontWeight={300}
            >
                Avancement global du PTBA par action (Page {nbrPage})
            </Typography>

            <Grid container>
                <Grid xs={12} md={12}>
                    <TableCustom
                        columns={[
                            {
                                key: 'libelle',
                                label: 'Libelle'
                            },
                            {
                                key: 'etapes',
                                label: 'Etapes'
                            },
                            {
                                key: 'pourcentage_decaissement',
                                label: 'Pourcentage de décaissement'
                            },
                            {
                                key: 'pourcentage_engagement',
                                label: 'Pourcentage d\'engagement'
                            },
                            {
                                key: 'cout_prevu',
                                label: 'Cout prévu'
                            },
                            {
                                key: 'cout_realise',
                                label: 'Cout réalisé',
                            },
                            {
                                key: 'cout_engage',
                                label: 'Cout engagé'
                            },
                        ]}
                        data={API_mobile_actionData.map(d => ({
                            ...d,
                            cout_prevu: d.cout_prevu.toLocaleString(),
                            cout_realise: d.cout_realise.toLocaleString(),
                            cout_engage: d.cout_engage.toLocaleString(),
                        }))}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Component