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
import ReplacedStatusesText from "../status/statusReplace.js";
import { tooltipStyle } from "../styles.js";
import { useData } from "../dataProvider/DataProvider.js";
import { GiftModal } from "./GiftModal.js";
import { TierComponent } from "../TierComponent.js";
import { useMemo, useState } from "react";
import { affinityColorMapping } from "../utils.js";
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
  top: "8%",
  left: "8%"
};
var giftKeywordStyle = {
  position: "absolute",
  bottom: "5%",
  right: "5%"
};
var giftEnhanceStyle = {
  position: "absolute",
  top: "5%",
  right: "5%",
  fontWeight: "bold",
  color: "#ffd84d"
};
var tooltipDescStyle = {
  display: "inline-block",
  fontSize: "1rem",
  lineHeight: "1.5",
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
function getGiftImgSrc(gift) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var src = fallback !== null && fallback !== void 0 ? fallback : "imageOverride" in gift ? gift["imageOverride"] : gift.names[0];
  return "".concat(ASSETS_ROOT, "/gifts/").concat(src, ".png");
}
function GiftImg(_ref) {
  var gift = _ref.gift,
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
  var src = getGiftImgSrc(gift, fallback ? gift.id : null);
  var handleError = function handleError() {
    if (!fallback) {
      setFallback(true);
    } else {
      setIconVisible(false);
    }
  };
  return /*#__PURE__*/_jsx("img", {
    src: src,
    alt: gift.names[0],
    style: style,
    onError: handleError
  });
}
function TagStrips(_ref2) {
  var gift = _ref2.gift,
    scale = _ref2.scale;
  var scaledSize = {
    width: "".concat(12 * scale, "px"),
    height: "".concat(4 * scale, "px")
  };
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      position: "absolute",
      bottom: "50%",
      left: "0"
    },
    children: [gift.enhanceable ? /*#__PURE__*/_jsx("div", {
      style: _objectSpread(_objectSpread({}, scaledSize), {}, {
        background: "#4ade80"
      })
    }) : null, gift.fusion ? /*#__PURE__*/_jsx("div", {
      style: _objectSpread(_objectSpread({}, scaledSize), {}, {
        background: "#facc15"
      })
    }) : null, gift.hardonly ? /*#__PURE__*/_jsx("div", {
      style: _objectSpread(_objectSpread({}, scaledSize), {}, {
        background: "#f87171"
      })
    }) : null, gift.cursedPair ? /*#__PURE__*/_jsx("div", {
      style: _objectSpread(_objectSpread({}, scaledSize), {}, {
        background: "#a78bfa"
      })
    }) : null, gift.blessedPair ? /*#__PURE__*/_jsx("div", {
      style: _objectSpread(_objectSpread({}, scaledSize), {}, {
        background: "#38bdf8"
      })
    }) : null]
  });
}
function GiftIcon(_ref3) {
  var gift = _ref3.gift,
    _ref3$enhanceRank = _ref3.enhanceRank,
    enhanceRank = _ref3$enhanceRank === void 0 ? 0 : _ref3$enhanceRank,
    _ref3$scale = _ref3.scale,
    scale = _ref3$scale === void 0 ? 1 : _ref3$scale,
    tagStrips = _ref3.tagStrips;
  var size = 96 * scale;
  return /*#__PURE__*/_jsxs("div", {
    style: resize(giftContainerStyle, size),
    children: [/*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/ego_gift_background.png"),
      alt: "",
      style: resize(giftBackgroundStyle, size)
    }), /*#__PURE__*/_jsx(GiftImg, {
      gift: gift,
      style: resize(giftStyle, size * 0.75)
    }), /*#__PURE__*/_jsx("span", {
      style: giftTierStyle,
      children: /*#__PURE__*/_jsx(TierComponent, {
        tier: gift.tier,
        scale: scale,
        scaleY: 1.4
      })
    }), enhanceRank > 0 ? /*#__PURE__*/_jsx("span", {
      style: rescaleFont(giftEnhanceStyle, scale * 1.2),
      children: "+".repeat(enhanceRank)
    }) : null, gift.keyword !== "Keywordless" ? /*#__PURE__*/_jsx("img", {
      src: "".concat(ASSETS_ROOT, "/icons/").concat(gift.keyword, ".png"),
      alt: "",
      style: resize(giftKeywordStyle, size * 0.3)
    }) : null, tagStrips ? /*#__PURE__*/_jsx(TagStrips, {
      gift: gift,
      scale: scale
    }) : null]
  });
}
function Gift(_ref4) {
  var id = _ref4.id,
    _ref4$gift = _ref4.gift,
    gift = _ref4$gift === void 0 ? null : _ref4$gift,
    _ref4$enhanceRank = _ref4.enhanceRank,
    enhanceRank = _ref4$enhanceRank === void 0 ? 0 : _ref4$enhanceRank,
    _ref4$scale = _ref4.scale,
    scale = _ref4$scale === void 0 ? 1 : _ref4$scale,
    _ref4$text = _ref4.text,
    text = _ref4$text === void 0 ? false : _ref4$text,
    _ref4$includeTooltip = _ref4.includeTooltip,
    includeTooltip = _ref4$includeTooltip === void 0 ? true : _ref4$includeTooltip,
    _ref4$expandable = _ref4.expandable,
    expandable = _ref4$expandable === void 0 ? true : _ref4$expandable,
    _ref4$tagStrips = _ref4.tagStrips,
    tagStrips = _ref4$tagStrips === void 0 ? false : _ref4$tagStrips,
    expandOverride = _ref4.expandOverride,
    setExpandOverride = _ref4.setExpandOverride;
  var _useData = useData("gifts"),
    _useData2 = _slicedToArray(_useData, 2),
    gifts = _useData2[0],
    giftsLoading = _useData2[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    modalOpen = _useState6[0],
    setModalOpen = _useState6[1];
  var size = 96 * scale;
  var canHover = useMemo(function () {
    return window.matchMedia("(hover: hover)").matches;
  }, []);
  var giftObject = gift;
  if (!giftObject) {
    if (giftsLoading) {
      return null;
    } else if (!(id in gifts)) {
      console.warn("Gift ".concat(id, " not found."));
      if (text) {
        return /*#__PURE__*/_jsx("span", {
          children: "Gift not found"
        });
      } else {
        return /*#__PURE__*/_jsx("span", {
          style: resize(giftContainerStyle, size),
          children: /*#__PURE__*/_jsx("img", {
            src: "".concat(ASSETS_ROOT, "/ego_gift_background.png"),
            alt: "",
            style: resize(giftBackgroundStyle, size)
          })
        });
      }
    } else {
      giftObject = gifts[id];
    }
  }
  var props = {};
  if (includeTooltip && (!expandable || canHover)) {
    props["data-tooltip-id"] = "limbus-shared-library-gift-tooltip";
    props["data-tooltip-content"] = "".concat(giftObject.id, ":").concat(enhanceRank, ":").concat(expandable);
  }
  if (expandable) {
    props.onClick = function () {
      return setModalOpen(true);
    };
  }
  var handleModalClose = function handleModalClose() {
    setModalOpen(false);
    if (setExpandOverride) setExpandOverride(false);
  };
  if (text) {
    return /*#__PURE__*/_jsxs("span", {
      children: [/*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({}, props), {}, {
        children: giftObject.names[enhanceRank]
      })), expandable ? /*#__PURE__*/_jsx(GiftModal, {
        gift: giftObject,
        enhanceRank: enhanceRank,
        scale: scale,
        isOpen: modalOpen || expandOverride,
        onClose: handleModalClose
      }) : null]
    });
  } else {
    return /*#__PURE__*/_jsxs("span", {
      children: [/*#__PURE__*/_jsx("span", _objectSpread(_objectSpread({}, props), {}, {
        children: /*#__PURE__*/_jsx(GiftIcon, {
          gift: giftObject,
          enhanceRank: enhanceRank,
          scale: scale,
          tagStrips: tagStrips
        })
      })), expandable ? /*#__PURE__*/_jsx(GiftModal, {
        gift: giftObject,
        enhanceRank: enhanceRank,
        scale: scale,
        isOpen: modalOpen || expandOverride,
        onClose: handleModalClose
      }) : null]
    });
  }
}
function GiftTooltipContent(_ref5) {
  var gift = _ref5.gift,
    _ref5$enhanceRank = _ref5.enhanceRank,
    enhanceRank = _ref5$enhanceRank === void 0 ? 0 : _ref5$enhanceRank,
    _ref5$expandable = _ref5.expandable,
    expandable = _ref5$expandable === void 0 ? true : _ref5$expandable;
  var _useData3 = useData("md_theme_packs"),
    _useData4 = _slicedToArray(_useData3, 2),
    themePacks = _useData4[0],
    themePacksLoading = _useData4[1];
  var exclusiveText = function exclusiveText(list) {
    return themePacksLoading ? null : /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/_jsx("br", {}), /*#__PURE__*/_jsx("span", {
        children: "Exclusive Theme Packs:"
      }), list.map(function (themePackId) {
        return /*#__PURE__*/_jsx("span", {
          children: themePacks[themePackId].name
        }, themePackId);
      })]
    });
  };
  return /*#__PURE__*/_jsx("div", {
    style: tooltipStyle,
    children: /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        padding: "0.5rem"
      },
      children: [/*#__PURE__*/_jsx("div", {
        style: {
          marginBottom: "0.5rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: affinityColorMapping[gift.affinity]
        },
        children: gift.names[enhanceRank]
      }), /*#__PURE__*/_jsxs("div", {
        style: {
          display: "flex",
          gap: "0.5rem",
          marginBottom: "0.5rem"
        },
        children: [/*#__PURE__*/_jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.2rem"
          },
          children: [/*#__PURE__*/_jsx(GiftIcon, {
            gift: gift,
            enhanceRank: enhanceRank
          }), gift.enhanceable ? /*#__PURE__*/_jsx("span", {
            style: {
              color: "#4ade80"
            },
            children: "Enhanceable"
          }) : null, gift.fusion ? /*#__PURE__*/_jsx("span", {
            style: {
              color: "#facc15"
            },
            children: "Fusion Only"
          }) : null, gift.hardonly ? /*#__PURE__*/_jsx("span", {
            style: {
              color: "#f87171"
            },
            children: "Hard Only"
          }) : null, gift.cursedPair ? /*#__PURE__*/_jsx("span", {
            style: {
              color: "#a78bfa"
            },
            children: "Cursed"
          }) : null, gift.blessedPair ? /*#__PURE__*/_jsx("span", {
            style: {
              color: "#38bdf8"
            },
            children: "Blessed"
          }) : null]
        }), /*#__PURE__*/_jsxs("div", {
          style: _objectSpread(_objectSpread({}, tooltipDescStyle), {}, {
            display: "flex",
            flexDirection: "column",
            textAlign: "left"
          }),
          children: [/*#__PURE__*/_jsx(ReplacedStatusesText, {
            templateText: gift.descs[enhanceRank]
          }), gift.exclusiveTo ? exclusiveText(gift.exclusiveTo) : null]
        })]
      }), expandable ? /*#__PURE__*/_jsx("div", {
        style: {
          borderTop: "1px #444 dashed",
          fontSize: "0.8rem",
          color: "#999",
          textAlign: "center"
        },
        children: "Click gift to expand"
      }) : null]
    })
  });
}
function TooltipLoader(_ref6) {
  var giftId = _ref6.giftId,
    enhanceRank = _ref6.enhanceRank,
    expandable = _ref6.expandable;
  var _useData5 = useData("gifts"),
    _useData6 = _slicedToArray(_useData5, 2),
    gifts = _useData6[0],
    giftsLoading = _useData6[1];
  if (!giftId || giftsLoading) return null;
  return /*#__PURE__*/_jsx(GiftTooltipContent, {
    gift: gifts[giftId],
    enhanceRank: enhanceRank,
    expandable: expandable
  });
}
function GiftTooltip() {
  return /*#__PURE__*/_jsx(Tooltip, {
    id: "limbus-shared-library-gift-tooltip",
    render: function render(_ref7) {
      var content = _ref7.content;
      if (!content) return null;
      var _content$split = content.split(":"),
        _content$split2 = _slicedToArray(_content$split, 3),
        id = _content$split2[0],
        rank = _content$split2[1],
        expandable = _content$split2[2];
      return /*#__PURE__*/_jsx(TooltipLoader, {
        giftId: id,
        enhanceRank: Number(rank),
        expandable: expandable === "true"
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
export { Gift, GiftTooltip, getGiftImgSrc };