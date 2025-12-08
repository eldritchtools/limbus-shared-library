function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { ASSETS_ROOT } from "./paths.js";
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
    style = _ref2$style === void 0 ? {} : _ref2$style,
    _ref2$alt = _ref2.alt,
    alt = _ref2$alt === void 0 ? false : _ref2$alt;
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
    case "zayin":
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/zayin").concat(alt ? "-letter" : "", ".png"),
        alt: "zayin",
        title: "zayin",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    case "teth":
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/teth").concat(alt ? "-letter" : "", ".png"),
        alt: "teth",
        title: "teth",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    case "he":
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/he").concat(alt ? "-letter" : "", ".png"),
        alt: "he",
        title: "he",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    case "waw":
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/waw").concat(alt ? "-letter" : "", ".png"),
        alt: "waw",
        title: "waw",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    case "aleph":
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/icons/aleph").concat(alt ? "-letter" : "", ".png"),
        alt: "aleph",
        title: "aleph",
        style: _objectSpread({
          height: "2rem"
        }, style)
      });
    default:
      return null;
  }
}
var sinnerMapping = {
  1: "Yi Sang",
  2: "Faust",
  3: "Don Quixote",
  4: "Ryōshū",
  5: "Meursault",
  6: "Hong Lu",
  7: "Heathcliff",
  8: "Ishmael",
  9: "Rodion",
  10: "Sinclair",
  11: "Outis",
  12: "Gregor"
};
function getSinnerIconSrc(num) {
  return "".concat(ASSETS_ROOT, "/sinners/").concat(num, ".png");
}
function SinnerIcon(_ref3) {
  var num = _ref3.num,
    _ref3$style = _ref3.style,
    style = _ref3$style === void 0 ? {} : _ref3$style;
  return /*#__PURE__*/_jsx("img", {
    src: getSinnerIconSrc(num),
    alt: sinnerMapping[num],
    title: sinnerMapping[num],
    style: style
  });
}
export { Icon, RarityImg, getSinnerIconSrc, SinnerIcon };