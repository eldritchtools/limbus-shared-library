import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";
import { RarityImg } from "../ImageHandler";

function getIdentityImgSrc(identity, uptie = 4) {
    const type = (uptie > 2 || identity.tags.includes("Base Identity")) ? "gacksung" : "normal";
    return `${ASSETS_ROOT}/identities/${identity.id}_${type}_profile.png`;
}

function IdentityImgMain({ identity, uptie, displayName, displayRarity, style }) {
    const img = <img src={getIdentityImgSrc(identity, uptie)} alt={identity.name} title={identity.name} style={{ ...style, objectFit: "cover" }} />

    if (displayName || displayRarity) {
        return <div style={{ position: "relative", width: style.width, aspectRatio: "1/1", containerType: "size" }}>
            {img}
            {displayRarity ?
                <RarityImg rarity={identity.rank} style={{ position: "absolute", top: "4px", left: "4px", height: "2rem", objectFit: "contain", pointerEvents: "none" }} /> :
                null}
            {displayName ? <div style={{
                position: "absolute", bottom: "4px", right: "4px", maxWidth: "100%", maxHeight: "70%", overflow: "hidden",
                display: "block", textAlign: "right", color: "#ddd", fontWeight: "600", lineHeight: "1.1", textWrap: "balance",
                textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000",
                fontSize: `clamp(0.6rem, calc(10cqw - (${identity.name.length} * 0.02px)), 1rem)`
            }}>
                {identity.name}
            </div> : null}
        </div>
    } else {
        return img;
    }
}

function IdentityImgFetch({ id, uptie, displayName, displayRarity, style }) {
    const [identities, identitiesLoading] = useData("identities_mini");

    if (identitiesLoading) {
        return null;
    } else if (!(id in identities)) {
        console.warn(`Identity ${id} not found.`);
        return null;
    } else {
        return <IdentityImgMain identity={identities[id]} uptie={uptie} displayName={displayName} displayRarity={displayRarity} style={style} />
    }
}

function IdentityImg({ id, identity = null, uptie, displayName = false, displayRarity = false, scale, size, width, style = {} }) {
    const newStyle = width ?
        { width: width, height: "auto", ...style } :
        size ?
            { width: `${size}px`, height: `${size}px`, ...style } :
            scale ?
                { width: `${256 * scale}px`, height: `${256 * scale}px`, ...style } :
                { width: "100%", height: "auto", ...style };

    if (identity) {
        return <IdentityImgMain identity={identity} uptie={uptie} displayName={displayName} displayRarity={displayRarity} style={newStyle} />
    } else {
        return <IdentityImgFetch id={id} uptie={uptie} displayName={displayName} displayRarity={displayRarity} style={newStyle} />
    }
}

export { IdentityImg, getIdentityImgSrc };