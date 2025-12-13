import { Stack, Typography, Grid } from '@mui/joy';
import { API_mobile_activite_T } from '../../types';
import { green, grey } from '@mui/material/colors';
import TableCustom from '../../components/TableCustome';
import { usePageLooper } from '../../contexts/PageLooper';
import findResponsableByActivite from '../../helpers/activitePTBA/findResponsableByActivite';

const Component = ({ API_mobile_activiteData, nbrPage }: { API_mobile_activiteData: API_mobile_activite_T[], nbrPage?: number }) => {
    const { ptba_ziboData } = usePageLooper();

    return (
        <Stack sx={{ gap: 3, p: 3 }}>
            <Typography
                level="h4"
                fontSize="2vw"
                textColor={green[50]}
                fontWeight={700}
            >
                Avancement global du PTBA par activité (Page {nbrPage})
            </Typography>

            <Grid container>
                <Grid xs={12} md={12}>
                    <TableCustom
                        columns={[
                            {
                                key: 'code',
                                label: 'Code'
                            },
                            {
                                key: 'libelle',
                                label: 'Libelle'
                            },
                            {
                                key: 'responsable',
                                label: 'Responsable'
                            },
                            {
                                key: 'etapes',
                                label: 'Avancement'
                            },
                            {
                                key: 'pourcentage_decaissement',
                                label: 'Décaissement (%)'
                            },
                            {
                                key: 'pourcentage_engagement',
                                label: 'Engagement (%)'
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
                        data={API_mobile_activiteData.map(d => ({
                            ...d,
                            cout_prevu: d.cout_prevu.toLocaleString(),
                            cout_realise: d.cout_realise.toLocaleString(),
                            cout_engage: d.cout_engage.toLocaleString(),
                            responsable: findResponsableByActivite(d.code, ptba_ziboData)
                        }))}
                        theadSx={{
                            "& *": {
                                fontSize: '1vw !important'
                            }
                        }}
                    />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Component