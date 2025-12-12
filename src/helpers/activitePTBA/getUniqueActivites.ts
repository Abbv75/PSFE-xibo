import { ActivitePTBA, PTBA_ZIBO_T } from "../../service/ptba_zibo/get";

export default (items: PTBA_ZIBO_T[]) => {
    const map = new Map<string, ActivitePTBA>();

    items.forEach(item => {
        item.activites.forEach(activite => {
            map.set(activite.id_ptba, activite);
        });
    });

    return Array.from(map.values());
};
