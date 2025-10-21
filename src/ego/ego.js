import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";

function EgoImg({ id, ego = null, type, displayName = false, scale = 1 }) {
    const [egos, egosLoading] = useData("egos_mini");

    let egoObject = ego;
    if (!egoObject) {
        if (egosLoading) {
            return null;
        } else if (!(id in egos)) {
            console.warn(`Ego ${id} not found.`);
            return null;
        } else {
            egoObject = egos[id];
        }
    }

    const scaledStyle = { width: `${256 * scale}px`, height: `${256 * scale}px` };
    const img = <img src={`${ASSETS_ROOT}/egos/${egoObject.id}_${type}_profile.png`} alt={egoObject.name} title={egoObject.name} style={scaledStyle} />

    if (displayName) {
        return <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: scaledStyle.width }}>
            {img}
            <span>{egoObject.name}</span>
        </div>
    } else {
        return img;
    }
}

export { EgoImg };