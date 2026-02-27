import * as React from "react";
import { Gift } from "./gift";
import ReplacedStatusesText from "../status/statusReplace";
import FusionRecipe from "./FusionRecipe";
import { useFloorsForPack, ThemePackImg } from "../themePack/themePack";
import { createPortal } from "react-dom";
import { affinityColorMapping } from "../utils";

const overlayStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1000"
};

const contentStyle = {
    background: "black",
    padding: "1rem",
    borderRadius: "0.5rem",
    maxWidth: "min(90%, 1600px)",
    border: "1px #aaa solid",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
};

const closeStyle = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    background: "transparent",
    border: "none",
    fontSize: "1.25rem",
    cursor: "pointer"
}

const buttonStyle = { border: "1px #aaa solid", padding: "4px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transiton: "background-color 0.2s, border-color 0.2s" };
const iconTextStyle = { fontFamily: "'Archivo Narrow', sans-serif", fontWeight: "bold", fontSize: "20px", color: "#ffd84d" };

function ThemePackWithFloors({ id, scale }) {
    const { normal, hard } = useFloorsForPack(id);
    return <div style={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
        <ThemePackImg id={id} displayName={true} scale={0.5 * scale} />
        <div style={{ display: "grid", width: `${190 * scale}px`, gridTemplateColumns: "1fr 1fr" }} >
            <div style={{ color: "#4ade80" }}>Normal</div>
            <div style={{ color: "#f87171" }}>Hard</div>
            <div>{normal.length ? normal.map(f => `F${f}`).join(", ") : "None"}</div>
            <div>{hard.length ? hard.map(f => `F${f}`).join(", ") : "None"}</div>
        </div>
    </div>
}

function GiftDisplay({ gift, scale = 1, enhanceRank }) {
    const [enhanceLevel, setEnhanceLevel] = React.useState(enhanceRank);
    let level = Math.min(enhanceLevel, gift.descs.length - 1);

    return <div style={{ display: "grid", gridTemplateRows: "auto 1fr", width: "100%", gap: "0.5rem", maxHeight: "80vh", overflow: "hidden" }}>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "start", color: affinityColorMapping[gift.affinity] }}>
            {gift.names[level]}
        </div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem", minHeight: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.2rem", flex: "0 0 auto" }}>
                <div>
                    <Gift gift={gift} includeTooltip={false} enhanceRank={enhanceLevel} expandable={false} scale={scale} />
                </div>
                {gift.enhanceable ? <div style={{ display: "grid", gridTemplateColumns: `repeat(${gift.names.length}, 2rem)` }}>
                    {Array.from({ length: gift.names.length }, (_, index) =>
                        <div key={index}
                            style={{ ...buttonStyle, backgroundColor: enhanceLevel === index ? "#3f3f3f" : "#1f1f1f" }}
                            onClick={() => setEnhanceLevel(index)}
                        >
                            {index === 0 ? "-" : <span style={iconTextStyle}>{"+".repeat(index)}</span>}
                        </div>
                    )}
                </div> : null
                }
                {gift.fusion ? <span style={{ color: "#facc15" }}>Fusion Only</span> : null}
                {gift.hardonly ? <span style={{ color: "#f87171" }}>Hard Only</span> : null}
                {gift.cursedPair ?
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <span><span style={{ color: "#38bdf8" }}>Blessed</span> Pair</span>
                        <Gift id={gift.cursedPair} includeTooltip={true} expandable={true} scale={scale} />
                    </div> : null}
                {gift.blessedPair ?
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <span><span style={{ color: "#a78bfa" }}>Cursed</span> Pair</span>
                        <Gift id={gift.blessedPair} includeTooltip={true} expandable={true} scale={scale} />
                    </div> : null}
            </div>
            <div style={{ flex: "1 1 0", minHeight: 0, overflowY: "auto" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "inline-block", fontSize: "1rem", lineHeight: "1.5", textWrap: "wrap", whiteSpace: "pre-wrap", textAlign: "start" }}>
                        <ReplacedStatusesText templateText={gift.descs[level]} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "1rem" }}>
                        {
                            gift.exclusiveTo ?
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "start" }}>Exclusive Theme Packs</span>
                                    <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem", maxWidth: "calc(100vw - 100px)", overflowX: "auto" }}>
                                        {gift.exclusiveTo.map(packId => <ThemePackWithFloors key={packId} id={packId} scale={scale} />)}
                                    </div>
                                </div> : null
                        }
                        {
                            gift.recipes ?
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "start" }}>Fusion Recipes</span>
                                    <div style={{ overflowX: "auto", overflowY: "hidden" }}>
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            {gift.recipes.map((recipe, i) => <FusionRecipe key={i} recipe={{ ingredients: recipe }} includeProduct={false} scale={scale} />)}
                                        </div>
                                    </div>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export function GiftModal({ gift, enhanceRank, scale = 1, isOpen, onClose }) {
    React.useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div style={overlayStyle} onClick={onClose}>
            <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
                <button style={closeStyle} onClick={onClose}>
                    ✕
                </button>
                <GiftDisplay gift={gift} scale={scale} enhanceRank={enhanceRank} />
            </div>
        </div>, document.body);
}
