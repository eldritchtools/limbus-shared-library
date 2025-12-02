import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";

function getIdentityImgSrc(identityObject, uptie = 4) {
    const type = (uptie > 2 || identityObject.tags.includes("Base Identity")) ? "gacksung" : "normal";
    return `${ASSETS_ROOT}/identities/${identityObject.id}_${type}_profile.png`;
}

function IdentityImg({ id, identity = null, uptie, displayName = false, scale = 1, size, width }) {
    const [identities, identitiesLoading] = useData("identities_mini");

    let identityObject = identity;
    if (!identityObject) {
        if (identitiesLoading) {
            return null;
        } else if (!(id in identities)) {
            console.warn(`Identity ${id} not found.`);
            return null;
        } else {
            identityObject = identities[id];
        }
    }

    const scaledStyle = width ?
        { width: width, height: "auto" } :
        size ?
            { width: `${size}px`, height: `${size}px` } :
            { width: `${256 * scale}px`, height: `${256 * scale}px` };

    const img = <img src={getIdentityImgSrc(identityObject, uptie)} alt={identityObject.name} title={identityObject.name} style={scaledStyle} />

    if (displayName) {
        return <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: scaledStyle.width }}>
            {img}
            <span>{identityObject.name}</span>
        </div>
    } else {
        return img;
    }
}

export { IdentityImg, getIdentityImgSrc };