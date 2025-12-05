import { usePageLooper } from "../../contexts/PageLooper";
import { useEffect } from "react";
import Component from "./Component";
import { PAGE_T } from "../../types";

export default () => {
    const { API_mobile_actionData, setPages } = usePageLooper();

    useEffect(() => {
        if (!API_mobile_actionData || API_mobile_actionData.length === 0) return;

        const chunkSize = 6; // nombre d'éléments par page
        const newPages: PAGE_T[] = [];

        for (let i = 0; i < API_mobile_actionData.length; i += chunkSize) {
            const chunk = API_mobile_actionData.slice(i, i + chunkSize);

            newPages.push({
                id: `AvancementGlobalDuPTBAParAction-${i / chunkSize + 1}`,
                component: <Component nbrPage={i / chunkSize + 1} API_mobile_actionData={chunk} />,
                duration: 30000,
                preload: true,
            });
        }

        setPages(prev => [
            ...prev.filter(p => !p.id.startsWith("AvancementGlobalDuPTBAParActivite")),
            ...newPages
        ]);
    }, [API_mobile_actionData, setPages]);

    return null;
}
