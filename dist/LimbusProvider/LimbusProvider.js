function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { createContext, useContext, useEffect, useState } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
var DATA_ROOT = "https://eldritchtools.github.io/limbus-shared-library/public/data";
var LimbusContext = /*#__PURE__*/createContext();
export function LimbusProvider(_ref) {
  var _ref$loadStatuses = _ref.loadStatuses,
    loadStatuses = _ref$loadStatuses === void 0 ? true : _ref$loadStatuses,
    _ref$loadGifts = _ref.loadGifts,
    loadGifts = _ref$loadGifts === void 0 ? false : _ref$loadGifts,
    _ref$loadMdData = _ref.loadMdData,
    loadMdData = _ref$loadMdData === void 0 ? false : _ref$loadMdData,
    children = _ref.children;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    statuses = _useState2[0],
    setStatuses = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    gifts = _useState4[0],
    setGifts = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    themePacks = _useState6[0],
    setThemePacks = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    floorPacks = _useState8[0],
    setFloorPacks = _useState8[1];
  var loadFile = function loadFile(filename, setFunction) {
    fetch("".concat(DATA_ROOT, "/").concat(filename)).then(function (res) {
      return res.json();
    }).then(function (json) {
      return setFunction(json);
    })["catch"](function (err) {
      return console.error("Failed to load ".concat(filename), err);
    });
  };
  useEffect(function () {
    if (loadStatuses) loadFile("statuses.json", setStatuses);
    if (loadGifts) loadFile("gifts.json", setGifts);
    if (loadMdData) {
      loadFile("md_theme_packs.json", setThemePacks);
      loadFile("md_floor_packs.json", setFloorPacks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var value = {
    statuses: statuses,
    gifts: gifts,
    themePacks: themePacks,
    floorPacks: floorPacks
  };
  return /*#__PURE__*/_jsx(LimbusContext.Provider, {
    value: value,
    children: children
  });
}
export var useLimbusData = function useLimbusData() {
  return useContext(LimbusContext);
};