import { useEffect, useState } from "react";
import { Gift } from "./gift";
import replaceStatusVariables from "../status/statusReplace";
import FusionRecipe from "./FusionRecipe";
import { getFloorsForPack, ThemePackImg } from "../themePack/themePack";

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
    minWidth: "300px",
    maxWidth: "75%",
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

function GiftDisplay({ gift }) {
    const [enhanceLevel, setEnhanceLevel] = useState(0);
    let level = Math.min(enhanceLevel, gift.descs.length - 1);

    return <div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "0.5rem" }}>
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "start" }}>{gift.names[level]}</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Gift gift={gift} includeTooltip={false} expandable={false} />
                {gift.enhanceable ? <div style={{ display: "grid", gridTemplateColumns: `repeat(${gift.names.length}, 1fr)` }}>
                    {Array.from({ length: gift.names.length }, (_, index) => <div style={{ ...buttonStyle, backgroundColor: enhanceLevel === index ? "#3f3f3f" : "#1f1f1f" }} onClick={() => setEnhanceLevel(index)}>
                        {index === 0 ? "-" : <span style={iconTextStyle}>{"+".repeat(index)}</span>}
                    </div>)}
                </div> : null
                }
            </div>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "inline-block", fontSize: "1rem", lineHeight: "1.5", textWrap: "wrap", whiteSpace: "pre-wrap", textAlign: "start" }}>
                    <span>{replaceStatusVariables(gift.descs[level], true)}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                    {
                        gift.exclusiveTo ?
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "start" }}>Exclusive Theme Packs</span>
                                <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                                    {gift.exclusiveTo.map(packId => {
                                        const { normal, hard } = getFloorsForPack(packId);
                                        return <div style={{ display: "flex", flexDirection: "column" }}>
                                            <ThemePackImg id={packId} displayName={true} scale={0.5} />
                                            <div style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 1fr" }} >
                                                <div style={{ color: "#4ade80" }}>Normal</div>
                                                <div style={{ color: "#f87171" }}>Hard</div>
                                                <div>{normal.length ? normal.map(f => `F${f}`).join(", ") : "None"}</div>
                                                <div>{hard.length ? hard.map(f => `F${f}`).join(", ") : "None"}</div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div> : null
                    }
                    {
                        gift.recipes ?
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <span style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "start" }}>Fusion Recipes</span>
                                {gift.recipes.map(recipe => <FusionRecipe recipe={{ ingredients: recipe }} includeProduct={false} />)}
                            </div> : null
                    }
                </div>
            </div>
        </div>
    </div>
}

export function GiftModal({ gift, isOpen, onClose }) {
    useEffect(() => {
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

    return (
        <div style={overlayStyle} onClick={onClose}>
            <div style={contentStyle} onClick={(e) => e.stopPropagation()}>
                <button style={closeStyle} onClick={onClose}>
                    ✕
                </button>
                <GiftDisplay gift={gift} />
            </div>
        </div>
    );
}
