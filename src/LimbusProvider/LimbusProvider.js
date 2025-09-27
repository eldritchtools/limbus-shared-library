import { createContext, useContext, useEffect, useState } from "react";

const DATA_ROOT = `https://eldritchtools.github.io/limbus-shared-library/public/data`;
const LimbusContext = createContext();

export function LimbusProvider({ loadStatuses = true, loadGifts = false, loadMdData = false, children }) {
    const [statuses, setStatuses] = useState(null);
    const [gifts, setGifts] = useState(null);
    const [themePacks, setThemePacks] = useState(null);
    const [floorPacks, setFloorPacks] = useState(null);

    const loadFile = (filename, setFunction) => {
        fetch(`${DATA_ROOT}/${filename}`)
            .then((res) => res.json())
            .then((json) => setFunction(json))
            .catch((err) => console.error(`Failed to load ${filename}`, err));
    }

    useEffect(() => {
        if (loadStatuses) loadFile("statuses.json", setStatuses);
        if (loadGifts) loadFile("gifts.json", setGifts);
        if (loadMdData) {
            loadFile("md_theme_packs.json", setThemePacks);
            loadFile("md_floor_packs.json", setFloorPacks);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = {
        statuses, gifts, themePacks, floorPacks
    };

    return (
        <LimbusContext.Provider value={value}>
            {children}
        </LimbusContext.Provider>
    );
}

export const useLimbusData = () => useContext(LimbusContext);