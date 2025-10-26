function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { useData } from "../dataProvider/DataProvider";
import { ASSETS_ROOT } from "../paths";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function rescaleThemePack(scale) {
  return {
    width: "".concat(380 * scale, "px"),
    height: "".concat(690 * scale, "px")
  };
}
function ThemePackImg(_ref) {
  var id = _ref.id,
    _ref$themePack = _ref.themePack,
    themePack = _ref$themePack === void 0 ? null : _ref$themePack,
    _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? false : _ref$displayName,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  var _useData = useData("md_theme_packs"),
    _useData2 = _slicedToArray(_useData, 2),
    themePacks = _useData2[0],
    themePacksLoading = _useData2[1];
  var themePackObject = themePack;
  if (!themePackObject) {
    if (themePacksLoading) {
      return null;
    }
    if (!(id in themePacks)) {
      console.warn("Theme Pack ".concat(id, " not found."));
      return null;
    } else {
      themePackObject = themePacks[id];
    }
  }
  var scaledStyle = rescaleThemePack(scale);
  var img = /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/theme_packs/").concat(themePackObject.image, ".png"),
    alt: themePackObject.name,
    title: themePackObject.name,
    style: rescaleThemePack(scale)
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
        children: themePackObject.name
      })]
    });
  } else {
    return img;
  }
}
function getFloorsPerPack() {
  var _useData3 = useData("md_floor_packs"),
    _useData4 = _slicedToArray(_useData3, 2),
    floorPacks = _useData4[0],
    floorPacksLoading = _useData4[1];
  var floorsPerPack = {
    normal: {},
    hard: {}
  };
  if (floorPacksLoading) return floorsPerPack;
  Object.entries(floorPacks.normal).forEach(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      floor = _ref3[0],
      packs = _ref3[1];
    return packs.forEach(function (pack) {
      if (pack in floorsPerPack.normal) floorsPerPack.normal[pack].push(floor);else floorsPerPack.normal[pack] = [floor];
    });
  });
  Object.entries(floorPacks.hard).forEach(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      floor = _ref5[0],
      packs = _ref5[1];
    return packs.forEach(function (pack) {
      if (pack in floorsPerPack.hard) floorsPerPack.hard[pack].push(floor);else floorsPerPack.hard[pack] = [floor];
    });
  });
  return floorsPerPack;
}
function getFloorsForPack(packId) {
  var _useData5 = useData("md_floor_packs"),
    _useData6 = _slicedToArray(_useData5, 2),
    floorPacks = _useData6[0],
    floorPacksLoading = _useData6[1];
  if (floorPacksLoading) return {
    normal: [],
    hard: []
  };
  return {
    normal: Object.entries(floorPacks.normal).filter(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        _ = _ref7[0],
        packs = _ref7[1];
      return packs.includes(packId);
    }).map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
        floor = _ref9[0],
        _ = _ref9[1];
      return floor;
    }),
    hard: Object.entries(floorPacks.hard).filter(function (_ref0) {
      var _ref1 = _slicedToArray(_ref0, 2),
        _ = _ref1[0],
        packs = _ref1[1];
      return packs.includes(packId);
    }).map(function (_ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
        floor = _ref11[0],
        _ = _ref11[1];
      return floor;
    })
  };
}
export { ThemePackImg, getFloorsPerPack, getFloorsForPack };