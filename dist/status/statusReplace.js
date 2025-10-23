function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import skillTags from "../data/skillTagsData";
import { useData } from "../dataProvider/DataProvider";
import { Status } from "./status";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function replaceStatusVariables(templateText) {
  var includeTooltips = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var _useData = useData("statuses"),
    _useData2 = _slicedToArray(_useData, 2),
    statuses = _useData2[0],
    statusesLoading = _useData2[1];
  var text = templateText.replaceAll("[[", "[").replaceAll("]]", "]");
  var textPieces = [];
  var index = 0;
  while (true) {
    // Returns ["[variable]", index: number, input: string, groups: undefined]
    var match = text.match(/\[[a-zA-Z0-9_]+\]/);
    if (!match || match.index === undefined) {
      textPieces.push(/*#__PURE__*/_jsx("span", {
        children: text
      }, index++));
      break; // No more variables to replace
    }
    textPieces.push(/*#__PURE__*/_jsx("span", {
      children: text.slice(0, match.index)
    }, index++));
    text = text.slice(match.index + match[0].length);
    var varName = match[0].slice(1, -1);
    if (!statusesLoading && varName in statuses) {
      textPieces.push(/*#__PURE__*/_jsx(Status, {
        id: varName,
        includeTooltip: includeTooltips
      }, index++));
    } else if (varName in skillTags) {
      if ("color" in skillTags[varName]) {
        textPieces.push(/*#__PURE__*/_jsx("span", {
          style: {
            color: skillTags[varName].color
          },
          children: skillTags[varName].text
        }, index++));
      } else {
        textPieces.push(/*#__PURE__*/_jsx("span", {
          children: skillTags[varName].text
        }, index++));
      }
    } else {
      textPieces.push(/*#__PURE__*/_jsxs("span", {
        children: ["[", varName, "]"]
      }, index++));
    }
  }
  return /*#__PURE__*/_jsx("div", {
    style: {
      display: "inline"
    },
    children: textPieces
  });
}
export default replaceStatusVariables;