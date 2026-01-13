import { Tooltip } from "react-tooltip";
import { ASSETS_ROOT } from "../paths";
import { tooltipStyle } from "../styles";
import { useData } from "../dataProvider/DataProvider";
import { useState } from "react";

const iconStyle = { display: "inline-block", width: "1.5rem", height: "1.5rem", marginLeft: "-1px", marginRight: "2px", verticalAlign: "middle", transform: "translateY(-0.1rem)" };
const nameStyle = { display: "inline", fontSize: "1rem" };
const tooltipIconStyle = { display: "inline-block", width: "1.5rem", height: "1.5rem", marginRight: "4px" };
const tooltipDescStyle = { display: "inline-block", fontSize: "1rem", lineHeight: "1.5", maxWidth: "75rem", textWrap: "wrap", whiteSpace: "pre-wrap", textAlign: "start" };

function getStatusImgSrc(status, fallback = null) {
    const src = fallback ?? ("imageOverride" in status ? status.imageOverride : status.name);
    return `${ASSETS_ROOT}/statuses/${src}.png`;
}

function getNameStyle(type) {
    switch (type) {
        case "Positive": return { ...nameStyle, color: "yellow" };
        case "Negative": return { ...nameStyle, color: "red" };
        case "Neutral": return { ...nameStyle, color: "darkgoldenrod" };
        default: return nameStyle;
    }
}

function StatusIcon({ id, status, style }) {
    const [fallback, setFallback] = useState(false);
    const [iconVisible, setIconVisible] = useState(true);

    if (!iconVisible) return null;
    const src = getStatusImgSrc(status, fallback ? (id ?? status.id) : null);

    const handleError = () => {
        if (!fallback) {
            setFallback(true);
        } else {
            setIconVisible(false);
        }
    }

    return <img src={src} alt={status.name} style={style} onError={handleError} />
}

function Status({ id, status = null, includeTooltip = true, includeName = true, iconStyleOverride = {}, nameStyleOverride = {} }) {
    const [statuses, statusesLoading] = useData("statuses");

    let statusObject = status;
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

    return (
        <span
            data-tooltip-id={includeTooltip ? "limbus-shared-library-status-tooltip" : undefined}
            data-tooltip-content={includeTooltip ? id : undefined}
            style={{ display: "inline" }}
            role="button"
            tabIndex={0}
        >
            <StatusIcon id={id} status={statusObject} style={{ ...iconStyle, ...iconStyleOverride }} />
            {includeName ? <span style={{ ...getNameStyle(statusObject.buffType), ...nameStyleOverride }}>{statusObject.name}</span> : null}
        </span>
    )
}

function StatusTooltipContent({ status }) {
    return <div style={tooltipStyle}>
        <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "1rem", fontWeight: "bold" }}>
                <StatusIcon status={status} style={tooltipIconStyle} />
                <span>{status.name}</span>
            </div>
            <div style={tooltipDescStyle}>
                <span>{status.desc}</span>
            </div>
        </div>
    </div>;
}

function TooltipLoader({ statusId }) {
    const [statuses, statusesLoading] = useData("statuses");
    if (!statusId || statusesLoading) return null;

    return <StatusTooltipContent status={statuses[statusId]} />
}

function StatusTooltip() {
    return <Tooltip
        id={"limbus-shared-library-status-tooltip"}
        render={({ content }) => <TooltipLoader statusId={content} />}
        getTooltipContainer={() => document.body}
        style={{ backgroundColor: "transparent", zIndex: "9999" }}
    />
}

export { Status, StatusTooltip, getStatusImgSrc };
