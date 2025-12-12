import { ActivitePTBA } from "../../service/ptba_zibo/get";

export default (
    activites: ActivitePTBA[],
    item: string | ActivitePTBA
): ActivitePTBA | undefined => {
    const code = typeof item === "string" ? item : item?.code_activite_ptba;
    return activites.find(({ code_activite_ptba }) => code_activite_ptba === code);
};