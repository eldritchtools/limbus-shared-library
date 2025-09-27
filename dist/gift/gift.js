function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Tooltip } from "react-tooltip";
import { useLimbusData } from "../LimbusProvider/LimbusProvider";
import { ASSETS_ROOT } from "../paths";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var giftContainerStyle = {
  position: "relative",
  width: "64px",
  height: "64px"
};
var giftBackgroundStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};
var giftStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};
var giftTierStyle = {
  position: "absolute",
  top: "5%",
  left: "5%",
  fontFamily: "'Archivo Narrow', sans-serif",
  fontWeight: "bold",
  fontSize: "24px",
  color: "#ffd84d",
  transform: "scaleY(1.4)"
};
var giftKeywordStyle = {
  position: "absolute",
  bottom: "5%",
  right: "5%"
};
var giftEnhanceStyle = {
  position: "absolute",
  top: "5%",
  right: "5%"
};
var tooltipDescStyle = {
  display: "inline-block",
  fontSize: "1rem",
  lineHeight: "1.5",
  inlineSize: "50ch",
  textWrap: "wrap",
  whiteSpace: "pre-wrap"
};
function resize(style, size) {
  return _objectSpread(_objectSpread({}, style), {}, {
    width: "".concat(size, "px"),
    height: "".concat(size, "px")
  });
}
function rescaleFont(style, scale) {
  return _objectSpread(_objectSpread({}, style), {}, {
    fontSize: "".concat(24 * scale, "px")
  });
}
function tierToString(tier) {
  switch (tier) {
    case "1":
      return "I";
    case "2":
      return "II";
    case "3":
      return "III";
    case "4":
      return "IV";
    case "5":
      return "V";
    case "EX":
      return "EX";
    default:
      return "";
  }
}
function GiftIcon(gift) {
  var enhanceRank = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var tier = tierToString(gift.tier);
  var size = 96 * scale;
  return /*#__PURE__*/_jsxs("div", {
    style: resize(giftContainerStyle, size),
    children: [/*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/ego_gift_background.png"),
      alt: "",
      style: resize(giftBackgroundStyle, size)
    }), /*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/ego_gifts/").concat("imageOverride" in gift ? gift["imageOverride"] : gift.name, ".png"),
      alt: gift.name,
      title: gift.name,
      style: resize(giftStyle, size * 0.75)
    }), /*#__PURE__*/_jsx("span", {
      style: rescaleFont(giftTierStyle, scale),
      children: tier
    }), enhanceRank > 0 ? /*#__PURE__*/_jsx("span", {
      style: rescaleFont(giftEnhanceStyle, scale),
      children: "+".repeat(enhanceRank)
    }) : null, gift.keyword !== "Keywordless" ? /*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/icons/").concat(gift.keyword, ".png"),
      alt: "",
      style: resize(giftKeywordStyle, size * 0.3)
    }) : null]
  });
}
function Gift(_ref) {
  var id = _ref.id,
    _ref$enhanceRank = _ref.enhanceRank,
    enhanceRank = _ref$enhanceRank === void 0 ? 0 : _ref$enhanceRank,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale,
    _ref$includeTooltip = _ref.includeTooltip,
    includeTooltip = _ref$includeTooltip === void 0 ? true : _ref$includeTooltip;
  var _useLimbusData = useLimbusData(),
    gifts = _useLimbusData.gifts;
  var size = 96 * scale;
  if (!(id in gifts)) {
    console.warn("Gift ".concat(id, " not found."));
    return /*#__PURE__*/_jsx("div", {
      style: resize(giftContainerStyle, size),
      children: /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/ego_gift_background.png"),
        alt: "",
        style: resize(giftBackgroundStyle, size)
      })
    });
  }
  var gift = gifts[id];
  if (includeTooltip) {
    return /*#__PURE__*/_jsx("div", {
      "data-tooltip-id": "limbus-shared-library-gift-tooltip",
      "data-tooltip-content": gift,
      children: /*#__PURE__*/_jsx(GiftIcon, {
        gift: gift,
        enhanceRank: enhanceRank,
        scale: scale
      })
    });
  } else {
    return /*#__PURE__*/_jsx(GiftIcon, {
      gift: gift,
      enhanceRank: enhanceRank,
      scale: scale
    });
  }
}
function GiftTooltip() {
  var _useLimbusData2 = useLimbusData(),
    themePacks = _useLimbusData2.themePacks;
  var exclusiveToText = function exclusiveToText(list) {
    return /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/_jsx("span", {
        children: "Exclusive To"
      }), list.map(function (themePackId) {
        return /*#__PURE__*/_jsx("span", {
          children: themePacks[themePackId].name
        });
      })]
    });
  };
  var tooltipContent = function tooltipContent(gift) {
    return /*#__PURE__*/_jsxs("div", {
      style: {
        outline: "1px #ddd solid",
        backgroundColor: "black",
        textAlign: "left",
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/_jsx("div", {
        style: {
          marginBottom: "0.5rem",
          fontSize: "1rem",
          fontWeight: "bold"
        },
        children: gift.names[0]
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          display: "flex"
        },
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/_jsx(GiftIcon, {
            gift: {
              gift: gift
            }
          }), gift.enhanceable ? /*#__PURE__*/_jsx("span", {
            children: "Enhanceable"
          }) : null]
        }), /*#__PURE__*/_jsxs("div", {
          style: _objectSpread(_objectSpread({}, tooltipDescStyle), {}, {
            display: "flex",
            flexDirection: "column"
          }),
          children: [/*#__PURE__*/_jsx("span", {
            children: gift.descs[0]
          }), gift.exclusiveTo ? exclusiveToText(gift.exclusiveTo) : null]
        })]
      })]
    });
  };
  return /*#__PURE__*/_jsx(Tooltip, {
    id: "limbus-shared-library-gift-tooltip",
    render: function render(_ref2) {
      var content = _ref2.content;
      return content ? tooltipContent(content) : null;
    },
    getTooltipContainer: function getTooltipContainer() {
      return document.body;
    }
  });
}
export { Gift, GiftTooltip };