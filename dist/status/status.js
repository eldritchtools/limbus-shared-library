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
import { Tooltip } from "react-tooltip";
import { ASSETS_ROOT } from "../paths";
import { tooltipStyle } from "../styles";
import { useData } from "../dataProvider/DataProvider";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
var iconStyle = {
  display: "inline-block",
  width: "1.5rem",
  height: "1.5rem",
  marginLeft: "-1px",
  marginRight: "2px",
  verticalAlign: "middle",
  transform: "translateY(-0.1rem)"
};
var nameStyle = {
  display: "inline",
  fontSize: "1rem"
};
var tooltipIconStyle = {
  display: "inline-block",
  width: "1.5rem",
  height: "1.5rem",
  marginRight: "4px"
};
var tooltipDescStyle = {
  display: "inline-block",
  fontSize: "1rem",
  lineHeight: "1.5",
  maxWidth: "75rem",
  textWrap: "wrap",
  whiteSpace: "pre-wrap",
  textAlign: "start"
};
function getNameStyle(type) {
  switch (type) {
    case "Positive":
      return _objectSpread(_objectSpread({}, nameStyle), {}, {
        color: "yellow"
      });
    case "Negative":
      return _objectSpread(_objectSpread({}, nameStyle), {}, {
        color: "red"
      });
    case "Neutral":
      return _objectSpread(_objectSpread({}, nameStyle), {}, {
        color: "darkgoldenrod"
      });
    default:
      return nameStyle;
  }
}
function Status(_ref) {
  var id = _ref.id,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? null : _ref$status,
    _ref$includeTooltip = _ref.includeTooltip,
    includeTooltip = _ref$includeTooltip === void 0 ? true : _ref$includeTooltip,
    _ref$includeName = _ref.includeName,
    includeName = _ref$includeName === void 0 ? true : _ref$includeName;
  var _useData = useData("statuses"),
    _useData2 = _slicedToArray(_useData, 2),
    statuses = _useData2[0],
    statusesLoading = _useData2[1];
  var statusObject = status;
  if (!statusObject) {
    if (statusesLoading) {
      return null;
    } else if (!(id in statuses)) {
      console.warn("Status ".concat(id, " not found."));
      return /*#__PURE__*/_jsxs("span", {
        className: "error",
        children: ["Unknown status: ", id]
      });
    } else {
      statusObject = statuses[id];
    }
  }
  var src = "imageOverride" in statusObject ? statusObject.imageOverride : statusObject.name;
  return /*#__PURE__*/_jsxs("span", {
    "data-tooltip-id": includeTooltip ? "limbus-shared-library-status-tooltip" : undefined,
    "data-tooltip-content": includeTooltip ? id : undefined,
    style: {
      display: "inline"
    },
    children: [/*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/statuses/").concat(src, ".png"),
      alt: statusObject.name,
      style: iconStyle
    }), includeName ? /*#__PURE__*/_jsx("span", {
      style: getNameStyle(statusObject.buffType),
      children: statusObject.name
    }) : null]
  });
}
function TooltipContent(_ref2) {
  var statusId = _ref2.statusId;
  var _useData3 = useData("statuses"),
    _useData4 = _slicedToArray(_useData3, 2),
    statuses = _useData4[0],
    statusesLoading = _useData4[1];
  if (!statusId || statusesLoading) return null;
  var status = statuses[statusId];
  var src = "imageOverride" in status ? status.imageOverride : status.name;
  return /*#__PURE__*/_jsx("div", {
    style: tooltipStyle,
    children: /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem"
      },
      children: [/*#__PURE__*/_jsxs("div", {
        style: {
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          fontSize: "1rem",
          fontWeight: "bold"
        },
        children: [/*#__PURE__*/_jsx("img", {
          src: "".concat(ASSETS_ROOT, "/statuses/").concat(src, ".png"),
          alt: status.name,
          style: tooltipIconStyle
        }), /*#__PURE__*/_jsx("span", {
          children: status.name
        })]
      }), /*#__PURE__*/_jsx("div", {
        style: tooltipDescStyle,
        children: /*#__PURE__*/_jsx("span", {
          children: status.desc
        })
      })]
    })
  });
}
function StatusTooltip() {
  return /*#__PURE__*/_jsx(Tooltip, {
    id: "limbus-shared-library-status-tooltip",
    render: function render(_ref3) {
      var content = _ref3.content;
      return /*#__PURE__*/_jsx(TooltipContent, {
        statusId: content
      });
    },
    getTooltipContainer: function getTooltipContainer() {
      return document.body;
    },
    style: {
      backgroundColor: "transparent",
      zIndex: "9999"
    }
  });
}
export { Status, StatusTooltip };