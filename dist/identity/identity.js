function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function IdentityImg(_ref) {
  var id = _ref.id,
    _ref$identity = _ref.identity,
    identity = _ref$identity === void 0 ? null : _ref$identity,
    uptie = _ref.uptie,
    _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? false : _ref$displayName,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  var _useData = useData("identities_mini"),
    _useData2 = _slicedToArray(_useData, 2),
    identities = _useData2[0],
    identitiesLoading = _useData2[1];
  var identityObject = identity;
  if (!identityObject) {
    if (identitiesLoading) {
      return null;
    } else if (!(id in identities)) {
      console.warn("Identity ".concat(id, " not found."));
      return null;
    } else {
      identityObject = identities[id];
    }
  }
  var scaledStyle = {
    width: "".concat(256 * scale, "px"),
    height: "".concat(256 * scale, "px")
  };
  var type = uptie > 2 || identityObject.tags.includes("Base Identity") ? "gacksung" : "normal";
  var img = /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/identities/").concat(identityObject.id, "_").concat(type, "_profile.png"),
    alt: identityObject.name,
    title: identityObject.name,
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
        children: identityObject.name
      })]
    });
  } else {
    return img;
  }
}
export { IdentityImg };