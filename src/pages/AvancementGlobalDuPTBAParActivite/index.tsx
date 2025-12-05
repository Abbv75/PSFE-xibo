import { usePageLooper } from "../../contexts/PageLooper";
import { useEffect } from "react";
import Component from "./Component";
import { PAGE_T } from "../../types";

export default () => {
    const { API_mobile_activiteData, setPages } = usePageLooper();

    useEffect(() => {
        if (!API_mobile_activiteData || API_mobile_activiteData.length === 0) return;

        const chunkSize = 6; // nombre d'éléments par page
        const newPages: PAGE_T[] = [];

        for (let i = 0; i < API_mobile_activiteData.length; i += chunkSize) {
            const chunk = API_mobile_activiteData.slice(i, i + chunkSize);

            newPages.push({
                id: `AvancementGlobalDuPTBAParActivite-${i / chunkSize + 1}`,
                component: <Component nbrPage={i / chunkSize + 1} API_mobile_activiteData={chunk} />,
                duration: 30000,
                preload: true,
            });
        }

        setPages(prev => [
            ...prev.filter(p => !p.id.startsWith("AvancementGlobalDuPTBAParActivite")),
            ...newPages
        ]);
    }, [API_mobile_activiteData, setPages]);

    return null;
}
