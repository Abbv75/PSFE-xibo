import { PTBA_ZIBO_T } from "../../service/ptba_zibo/get";

export default (
    codeActivite: string,
    ptbaList: PTBA_ZIBO_T[]
): string | undefined => {
    for (const ptba of ptbaList) {
        const found = ptba.activites.find(({ code_activite_ptba }) => code_activite_ptba === codeActivite);

        if (found) return ptba.responsable;
    }

    return undefined;
};
