import { Tooltip } from "react-tooltip";
import { useLimbusData } from "../LimbusProvider/LimbusProvider";
import { ASSETS_ROOT } from "../paths";

const giftContainerStyle = { position: "relative", width: "64px", height: "64px" };
const giftBackgroundStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
const giftStyle = { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
const giftTierStyle = { position: "absolute", top: "5%", left: "5%", fontFamily: "'Archivo Narrow', sans-serif", fontWeight: "bold", fontSize: "24px", color: "#ffd84d", transform: "scaleY(1.4)" }
const giftKeywordStyle = { position: "absolute", bottom: "5%", right: "5%" };
const giftEnhanceStyle = { position: "absolute", top: "5%", right: "5%" };
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

function GiftIcon(gift, enhanceRank = 0, scale = 1) {
    const tier = tierToString(gift.tier);
    const size = 96 * scale;

    return <div style={resize(giftContainerStyle, size)}>
        <img src={`${ASSETS_ROOT}/ego_gift_background.png`} alt="" style={resize(giftBackgroundStyle, size)} />
        <img src={`${ASSETS_ROOT}/ego_gifts/${"imageOverride" in gift ? gift["imageOverride"] : gift.name}.png`} alt={gift.name} title={gift.name} style={resize(giftStyle, size * 0.75)} />
        <span style={rescaleFont(giftTierStyle, scale)}>{tier}</span>
        {enhanceRank > 0 ? <span style={rescaleFont(giftEnhanceStyle, scale)}>{"+".repeat(enhanceRank)}</span> : null}
        {gift.keyword !== "Keywordless" ? <img src={`${ASSETS_ROOT}/icons/${gift.keyword}.png`} alt="" style={resize(giftKeywordStyle, size * 0.3)} /> : null}
    </div>
}

function Gift({ id, enhanceRank = 0, scale = 1, includeTooltip = true }) {
    const { gifts } = useLimbusData();
    const size = 96 * scale;

    if (!(id in gifts)) {
        console.warn(`Gift ${id} not found.`);
        return <div style={resize(giftContainerStyle, size)}>
            <img src={`${ASSETS_ROOT}/ego_gift_background.png`} alt="" style={resize(giftBackgroundStyle, size)} />
        </div>
    }

    const gift = gifts[id];

    if (includeTooltip) {
        return <div data-tooltip-id={"limbus-shared-library-gift-tooltip"} data-tooltip-content={id}>
            <GiftIcon gift={gift} enhanceRank={enhanceRank} scale={scale} />
        </div>
    } else {
        return <GiftIcon gift={gift} enhanceRank={enhanceRank} scale={scale} />
    }
}

function TooltipContent({ gift }) {
    const { themePacks } = useLimbusData();

    const exclusiveToText = list => <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Exclusive To</span>
        {list.map(themePackId => <span>{themePacks[themePackId].name}</span>)}
    </div>

    return <div style={{ outline: "1px #ddd solid", backgroundColor: "black", textAlign: "left", display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "1rem", fontWeight: "bold" }}>{gift.names[0]}</div>
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <GiftIcon gift={{ gift }} />
                {gift.enhanceable ? <span>Enhanceable</span> : null}
            </div>
            <div style={{ ...tooltipDescStyle, display: "flex", flexDirection: "column" }}>
                <span>{gift.descs[0]}</span>
                {gift.exclusiveTo ? exclusiveToText(gift.exclusiveTo) : null}
            </div>
        </div>
    </div>
}

function GiftTooltip() {
    const { gifts } = useLimbusData();

    return <Tooltip
        id={"limbus-shared-library-gift-tooltip"}
        render={({ content }) => <TooltipContent gift={gifts[content]} />}
        getTooltipContainer={() => document.body}
    />
}


export { Gift, GiftTooltip };