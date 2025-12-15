function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import { jsx as _jsx } from "react/jsx-runtime";
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var tierMapping = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
  1: "I"
}, "1", "I"), 2, "II"), "2", "II"), 3, "III"), "3", "III"), 4, "IV"), "4", "IV"), 5, "V"), "5", "V"), "EX", "EX");
function TierComponent(_ref) {
  var _tierMapping$tier;
  var tier = _ref.tier,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale,
    _ref$scaleY = _ref.scaleY,
    scaleY = _ref$scaleY === void 0 ? 1.2 : _ref$scaleY;
  return /*#__PURE__*/_jsx("span", {
    style: {
      display: "inline-block",
      fontFamily: "'Archivo Narrow', sans-serif",
      fontWeight: "bold",
      fontSize: "".concat(24 * scale, "px"),
      color: "#ffd84d",
      transform: "scaleY(".concat(scaleY, ")")
    },
    children: (_tierMapping$tier = tierMapping[tier]) !== null && _tierMapping$tier !== void 0 ? _tierMapping$tier : ""
  });
}
export { TierComponent };