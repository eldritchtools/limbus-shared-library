function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useData } from "../dataProvider/DataProvider.js";
import { ASSETS_ROOT } from "../paths.js";
import { RarityImg } from "../ImageHandler.js";
import { TierComponent } from "../TierComponent.js";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function getIdentityImgSrc(identity) {
  var uptie = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var type = uptie > 2 || identity.tags.includes("Base Identity") ? "gacksung" : "normal";
  return "".concat(ASSETS_ROOT, "/identities/").concat(identity.id, "_").concat(type, "_profile.png");
}
function IdentityImgMain(_ref) {
  var identity = _ref.identity,
    uptie = _ref.uptie,
    displayName = _ref.displayName,
    displayRarity = _ref.displayRarity,
    displayUptie = _ref.displayUptie,
    level = _ref.level,
    style = _ref.style;
  var img = /*#__PURE__*/_jsx("img", {
    src: getIdentityImgSrc(identity, uptie),
    alt: identity.name,
    title: identity.name,
    style: _objectSpread(_objectSpread({}, style), {}, {
      objectFit: "cover"
    })
  });
  if (displayName || displayRarity || displayUptie) {
    return /*#__PURE__*/_jsxs("div", {
      style: {
        position: "relative",
        width: style.width,
        aspectRatio: "1/1",
        containerType: "size"
      },
      children: [img, displayRarity ? /*#__PURE__*/_jsx(RarityImg, {
        rarity: identity.rank,
        style: {
          position: "absolute",
          top: "4px",
          left: "4px",
          height: "2rem",
          objectFit: "contain",
          pointerEvents: "none"
        }
      }) : null, displayName ? /*#__PURE__*/_jsx("div", {
        style: {
          position: "absolute",
          bottom: "4px",
          right: "4px",
          maxWidth: "100%",
          maxHeight: "70%",
          overflow: "hidden",
          display: "block",
          textAlign: "right",
          color: "#ddd",
          fontWeight: "600",
          lineHeight: "1.1",
          textWrap: "balance",
          textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000",
          fontSize: "clamp(0.6rem, calc(10cqw - (".concat(identity.name.length, " * 0.02px)), 1rem)")
        },
        children: identity.name
      }) : null, displayUptie || level ? /*#__PURE__*/_jsxs("div", {
        style: {
          position: "absolute",
          top: "4px",
          right: "4px",
          display: "flex",
          flexDirection: "column",
          textAlign: "right",
          textShadow: "0 0 4px #000, 0 0 12px #000, 2px 2px 4px #000, -2px -2px 4px #000"
        },
        children: [displayUptie ? /*#__PURE__*/_jsx(TierComponent, {
          tier: uptie
        }) : null, /*#__PURE__*/_jsx("span", {
          style: {
            color: "#ddd",
            fontWeight: "600",
            lineHeight: "1.1",
            fontSize: "1rem"
          },
          children: level ? "Lv.".concat(level) : null
        })]
      }) : null]
    });
  } else {
    return img;
  }
}
function IdentityImgFetch(_ref2) {
  var id = _ref2.id,
    uptie = _ref2.uptie,
    displayName = _ref2.displayName,
    displayRarity = _ref2.displayRarity,
    displayUptie = _ref2.displayUptie,
    level = _ref2.level,
    style = _ref2.style;
  var _useData = useData("identities_mini"),
    _useData2 = _slicedToArray(_useData, 2),
    identities = _useData2[0],
    identitiesLoading = _useData2[1];
  if (identitiesLoading) {
    return null;
  } else if (!(id in identities)) {
    console.warn("Identity ".concat(id, " not found."));
    return null;
  } else {
    return /*#__PURE__*/_jsx(IdentityImgMain, {
      identity: identities[id],
      uptie: uptie,
      displayName: displayName,
      displayRarity: displayRarity,
      displayUptie: displayUptie,
      level: level,
      style: style
    });
  }
}
function IdentityImg(_ref3) {
  var id = _ref3.id,
    _ref3$identity = _ref3.identity,
    identity = _ref3$identity === void 0 ? null : _ref3$identity,
    uptie = _ref3.uptie,
    _ref3$displayName = _ref3.displayName,
    displayName = _ref3$displayName === void 0 ? false : _ref3$displayName,
    _ref3$displayRarity = _ref3.displayRarity,
    displayRarity = _ref3$displayRarity === void 0 ? false : _ref3$displayRarity,
    _ref3$displayUptie = _ref3.displayUptie,
    displayUptie = _ref3$displayUptie === void 0 ? false : _ref3$displayUptie,
    _ref3$level = _ref3.level,
    level = _ref3$level === void 0 ? null : _ref3$level,
    scale = _ref3.scale,
    size = _ref3.size,
    width = _ref3.width,
    _ref3$style = _ref3.style,
    style = _ref3$style === void 0 ? {} : _ref3$style;
  var newStyle = width ? _objectSpread({
    width: width,
    height: "auto"
  }, style) : size ? _objectSpread({
    width: "".concat(size, "px"),
    height: "".concat(size, "px")
  }, style) : scale ? _objectSpread({
    width: "".concat(256 * scale, "px"),
    height: "".concat(256 * scale, "px")
  }, style) : _objectSpread({
    width: "100%",
    height: "auto"
  }, style);
  if (identity) {
    return /*#__PURE__*/_jsx(IdentityImgMain, {
      identity: identity,
      uptie: uptie,
      displayName: displayName,
      displayRarity: displayRarity,
      displayUptie: displayUptie,
      level: level,
      style: newStyle
    });
  } else {
    return /*#__PURE__*/_jsx(IdentityImgFetch, {
      id: id,
      uptie: uptie,
      displayName: displayName,
      displayRarity: displayRarity,
      displayUptie: displayUptie,
      level: level,
      style: newStyle
    });
  }
}
export { IdentityImg, getIdentityImgSrc };