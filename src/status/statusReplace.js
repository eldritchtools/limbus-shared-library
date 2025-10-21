import skillTags from "../data/skillTagsData";
import { Status } from "./status";

function replaceStatusVariables(templateText, includeTooltips = true) {
    const [statuses, statusesLoading] = useData("statuses");

    let text = templateText.replaceAll("[[", "[").replaceAll("]]", "]");
    let textPieces = [];
    let index = 0;

    while (true) {
        // Returns ["[variable]", index: number, input: string, groups: undefined]
        let match = text.match(/\[[a-zA-Z0-9_]+\]/);
        if (!match || match.index === undefined) {
            textPieces.push(<span key={index++}>{text}</span>);
            break; // No more variables to replace
        }

        textPieces.push(<span key={index++}>{text.slice(0, match.index)}</span>);
        text = text.slice(match.index + match[0].length);

        let varName = match[0].slice(1, -1);
        if (!statusesLoading && varName in statuses) {
            textPieces.push(<Status key={index++} id={varName} includeTooltip={includeTooltips} />)
        } else if (varName in skillTags) {
            if ("color" in skillTags[varName]) {
                textPieces.push(<span key={index++} style={{ color: skillTags[varName].color }}>{skillTags[varName].text}</span>)
            } else {
                textPieces.push(<span key={index++}>{skillTags[varName].text}</span>)
            }
        } else {
            textPieces.push(<span key={index++}>[{varName}]</span>);
        }
    }

    return <div style={{ display: "inline" }}>{textPieces}</div>;
}

export default replaceStatusVariables;