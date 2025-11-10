import { ASSETS_ROOT } from "./paths";

function Icon({ path, style = {} }) {
    return <img src={`${ASSETS_ROOT}/icons/${path}.png`} alt={path} title={path} style={style} />
}

function RarityImg({ rarity, style = {} }) {
    switch (rarity) {
        case 1: return <img src={`${ASSETS_ROOT}/icons/0.png`} alt={"0"} title={"0"} style={{ height: "2rem", ...style }} />;
        case 2: return <img src={`${ASSETS_ROOT}/icons/00.png`} alt={"00"} title={"00"} style={{ height: "2rem", ...style }} />;
        case 3: return <img src={`${ASSETS_ROOT}/icons/000.png`} alt={"000"} title={"000"} style={{ height: "2rem", ...style }} />;
        case "zayin": return <img src={`${ASSETS_ROOT}/icons/zayin.png`} alt={"zayin"} title={"zayin"} style={{ height: "2rem", ...style }} />;
        case "teth": return <img src={`${ASSETS_ROOT}/icons/teth.png`} alt={"teth"} title={"teth"} style={{ height: "2rem", ...style }} />;
        case "he": return <img src={`${ASSETS_ROOT}/icons/he.png`} alt={"he"} title={"he"} style={{ height: "2rem", ...style }} />;
        case "waw": return <img src={`${ASSETS_ROOT}/icons/waw.png`} alt={"waw"} title={"waw"} style={{ height: "2rem", ...style }} />;
        case "aleph": return <img src={`${ASSETS_ROOT}/icons/aleph.png`} alt={"aleph"} title={"aleph"} style={{ height: "2rem", ...style }} />;
        default: return null;
    }
}

const sinnerMapping = {
    1: "Yi Sang",
    2: "Faust",
    3: "Don Quixote",
    4: "Ryōshū",
    5: "Meursault",
    6: "Hong Lu",
    7: "Heathcliff",
    8: "Ishmael",
    9: "Rodion",
    10: "Sinclair",
    11: "Outis",
    12: "Gregor"
}

function getSinnerIconSrc(num) {
    return `${ASSETS_ROOT}/sinners/${num}.png`;
}

function SinnerIcon({num, style={}}) {
    return <img src={getSinnerIconSrc(num)} alt={sinnerMapping[num]} title={sinnerMapping[num]} style={style} />
}

export { Icon, RarityImg, getSinnerIconSrc, SinnerIcon };
