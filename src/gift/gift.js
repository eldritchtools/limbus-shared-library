import { Tooltip } from "react-tooltip";
import { ASSETS_ROOT } from "../paths";
import { themePacks } from "../data/mdData";
import replaceStatusVariables from "../status/statusReplace";
import { tooltipStyle } from "../styles";
import { useData } from "../dataProvider/DataProvider";
import { GiftModal } from "./GiftModal";
import * as React from "react";

const giftContainerStyle = { position: "relative", width: "64px", height: "64px" };
const giftBackgroundStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
const giftStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
const giftTierStyle = { position: "absolute", top: "5%", left: "5%", fontFamily: "'Archivo Narrow', sans-serif", fontWeight: "bold", fontSize: "24px", color: "#ffd84d", transform: "scaleY(1.4)" }
const giftKeywordStyle = { position: "absolute", bottom: "5%", right: "5%" };
const giftEnhanceStyle = { position: "absolute", top: "5%", right: "5%", fontWeight: "bold", color: "#ffd84d" };
const tooltipDescStyle = { display: "inline-block", fontSize: "1rem", lineHeight: "1.5", inlineSize: "50ch", textWrap: "wrap", whiteSpace: "pre-wrap" };

function resize(style, size) {
    return { ...style, width: `${size}px`, height: `${size}px` };
}

function rescaleFont(style, scale) {
    return { ...style, fontSize: `${24 * scale}px` }
}

function tierToString(tier) {
    switch (tier) {
        case "1": return "I";
        case "2": return "II";
        case "3": return "III";
        case "4": return "IV";
        case "5": return "V";
        case "EX": return "EX";
        default: return "";
    }
}

function GiftIcon({ gift, enhanceRank = 0, scale = 1 }) {
    const tier = tierToString(gift.tier);
    const size = 96 * scale;

    return <div style={resize(giftContainerStyle, size)}>
        <img src={`${ASSETS_ROOT}/ego_gift_background.png`} alt="" style={resize(giftBackgroundStyle, size)} />
        <img src={`${ASSETS_ROOT}/gifts/${"imageOverride" in gift ? gift["imageOverride"] : gift.names[0]}.png`} alt={gift.names[0]} title={gift.names[0]} style={resize(giftStyle, size * 0.75)} />
        <span style={rescaleFont(giftTierStyle, scale)}>{tier}</span>
        {enhanceRank > 0 ? <span style={rescaleFont(giftEnhanceStyle, scale*1.2)}>{"+".repeat(enhanceRank)}</span> : null}
        {gift.keyword !== "Keywordless" ? <img src={`${ASSETS_ROOT}/icons/${gift.keyword}.png`} alt="" style={resize(giftKeywordStyle, size * 0.3)} /> : null}
    </div>
}

function Gift({ id, gift = null, enhanceRank = 0, scale = 1, text = false, includeTooltip = true, expandable = true, expandOverride, setExpandOverride }) {
    const [gifts, giftsLoading] = useData("gifts");
    const [modalOpen, setModalOpen] = React.useState(false);
    const size = 96 * scale;

    let giftObject = gift;
    if (!giftObject) {
        if (giftsLoading) {
            return null;
        } else if (!(id in gifts)) {
            console.warn(`Gift ${id} not found.`);
            if (text) {
                return <span>Gift not found</span>;
            } else {
                return <span style={resize(giftContainerStyle, size)}>
                    <img src={`${ASSETS_ROOT}/ego_gift_background.png`} alt="" style={resize(giftBackgroundStyle, size)} />
                </span>
            }
        } else {
            giftObject = gifts[id];
        }
    }

    const props = {};
    if (includeTooltip) {
        props["data-tooltip-id"] = "limbus-shared-library-gift-tooltip"
        props["data-tooltip-content"] = `${giftObject.id}:${enhanceRank}`
    }

    if (expandable) {
        props.onClick = () => setModalOpen(true);
    }

    const handleModalClose = () => {
        setModalOpen(false);
        if (setExpandOverride) setExpandOverride(false);
    }

    if (text) {
        return <span>
            <span {...props}>{giftObject.names[enhanceRank]}</span>
            {expandable ? <GiftModal gift={giftObject} enhanceRank={enhanceRank} isOpen={modalOpen || expandOverride} onClose={handleModalClose} /> : null}
        </span>;
    } else {
        return <span>
            <span {...props}><GiftIcon gift={giftObject} enhanceRank={enhanceRank} scale={scale} /></span>
            {expandable ? <GiftModal gift={giftObject} enhanceRank={enhanceRank} isOpen={modalOpen || expandOverride} onClose={handleModalClose} /> : null}
        </span>;
    }
}

function TooltipContent({ giftId, enhanceRank }) {
    const [gifts, giftsLoading] = useData("gifts");
    if (!giftId || giftsLoading) return null;

    const gift = gifts[giftId];

    const exclusiveText = list => <div style={{ display: "flex", flexDirection: "column" }}>
        <br />
        <span>Exclusive Theme Packs:</span>
        {list.map(themePackId => <span>{themePacks[themePackId].name}</span>)}
    </div>

    return <div style={tooltipStyle}>
        <div style={{ display: "flex", flexDirection: "column", padding: "0.5rem" }}>
            <div style={{ marginBottom: "0.5rem", fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>{gift.names[enhanceRank]}</div>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <GiftIcon gift={gift} enhanceRank={enhanceRank} />
                    {gift.enhanceable ? <span>Enhanceable</span> : null}
                    {gift.hardonly ? <span style={{ color: "#f87171" }}>Hard Only</span> : null}
                </div>
                <div style={{ ...tooltipDescStyle, display: "flex", flexDirection: "column", textAlign: "left" }}>
                    <span>{replaceStatusVariables(gift.descs[enhanceRank], true)}</span>
                    {gift.exclusiveTo ? exclusiveText(gift.exclusiveTo) : null}
                </div>
            </div>
            <div style={{ borderTop: "1px #444 dashed", fontSize: "0.8rem", color: "#999", textAlign: "center" }}>
                Click gift to expand
            </div>
        </div>
    </div>
}

function GiftTooltip() {
    return <Tooltip
        id={"limbus-shared-library-gift-tooltip"}
        render={({ content }) => {
            if (!content) return null;
            const [id, rank] = content.split(":");
            return <TooltipContent giftId={id} enhanceRank={Number(rank)} />
        }}
        getTooltipContainer={() => document.body}
        style={{ backgroundColor: "transparent", zIndex: "9999" }}
    />
}


export { Gift, GiftTooltip };