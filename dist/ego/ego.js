function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { ASSETS_ROOT } from "../paths";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function EgoImg(_ref) {
  var id = _ref.id,
    _ref$ego = _ref.ego,
    ego = _ref$ego === void 0 ? null : _ref$ego,
    type = _ref.type,
    _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? false : _ref$displayName,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  var _useData = useData("egos_mini"),
    _useData2 = _slicedToArray(_useData, 2),
    egos = _useData2[0],
    egosLoading = _useData2[1];
  var egoObject = ego;
  if (!egoObject) {
    if (egosLoading) {
      return null;
    } else if (!(id in egos)) {
      console.warn("Ego ".concat(id, " not found."));
      return null;
    } else {
      egoObject = egos[id];
    }
  }
  var scaledStyle = {
    width: "".concat(256 * scale, "px"),
    height: "".concat(256 * scale, "px")
  };
  var img = /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/egos/").concat(egoObject.id, "_").concat(type, "_profile.png"),
    alt: egoObject.name,
    title: egoObject.name,
    style: scaledStyle
  });
  if (displayName) {
    return /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: scaledStyle.width
      },
      children: [img, /*#__PURE__*/_jsx("span", {
        children: egoObject.name
      })]
    });
  } else {
    return img;
  }
}
export { EgoImg };