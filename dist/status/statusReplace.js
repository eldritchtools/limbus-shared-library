import statuses from "../data/statusesData";
import { Status } from "./status";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function replaceStatusVariables(templateText) {
  var includeTooltips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var text = templateText.replace("[[", "[").replace("]]", "]");
  var textPieces = [];
  while (true) {
    // Returns ["[variable]", index: number, input: string, groups: undefined]
    var match = text.match(/\[[a-zA-Z0-9_]+\]/);
    if (!match || match.index === undefined) {
      textPieces.push(/*#__PURE__*/_jsx("span", {
        children: text
      }));
      break; // No more variables to replace
    }
    textPieces.push(/*#__PURE__*/_jsx("span", {
      children: text.slice(0, match.index)
    }));
    text = text.slice(match.index + match[0].length);
    var varName = match[0].slice(1, -1);
    if (varName in statuses) textPieces.push(/*#__PURE__*/_jsx(Status, {
      id: varName,
      includeTooltip: includeTooltips
    }));else textPieces.push(/*#__PURE__*/_jsxs("span", {
      children: ["[", varName, "]"]
    }));
  }
  return /*#__PURE__*/_jsx("div", {
    style: {
      display: "inline"
    },
    children: textPieces
  });
}
export default replaceStatusVariables;