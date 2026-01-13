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
import { ASSETS_ROOT } from "../paths.js";
import { tooltipStyle } from "../styles.js";
import { useData } from "../dataProvider/DataProvider.js";
import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
function getStatusImgSrc(status) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var src = fallback !== null && fallback !== void 0 ? fallback : "imageOverride" in status ? status.imageOverride : status.name;
  return "".concat(ASSETS_ROOT, "/statuses/").concat(src, ".png");
}
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
function StatusIcon(_ref) {
  var id = _ref.id,
    status = _ref.status,
    style = _ref.style;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    fallback = _useState2[0],
    setFallback = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    iconVisible = _useState4[0],
    setIconVisible = _useState4[1];
  if (!iconVisible) return null;
  var src = getStatusImgSrc(status, fallback ? id !== null && id !== void 0 ? id : status.id : null);
  var handleError = function handleError() {
    if (!fallback) {
      setFallback(true);
    } else {
      setIconVisible(false);
    }
  };
  return /*#__PURE__*/_jsx("img", {
    src: src,
    alt: status.name,
    style: style,
    onError: handleError
  });
}
function Status(_ref2) {
  var id = _ref2.id,
    _ref2$status = _ref2.status,
    status = _ref2$status === void 0 ? null : _ref2$status,
    _ref2$includeTooltip = _ref2.includeTooltip,
    includeTooltip = _ref2$includeTooltip === void 0 ? true : _ref2$includeTooltip,
    _ref2$includeName = _ref2.includeName,
    includeName = _ref2$includeName === void 0 ? true : _ref2$includeName,
    _ref2$iconStyleOverri = _ref2.iconStyleOverride,
    iconStyleOverride = _ref2$iconStyleOverri === void 0 ? {} : _ref2$iconStyleOverri,
    _ref2$nameStyleOverri = _ref2.nameStyleOverride,
    nameStyleOverride = _ref2$nameStyleOverri === void 0 ? {} : _ref2$nameStyleOverri;
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
  return /*#__PURE__*/_jsxs("span", {
    "data-tooltip-id": includeTooltip ? "limbus-shared-library-status-tooltip" : undefined,
    "data-tooltip-content": includeTooltip ? id : undefined,
    style: {
      display: "inline"
    },
    role: "button",
    tabIndex: 0,
    children: [/*#__PURE__*/_jsx(StatusIcon, {
      id: id,
      status: statusObject,
      style: _objectSpread(_objectSpread({}, iconStyle), iconStyleOverride)
    }), includeName ? /*#__PURE__*/_jsx("span", {
      style: _objectSpread(_objectSpread({}, getNameStyle(statusObject.buffType)), nameStyleOverride),
      children: statusObject.name
    }) : null]
  });
}
function StatusTooltipContent(_ref3) {
  var status = _ref3.status;
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
        children: [/*#__PURE__*/_jsx(StatusIcon, {
          status: status,
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
function TooltipLoader(_ref4) {
  var statusId = _ref4.statusId;
  var _useData3 = useData("statuses"),
    _useData4 = _slicedToArray(_useData3, 2),
    statuses = _useData4[0],
    statusesLoading = _useData4[1];
  if (!statusId || statusesLoading) return null;
  return /*#__PURE__*/_jsx(StatusTooltipContent, {
    status: statuses[statusId]
  });
}
function StatusTooltip() {
  return /*#__PURE__*/_jsx(Tooltip, {
    id: "limbus-shared-library-status-tooltip",
    render: function render(_ref5) {
      var content = _ref5.content;
      return /*#__PURE__*/_jsx(TooltipLoader, {
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
export { Status, StatusTooltip, getStatusImgSrc };