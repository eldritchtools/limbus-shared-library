function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import floorPacks from './md_floor_packs.json' with { type: 'json' };
import themePacks from './md_theme_packs.json' with { type: 'json' };

// Add floors available to theme packs
var floorsPerPack = {
  normal: {},
  hard: {}
};
Object.entries(floorPacks.normal).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    floor = _ref2[0],
    packs = _ref2[1];
  return packs.forEach(function (pack) {
    if (pack in floorsPerPack.normal) floorsPerPack.normal[pack].push(floor);else floorsPerPack.normal[pack] = [floor];
  });
});
Object.entries(floorPacks.hard).forEach(function (_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    floor = _ref4[0],
    packs = _ref4[1];
  return packs.forEach(function (pack) {
    if (pack in floorsPerPack.hard) floorsPerPack.hard[pack].push(floor);else floorsPerPack.hard[pack] = [floor];
  });
});
var preprocessed = _objectSpread({}, themePacks);
Object.entries(floorsPerPack.normal).forEach(function (_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
    pack = _ref6[0],
    floors = _ref6[1];
  return preprocessed[pack]["normalFloors"] = floors;
});
Object.entries(floorsPerPack.hard).forEach(function (_ref7) {
  var _ref8 = _slicedToArray(_ref7, 2),
    pack = _ref8[0],
    floors = _ref8[1];
  return preprocessed[pack]["hardFloors"] = floors;
});
export { floorPacks, preprocessed as themePacks };