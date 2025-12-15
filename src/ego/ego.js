import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";
import { RarityImg } from "../ImageHandler";
import { affinityColorMapping } from "../utils";
import { TierComponent } from "../TierComponent";

function EgoImgMain({ ego, type, banner, displayName, displayRarity, threadspin, style }) {
    const src = `${ASSETS_ROOT}/egos/${ego.id}_${type}_profile.png`;

    style.aspectRatio = banner ? "4/1" : "1/1";
    style.height = null;
    style.objectFit = "cover";
    const img = <img src={src} alt={ego.name} title={ego.name} style={style} />

    if (displayName || displayRarity) {
        return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", width: style.width, aspectRatio: style.aspectRatio, containerType: "size" }}>
            {img}
            {displayRarity ?
                <RarityImg rarity={ego.rank.toLowerCase()} style={{ position: "absolute", top: "4px", left: "4px", height: "1.5rem", objectFit: "contain", pointerEvents: "none" }} /> :
                null}
            {threadspin ? (
                banner ? <div style={{
                    position: "absolute", right: "4px", textAlign: "right",
                    textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000"
                }}>
                    <TierComponent tier={threadspin} />
                </div> : <div style={{
                    position: "absolute", top: "4px", right: "4px", textAlign: "right",
                    textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000"
                }}>
                    <TierComponent tier={threadspin} />
                </div>) : null}
            {displayName ? (
                banner ? <div style={{
                    position: "absolute", fontSize: "0.75rem", maxHeight: "100%", overflow: "hidden", textWrap: "balance", textAlign: "center",
                    textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000",
                    color: affinityColorMapping[ego.affinity || ego.awakeningType.affinity]
                }}>
                    {ego.name}
                </div> : <div style={{
                    position: "absolute", bottom: "4px", right: "4px", maxWidth: "100%", maxHeight: "70%", overflow: "hidden",
                    display: "block", textAlign: "right", color: "#ddd", fontWeight: "600", lineHeight: "1.1", textWrap: "balance",
                    textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000",
                    fontSize: `clamp(0.6rem, calc(10cqw - (${ego.name.length} * 0.02px)), 1rem)`
                }}>
                    {ego.name}
                </div>) : null}
        </div>
    } else {
        return img;
    }

}

function EgoImgFetch({ id, type, banner, displayName, displayRarity, threadspin, style }) {
    const [egos, egosLoading] = useData("egos_mini");
    if (egosLoading) {
        return null;
    } else if (!(id in egos)) {
        console.warn(`Ego ${id} not found.`);
        return null;
    } else {
        return <EgoImgMain ego={egos[id]} type={type} banner={banner} displayName={displayName} displayRarity={displayRarity} threadspin={threadspin} style={style} />
    }

}

function EgoImg({ id, ego = null, type, banner = false, displayName = false, displayRarity = false, threadspin = null, scale, size, width, style = {} }) {
    const newStyle = width ?
        { width: width, height: "auto", ...style } :
        size ?
            { width: `${size}px`, height: `${size}px`, ...style } :
            scale ?
                { width: `${256 * scale}px`, height: `${256 * scale}px`, ...style } :
                { width: "100%", height: "auto", ...style };

    if (ego) {
        return <EgoImgMain ego={ego} type={type} banner={banner} displayName={displayName} displayRarity={displayRarity} threadspin={threadspin} style={newStyle} />
    } else {
        return <EgoImgFetch id={id} type={type} banner={banner} displayName={displayName} displayRarity={displayRarity} threadspin={threadspin} style={newStyle} />
    }
}

export { EgoImg };
