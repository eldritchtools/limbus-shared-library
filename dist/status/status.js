function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Tooltip } from "react-tooltip";
import { ASSETS_ROOT } from "../paths";
import statuses from "../data/statusesData";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
var iconStyle = {
  display: "inline-block",
  width: "1.5rem",
  height: "1.5rem",
  marginLeft: "-1px",
  marginRight: "2px",
  transform: "translateY(25%)"
};
var nameStyle = {
  display: "flex",
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
  inlineSize: "50ch",
  textWrap: "wrap",
  whiteSpace: "pre-wrap"
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
    _ref$includeTooltip = _ref.includeTooltip,
    includeTooltip = _ref$includeTooltip === void 0 ? true : _ref$includeTooltip,
    _ref$includeName = _ref.includeName,
    includeName = _ref$includeName === void 0 ? true : _ref$includeName;
  if (!(id in statuses)) {
    console.warn("Status ".concat(id, " not found."));
    return /*#__PURE__*/_jsxs("span", {
      className: "error",
      children: ["Unknown status: ", id]
    });
  }
  var status = statuses[id];
  var src = "imageOverride" in status ? status.imageOverride : status.name;
  return /*#__PURE__*/_jsxs("span", {
    "data-tooltip-id": includeTooltip ? "limbus-shared-library-status-tooltip" : undefined,
    "data-tooltip-content": includeTooltip ? id : undefined,
    style: {
      display: "inline-block"
    },
    children: [/*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/statuses/").concat(src),
      alt: status.name,
      style: iconStyle
    }), includeName ? /*#__PURE__*/_jsx("span", {
      style: getNameStyle(status.buffType),
      children: status.name
    }) : null]
  });
}
function TooltipContent(_ref2) {
  var status = _ref2.status;
  var src = "imageOverride" in status ? status.imageOverride : status.name;
  return /*#__PURE__*/_jsxs("div", {
    style: {
      outline: "1px #ddd solid",
      backgroundColor: "black",
      textAlign: "left",
      borderRadius: "0.5rem",
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
        src: "".concat(ASSETS_ROOT, "/statuses/").concat(src),
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
  });
}
function StatusTooltip() {
  return /*#__PURE__*/_jsx(Tooltip, {
    id: "limbus-shared-library-status-tooltip",
    render: function render(_ref3) {
      var content = _ref3.content;
      return /*#__PURE__*/_jsx(TooltipContent, {
        status: statuses[content]
      });
    },
    getTooltipContainer: function getTooltipContainer() {
      return document.body;
    }
  });
}
export { Status, StatusTooltip };