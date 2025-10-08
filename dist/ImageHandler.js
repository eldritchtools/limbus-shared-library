function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ASSETS_ROOT } from "./paths";
import { jsx as _jsx } from "react/jsx-runtime";
function Icon(_ref) {
  var path = _ref.path,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/icons/").concat(path, ".png"),
    alt: path,
    title: path,
    style: style
  });
}
function RarityImg(_ref2) {
  var rarity = _ref2.rarity,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? {} : _ref2$style;
  switch (rarity) {
    case 1:
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/0.png"),
        alt: "0",
        title: "0",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    case 2:
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/00.png"),
        alt: "00",
        title: "00",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    case 3:
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/000.png"),
        alt: "000",
        title: "000",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    default:
      return null;
  }
}
export { Icon, RarityImg };