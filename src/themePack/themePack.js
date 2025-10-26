import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";

function rescaleThemePack(scale) {
    return { width: `${380 * scale}px`, height: `${690 * scale}px` };
}

function ThemePackImg({ id, themePack = null, displayName = false, scale = 1 }) {
    const [themePacks, themePacksLoading] = useData("md_theme_packs");

    let themePackObject = themePack;
    if (!themePackObject) {
        if (themePacksLoading) {
            return null;
        } if (!(id in themePacks)) {
            console.warn(`Theme Pack ${id} not found.`);
            return null;
        } else {
            themePackObject = themePacks[id];
        }
    }

    const scaledStyle = rescaleThemePack(scale);
    const img = <img src={`${ASSETS_ROOT}/theme_packs/${themePackObject.image}.png`} alt={themePackObject.name} title={themePackObject.name} style={rescaleThemePack(scale)} />;

    if (displayName) {
        return <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: scaledStyle.width }}>
            {img}
            <span>{themePackObject.name}</span>
        </div>
    } else {
        return img;
    }
}

function getFloorsPerPack() {
    const [floorPacks, floorPacksLoading] = useData("md_floor_packs");
    const floorsPerPack = { normal: {}, hard: {} };
    
    if (floorPacksLoading) return floorsPerPack;

    Object.entries(floorPacks.normal).forEach(([floor, packs]) => packs.forEach(pack => {
        if (pack in floorsPerPack.normal) floorsPerPack.normal[pack].push(floor);
        else floorsPerPack.normal[pack] = [floor];
    }))
    Object.entries(floorPacks.hard).forEach(([floor, packs]) => packs.forEach(pack => {
        if (pack in floorsPerPack.hard) floorsPerPack.hard[pack].push(floor);
        else floorsPerPack.hard[pack] = [floor];
    }))

    return floorsPerPack;
}

function getFloorsForPack(packId) {
    const [floorPacks, floorPacksLoading] = useData("md_floor_packs");
    
    if (floorPacksLoading) return {normal: [], hard: []};
    return {
        normal: Object.entries(floorPacks.normal).filter(([_, packs]) => packs.includes(packId)).map(([floor, _]) => floor),
        hard: Object.entries(floorPacks.hard).filter(([_, packs]) => packs.includes(packId)).map(([floor, _]) => floor)
    };
}

export { ThemePackImg, getFloorsPerPack, getFloorsForPack };