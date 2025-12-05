import { API_MOBILE_PPM_T, transformPPMDataForVersion_T } from "../types";

export function transformPPMDataForVersion(
    data: API_MOBILE_PPM_T,
    versionId: number
): transformPPMDataForVersion_T | null {
    // --- Trouver les infos de la version ---
    const version = data.versions.find(v => v.id_version === versionId);
    if (!version) return null;

    // --- TABLEAU PAR CATÉGORIE ---
    const tableauCategories: transformPPMDataForVersion_T["tableauCategories"] =
        data.categories.map(cat => {
            const versionCat = cat.versions[String(versionId)];

            return {
                code: cat.code,
                nom: cat.nom,
                nombre_marches: versionCat?.nombre_marches ?? 0,
                cout_total_usd: versionCat?.cout_total_usd ?? 0,
                montant_realise: versionCat?.montant_realise ?? 0,
                taux_realisation: versionCat?.taux_realisation ?? 0,
            };
        });

    // --- DONUT DATA ---
    const total = tableauCategories.reduce(
        (sum, c) => sum + c.cout_total_usd,
        0
    );

    const donutData: transformPPMDataForVersion_T["donutData"] =
        tableauCategories.map(cat => ({
            name: cat.nom,
            value: total > 0
                ? Math.round((cat.cout_total_usd / total) * 100)
                : 0
        }));

    // --- RESULTAT FINAL ---
    return {
        version: {
            id: version.id_version,
            numero: version.numero_version,
            annee: version.annee,
            date: version.date_version
        },
        tableauCategories,
        donutData
    };
}
