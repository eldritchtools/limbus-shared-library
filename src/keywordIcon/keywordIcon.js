import { ASSETS_ROOT } from "../paths";

function KeywordIcon({ id, size=32 }) {
    return <img src={`${ASSETS_ROOT}/icons/${id}.png`} alt={id} title={id} style={{width: `${size}px`, height: `${size}px`}} />;
}

export default KeywordIcon;