import { ASSETS_ROOT } from "../paths";
import identities from "../data/identitiesData";

function IdentityImg({ id, identity = null, uptie, displayName = false, scale = 1 }) {
    let identityObject = identity;
    if (!identityObject) {
        if (!(id in identities)) {
            console.warn(`Identity ${id} not found.`);
            return null;
        } else {
            identityObject = identities[id];
        }
    }

    const scaledStyle = { width: `${256 * scale}px`, height: `${256 * scale}px` };
    const type = (uptie > 2 || identityObject.tags.includes("Base Identity")) ? "gacksung" : "normal";
    const img = <img src={`${ASSETS_ROOT}/identities/${identity.id}_${type}_profile.png`} alt={identity.name} title={identity.name} style={scaledStyle} />

    if (displayName) {
        return <div style={{ display: "flex", flexDirection: "column", textAlign: "center", width: scaledStyle.width }}>
            {img}
            <span>{identity.name}</span>
            <span>{identity.sinner}</span>
        </div>
    } else {
        return img;
    }
}

export { IdentityImg };