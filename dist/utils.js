function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import { replaceStatusVariables } from "@eldritchtools/limbus-shared-library";
import { useEffect, useState } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";
var romanMapping = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X"
};
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
var seasonMapping = {
  0: "Standard Fare",
  1: "1 - Orientation",
  2: "2 - Reminiscence",
  3: "3 - Bon Voyage",
  4: "4 - Clear All Cathy",
  5: "5 - Oblivion",
  6: "6 - Zàng Huā Yín",
  8000: "Pilgrimage of Compassion"
};
var affinityColorMapping = {
  "wrath": "#fe0000",
  "lust": "#fb6500",
  "sloth": "#f7c729",
  "gluttony": "#9dfe00",
  "gloom": "#0dc1eb",
  "pride": "#1a64f0",
  "envy": "#9300db",
  "none": "#aaa"
};
function getSeasonString(season) {
  if (season > 9100) return "Walpurgisnacht ".concat(season - 9100);else return seasonMapping[season];
}
function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str; // Handle empty strings or non-string inputs
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function ProcessedText(_ref) {
  var text = _ref.text;
  var str = text.replaceAll("<style=\"highlight\">", "").replaceAll("</style>", "");
  return replaceStatusVariables(str);
}
function ColorResist(_ref2) {
  var resist = _ref2.resist;
  if (resist < 1) {
    return /*#__PURE__*/_jsxs("span", {
      style: {
        color: "#888",
        fontWeight: "bold"
      },
      children: ["x", resist]
    });
  } else if (resist > 1) {
    return /*#__PURE__*/_jsxs("span", {
      style: {
        color: "#fe0000",
        fontWeight: "bold"
      },
      children: ["x", resist]
    });
  } else {
    return /*#__PURE__*/_jsxs("span", {
      style: {
        color: "#c8aa80",
        fontWeight: "bold"
      },
      children: ["x", resist]
    });
  }
}
function getTimeAgo(timestamp) {
  if (!timestamp) return "";
  var now = new Date();
  var then = new Date(timestamp);
  var seconds = Math.max(Math.floor((now - then) / 1000), 0);
  if (seconds < 60) return "".concat(seconds, "s ago");
  var minutes = Math.floor(seconds / 60);
  if (minutes < 60) return "".concat(minutes, "m ago");
  var hours = Math.floor(minutes / 60);
  if (hours < 24) return "".concat(hours, "h ago");
  var days = Math.floor(hours / 24);
  if (days < 7) return "".concat(days, "d ago");
  var weeks = Math.floor(days / 7);
  if (weeks < 4) return "".concat(weeks, "w ago");
  var months = Math.floor(days / 30);
  if (months < 12) return "".concat(months, "mo ago");
  var years = Math.floor(days / 365);
  return "".concat(years, "y ago");
}
function useTimeAgo(timestamp) {
  var refreshMs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60000;
  var _useState = useState(function () {
      return getTimeAgo(timestamp);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    timeAgo = _useState2[0],
    setTimeAgo = _useState2[1];
  useEffect(function () {
    if (!timestamp) return;
    setTimeAgo(getTimeAgo(timestamp));

    // const interval = setInterval(() => {
    //     setTimeAgo(getTimeAgo(timestamp));
    // }, refreshMs);

    // return () => clearInterval(interval);
  }, [timestamp, refreshMs]);
  return timeAgo;
}
export { romanMapping, sinnerMapping, affinityColorMapping, getSeasonString, capitalizeFirstLetter, ProcessedText, ColorResist, getTimeAgo, useTimeAgo };