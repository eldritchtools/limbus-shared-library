import { ASSETS_ROOT } from "../paths";

const keywords = ["Burn", "Bleed", "Tremor", "Rupture", "Sinking", "Poise", "Charge", "Slash", "Pierce", "Blunt", "Keywordless"];

const caseMapping = {
    "slash": "Slash",
    "pierce": "Pierce",
    "blunt": "Blunt",
    "guard": "Guard",
    "evade": "Evade",
    "counter": "Counter"
}

function convertCase(id) {
    return caseMapping[id] ?? id;
}

function KeywordIcon({ id, size = 32 }) {
    return <img src={`${ASSETS_ROOT}/icons/${convertCase(id)}.png`} alt={id} title={id} style={{ width: `${size}px`, height: `${size}px` }} />;
}

export { keywords, KeywordIcon };
