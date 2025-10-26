import { ASSETS_ROOT } from "../paths";

const keywords = ["Burn", "Bleed", "Tremor", "Rupture", "Sinking", "Poise", "Charge", "Slash", "Pierce", "Blunt", "Keywordless"];
const buttonStyle = {backgroundColor: "#1f1f1f", color: "#ddd", border: "1px #aaa solid", padding: "4px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"};

const caseMapping = {
    "slash": "Slash",
    "pierce": "Pierce",
    "blunt": "Blunt",
    "guard": "Guard",
    "evade": "Evade",
    "counter": "Counter"
}

function convertCase(id) {
    return caseMapping[id] ?? id;
}

function KeywordIcon({ id, size = 32 }) {
    return <img src={`${ASSETS_ROOT}/icons/${convertCase(id)}.png`} alt={id} title={id} style={{ width: `${size}px`, height: `${size}px` }} />;
}

function KeywordSelector({ value, onChange, multiLine = false }) {
    const handleKeywordToggle = (keyword, selected) => {
        if (selected)
            onChange(value.filter(x => x !== keyword));
        else
            onChange([...value, keyword]);
    }

    const clearKeywords = () => {
        onChange([]);
    }

    const toggleComponent = (keyword, selected, icon=true) => {
        return <div style={{...buttonStyle, backgroundColor: selected ? "#3f3f3f" : "#1f1f1f", transiton: "background-color 0.2s, border-color 0.2s"}}
            onClick={() => handleKeywordToggle(keyword, selected)}>
            {icon ? <KeywordIcon id={keyword} /> : keyword}
        </div>
    }

    const keywordsComponents = keywords.slice(0, -1).map(keyword => toggleComponent(keyword, value.includes(keyword)))
    const keywordlessComponent = toggleComponent(keywords[keywords.length-1], value.includes(keywords[keywords.length-1]), false)
    const clearAllComponent = <div style={buttonStyle} onClick={clearKeywords}>Clear All</div>

    return multiLine ? <div style={{display: "grid", gridTemplateColumns: "1fr"}}>
        <div style={{display: "grid", gridTemplateColumns: "repeat(5, 1fr)"}}>
            {keywordsComponents}
        </div>
        <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
            {keywordlessComponent}
            {clearAllComponent}
        </div>
    </div> :
    <div style={{display: "flex"}}>
        {keywordsComponents}
        {keywordlessComponent}
        {clearAllComponent}
    </div>
}

export { keywords, KeywordIcon, KeywordSelector };
