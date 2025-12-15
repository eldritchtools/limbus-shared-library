const tierMapping = {
    1: "I", "1": "I",
    2: "II", "2": "II",
    3: "III", "3": "III",
    4: "IV", "4": "IV",
    5: "V", "5": "V",
    "EX": "EX"
}

function TierComponent({ tier, scale = 1, scaleY = 1.2 }) {
    return <span style={{ display: "inline-block", fontFamily: "'Archivo Narrow', sans-serif", fontWeight: "bold", fontSize: `${24 * scale}px`, color: "#ffd84d", transform: `scaleY(${scaleY})` }}>
        {tierMapping[tier] ?? ""}
    </span>
}

export { TierComponent };