import { Tooltip } from "react-tooltip";
import { ASSETS_ROOT } from "../paths";
import { tooltipStyle } from "../styles";
import { useData } from "../dataProvider/DataProvider";

const iconStyle = { display: "inline-block", width: "1.5rem", height: "1.5rem", marginLeft: "-1px", marginRight: "2px", verticalAlign: "middle", transform: "translateY(-0.1rem)"};
const nameStyle = { display: "inline", fontSize: "1rem" };
const tooltipIconStyle = { display: "inline-block", width: "1.5rem", height: "1.5rem", marginRight: "4px" };
const tooltipDescStyle = { display: "inline-block", fontSize: "1rem", lineHeight: "1.5", maxWidth: "75rem", textWrap: "wrap", whiteSpace: "pre-wrap", textAlign: "start" };

function getNameStyle(type) {
    switch (type) {
        case "Positive": return { ...nameStyle, color: "yellow" };
        case "Negative": return { ...nameStyle, color: "red" };
        case "Neutral": return { ...nameStyle, color: "darkgoldenrod" };
        default: return nameStyle;
    }
}

function Status({ id, status=null, includeTooltip = true, includeName = true }) {
    const [statuses, statusesLoading] = useData("statuses");

    const statusObject = status;
    if (!statusObject) {
        if (statusesLoading) {
            return null;
        } else if (!(id in statuses)) {
            console.warn(`Status ${id} not found.`);
            return <span className="error">Unknown status: {id}</span>;
        } else {
            statusObject = statuses[id];
        }
    }

    const src = "imageOverride" in statusObject ? statusObject.imageOverride : statusObject.name;

    return (
        <span
            data-tooltip-id={includeTooltip ? "limbus-shared-library-status-tooltip" : undefined}
            data-tooltip-content={includeTooltip ? id : undefined}
            style={{ display: "inline" }}
        >
            <img src={`${ASSETS_ROOT}/statuses/${src}.png`} alt={statusObject.name} style={iconStyle} />
            {includeName ? <span style={getNameStyle(statusObject.buffType)}>{statusObject.name}</span> : null}
        </span>
    )
}

function TooltipContent({ status }) {
    if(!status) return null;
    const src = "imageOverride" in status ? status.imageOverride : status.name;

    return <div style={tooltipStyle}>
        <div style={{display: "flex", flexDirection: "column", padding: "0.5rem"}}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "1rem", fontWeight: "bold" }}>
                <img src={`${ASSETS_ROOT}/statuses/${src}.png`} alt={status.name} style={tooltipIconStyle} />
                <span>{status.name}</span>
            </div>
            <div style={tooltipDescStyle}>
                <span>{status.desc}</span>
            </div>
        </div>
    </div>;
}

function StatusTooltip() {
    const [statuses, statusesLoading] = useData("statuses");

    return <Tooltip
        id={"limbus-shared-library-status-tooltip"}
        render={({ content }) => <TooltipContent status={statusesLoading ? null : statuses[content]} />}
        getTooltipContainer={() => document.body}
        style={{ backgroundColor: "transparent", zIndex: "9999" }}
    />
}

export { Status, StatusTooltip };
