function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import { ASSETS_ROOT } from "../paths";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var keywords = ["Burn", "Bleed", "Tremor", "Rupture", "Sinking", "Poise", "Charge", "Slash", "Pierce", "Blunt", "Keywordless"];
var buttonStyle = {
  backgroundColor: "#1f1f1f",
  color: "#ddd",
  border: "1px #aaa solid",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
var caseMapping = {
  "slash": "Slash",
  "pierce": "Pierce",
  "blunt": "Blunt",
  "guard": "Guard",
  "evade": "Evade",
  "counter": "Counter"
};
function convertCase(id) {
  var _caseMapping$id;
  return (_caseMapping$id = caseMapping[id]) !== null && _caseMapping$id !== void 0 ? _caseMapping$id : id;
}
function KeywordIcon(_ref) {
  var id = _ref.id,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 32 : _ref$size;
  return /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/icons/").concat(convertCase(id), ".png"),
    alt: id,
    title: id,
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  });
}
function KeywordSelector(_ref2) {
  var value = _ref2.value,
    onChange = _ref2.onChange,
    _ref2$multiLine = _ref2.multiLine,
    multiLine = _ref2$multiLine === void 0 ? false : _ref2$multiLine;
  var handleKeywordToggle = function handleKeywordToggle(keyword, selected) {
    if (selected) onChange(value.filter(function (x) {
      return x !== keyword;
    }));else onChange([].concat(_toConsumableArray(value), [keyword]));
  };
  var clearKeywords = function clearKeywords() {
    onChange([]);
  };
  var toggleComponent = function toggleComponent(keyword, selected) {
    var icon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    return /*#__PURE__*/_jsx("div", {
      style: _objectSpread(_objectSpread({}, buttonStyle), {}, {
        backgroundColor: selected ? "#3f3f3f" : "#1f1f1f",
        transiton: "background-color 0.2s, border-color 0.2s"
      }),
      onClick: function onClick() {
        return handleKeywordToggle(keyword, selected);
      },
      children: icon ? /*#__PURE__*/_jsx(KeywordIcon, {
        id: keyword
      }) : keyword
    });
  };
  var keywordsComponents = keywords.slice(0, -1).map(function (keyword) {
    return toggleComponent(keyword, value.includes(keyword));
  });
  var keywordlessComponent = toggleComponent(keywords[keywords.length - 1], value.includes(keywords[keywords.length - 1]), false);
  var clearAllComponent = /*#__PURE__*/_jsx("div", {
    style: buttonStyle,
    onClick: clearKeywords,
    children: "Clear All"
  });
  return multiLine ? /*#__PURE__*/_jsxs("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr"
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)"
      },
      children: keywordsComponents
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)"
      },
      children: [keywordlessComponent, clearAllComponent]
    })]
  }) : /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex"
    },
    children: [keywordsComponents, keywordlessComponent, clearAllComponent]
  });
}
export { keywords, KeywordIcon, KeywordSelector };