import statuses from "../data/statusesData";
import { Status } from "./status";

function replaceStatusVariables(templateText, includeTooltips=true) {
    let text = templateText;
    let textPieces = [];

    while (true) {
        // Returns ["[variable]", index: number, input: string, groups: undefined]
        let match = text.match(/\[[a-zA-Z0-9]+\]/);
        if (!match || match.index === undefined) {
            textPieces.push(<span>{text}</span>);
            break; // No more variables to replace
        }
        
        textPieces.push(<span>{text.slice(0, match.index)}</span>);
        text = text.slice(match.index + match[0].length);

        let varName = match[0].slice(1, -1);
        if (varName in statuses)
            textPieces.push(<Status id={varName} includeTooltip={includeTooltips} />)
        else
            textPieces.push(<span>[{varName}]</span>)
    }
    
    return <span>{textPieces}</span>;
}

export default replaceStatusVariables;