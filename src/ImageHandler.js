import { ASSETS_ROOT } from "./paths";

function Icon({ path, style = {} }) {
    return <img src={`${ASSETS_ROOT}/icons/${path}.png`} alt={path} title={path} style={style} />
}

function RarityImg({ rarity }) {
    switch (rarity) {
        case 1: return <img src={`${ASSETS_ROOT}/0.png`} alt={"0"} title={"0"} style={{ height: "2rem" }} />;
        case 2: return <img src={`${ASSETS_ROOT}/00.png`} alt={"00"} title={"00"} style={{ height: "2rem" }} />;
        case 3: return <img src={`${ASSETS_ROOT}/000.png`} alt={"000"} title={"000"} style={{ height: "2rem" }} />;
        default: return null;
    }
}

export { Icon, RarityImg };