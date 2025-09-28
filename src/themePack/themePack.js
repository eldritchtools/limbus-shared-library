import { themePacks } from "../data/mdData";
import { ASSETS_ROOT } from "../paths";

function rescaleThemePack(scale) {
    return { width: `${380 * scale}px`, height: `${690 * scale}px` };
}

function ThemePackImg({ id, themePack = null, displayName = false, scale = 1 }) {

    let themePackObject = themePack;
    if (!themePackObject) {
        if (!(id in themePacks)) {
            console.warn(`Theme Pack ${id} not found.`);
            return null
        } else {
            themePackObject = themePacks[id];
        }
    }

    const scaledStyle = rescaleThemePack(scale);
    const img = <img src={`${ASSETS_ROOT}/theme_packs/${themePack.image}.png`} alt={themePack.name} title={themePack.name} style={rescaleThemePack(scale)} />;

    if (displayName) {
        return <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: scaledStyle.width }}>
            {img}
            <span>{themePack.name}</span>
        </div>
    } else {
        return img;
    }
}

export { ThemePackImg };