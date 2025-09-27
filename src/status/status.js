import { Tooltip } from "react-tooltip";
import { useLimbusData } from "../LimbusProvider/LimbusProvider";
import { ASSETS_ROOT } from "../paths";

const iconStyle = { display: "inline-block", width: "1.5rem", height: "1.5rem", marginLeft: "-1px", marginRight: "2px", transform: "translateY(25%)" };
const nameStyle = { display: "flex", fontSize: "1rem" };
const tooltipIconStyle = { display: "inline-block", width: "1.5rem", height: "1.5rem", marginRight: "4px" };
const tooltipDescStyle = {display: "inline-block", fontSize: "1rem", lineHeight: "1.5", inlineSize: "50ch", textWrap: "wrap", whiteSpace: "pre-wrap"};

function getNameStyle(type) {
    switch (type) {
        case "Positive": return { ...nameStyle, color: "yellow" };
        case "Negative": return { ...nameStyle, color: "red" };
        case "Neutral": return { ...nameStyle, color: "darkgoldenrod" };
        default: return nameStyle;
    }
}

function Status({ id, includeTooltip = true, includeName = true }) {
    const { statuses } = useLimbusData();
    if (!(id in statuses)) {
        console.warn(`Status ${id} not found.`);
        return <span className="error">Unknown status: {id}</span>;
    }

    const status = statuses[id];
    const src = "imageOverride" in status ? status.imageOverride : status.name;

    return (
        <span 
            data-tooltip-id={includeTooltip ? "limbus-shared-library-status-tooltip" : undefined} 
            data-tooltip-content={includeTooltip ? {...status, src: src} : undefined}
            style={{ display: "inline-block" }}
        >
            <img src={`${ASSETS_ROOT}/statuses/${src}`} alt={status.name} style={iconStyle} />
            {includeName ? <span style={getNameStyle(status.buffType)}>{status.name}</span> : null}
        </span>
    )
}

function StatusTooltip() {
    const tooltipContent = status => <div style={{ outline: "1px #ddd solid", backgroundColor: "black", textAlign: "left" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "1rem", fontWeight: "bold" }}>
            <img src={`${ASSETS_ROOT}/statuses/${status.src}`} alt={status.name} style={tooltipIconStyle} />
            <span>{status.name}</span>
        </div>
        <div style={tooltipDescStyle}>
            <span>{status.desc}</span>
        </div>
    </div>

    return <Tooltip
        id={"limbus-shared-library-status-tooltip"}
        render={({ content }) => tooltipContent(content) }
        getTooltipContainer={() => document.body}
    />
}

export { Status, StatusTooltip };