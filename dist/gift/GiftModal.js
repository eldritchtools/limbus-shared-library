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
import * as React from "react";
import { Gift } from "./gift.js";
import replaceStatusVariables from "../status/statusReplace.js";
import FusionRecipe from "./FusionRecipe.js";
import { getFloorsForPack, ThemePackImg } from "../themePack/themePack.js";
import { createPortal } from "react-dom";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var overlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "1000"
};
var contentStyle = {
  background: "black",
  padding: "1rem",
  borderRadius: "0.5rem",
  width: "clamp(200px, 90%, 1600px)",
  maxWidth: "1600px",
  border: "1px #aaa solid",
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)"
};
var closeStyle = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  background: "transparent",
  border: "none",
  fontSize: "1.25rem",
  cursor: "pointer"
};
var buttonStyle = {
  border: "1px #aaa solid",
  padding: "4px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transiton: "background-color 0.2s, border-color 0.2s"
};
var iconTextStyle = {
  fontFamily: "'Archivo Narrow', sans-serif",
  fontWeight: "bold",
  fontSize: "20px",
  color: "#ffd84d"
};
function GiftDisplay(_ref) {
  var gift = _ref.gift,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale,
    enhanceRank = _ref.enhanceRank;
  var _React$useState = React.useState(enhanceRank),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    enhanceLevel = _React$useState2[0],
    setEnhanceLevel = _React$useState2[1];
  var level = Math.min(enhanceLevel, gift.descs.length - 1);
  return /*#__PURE__*/_jsxs("div", {
    style: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      width: "100%",
      gap: "0.5rem",
      maxHeight: "80vh",
      overflow: "hidden"
    },
    children: [/*#__PURE__*/_jsx("div", {
      style: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        textAlign: "start"
      },
      children: gift.names[level]
    }), /*#__PURE__*/_jsxs("div", {
      style: {
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        minHeight: 0
      },
      children: [/*#__PURE__*/_jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          flex: "0 0 auto"
        },
        children: [/*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx(Gift, {
            gift: gift,
            includeTooltip: false,
            enhanceRank: enhanceLevel,
            expandable: false,
            scale: scale
          })
        }), gift.enhanceable ? /*#__PURE__*/_jsx("div", {
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(".concat(gift.names.length, ", 1fr)")
          },
          children: Array.from({
            length: gift.names.length
          }, function (_, index) {
            return /*#__PURE__*/_jsx("div", {
              style: _objectSpread(_objectSpread({}, buttonStyle), {}, {
                backgroundColor: enhanceLevel === index ? "#3f3f3f" : "#1f1f1f"
              }),
              onClick: function onClick() {
                return setEnhanceLevel(index);
              },
              children: index === 0 ? "-" : /*#__PURE__*/_jsx("span", {
                style: iconTextStyle,
                children: "+".repeat(index)
              })
            }, index);
          })
        }) : null, gift.hardonly ? /*#__PURE__*/_jsx("span", {
          style: {
            color: "#f87171"
          },
          children: "Hard Only"
        }) : null]
      }), /*#__PURE__*/_jsx("div", {
        style: {
          flex: "1 1 0",
          minHeight: 0,
          overflowY: "auto"
        },
        children: /*#__PURE__*/_jsxs("div", {
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              display: "inline-block",
              fontSize: "1rem",
              lineHeight: "1.5",
              textWrap: "wrap",
              whiteSpace: "pre-wrap",
              textAlign: "start"
            },
            children: /*#__PURE__*/_jsx("span", {
              children: replaceStatusVariables(gift.descs[level], true)
            })
          }), /*#__PURE__*/_jsxs("div", {
            style: {
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "1rem"
            },
            children: [gift.exclusiveTo ? /*#__PURE__*/_jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [/*#__PURE__*/_jsx("span", {
                style: {
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  textAlign: "start"
                },
                children: "Exclusive Theme Packs"
              }), /*#__PURE__*/_jsx("div", {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  maxWidth: "calc(100vw - 100px)",
                  overflowX: "auto"
                },
                children: gift.exclusiveTo.map(function (packId, i) {
                  var _getFloorsForPack = getFloorsForPack(packId),
                    normal = _getFloorsForPack.normal,
                    hard = _getFloorsForPack.hard;
                  return /*#__PURE__*/_jsxs("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "center"
                    },
                    children: [/*#__PURE__*/_jsx(ThemePackImg, {
                      id: packId,
                      displayName: true,
                      scale: 0.5 * scale
                    }), /*#__PURE__*/_jsxs("div", {
                      style: {
                        display: "grid",
                        width: "100%",
                        gridTemplateColumns: "1fr 1fr"
                      },
                      children: [/*#__PURE__*/_jsx("div", {
                        style: {
                          color: "#4ade80"
                        },
                        children: "Normal"
                      }), /*#__PURE__*/_jsx("div", {
                        style: {
                          color: "#f87171"
                        },
                        children: "Hard"
                      }), /*#__PURE__*/_jsx("div", {
                        children: normal.length ? normal.map(function (f) {
                          return "F".concat(f);
                        }).join(", ") : "None"
                      }), /*#__PURE__*/_jsx("div", {
                        children: hard.length ? hard.map(function (f) {
                          return "F".concat(f);
                        }).join(", ") : "None"
                      })]
                    })]
                  }, i);
                })
              })]
            }) : null, gift.recipes ? /*#__PURE__*/_jsxs("div", {
              style: {
                display: "flex",
                flexDirection: "column"
              },
              children: [/*#__PURE__*/_jsx("span", {
                style: {
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  textAlign: "start"
                },
                children: "Fusion Recipes"
              }), /*#__PURE__*/_jsx("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  overflowX: "auto"
                },
                children: gift.recipes.map(function (recipe, i) {
                  return /*#__PURE__*/_jsx(FusionRecipe, {
                    recipe: {
                      ingredients: recipe
                    },
                    includeProduct: false,
                    scale: scale
                  }, i);
                })
              })]
            }) : null]
          })]
        })
      })]
    })]
  });
}
export function GiftModal(_ref2) {
  var gift = _ref2.gift,
    enhanceRank = _ref2.enhanceRank,
    _ref2$scale = _ref2.scale,
    scale = _ref2$scale === void 0 ? 1 : _ref2$scale,
    isOpen = _ref2.isOpen,
    onClose = _ref2.onClose;
  React.useEffect(function () {
    if (!isOpen) return;
    var handleKeyDown = function handleKeyDown(e) {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return /*#__PURE__*/createPortal(/*#__PURE__*/_jsx("div", {
    style: overlayStyle,
    onClick: onClose,
    children: /*#__PURE__*/_jsxs("div", {
      style: contentStyle,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      children: [/*#__PURE__*/_jsx("button", {
        style: closeStyle,
        onClick: onClose,
        children: "\u2715"
      }), /*#__PURE__*/_jsx(GiftDisplay, {
        gift: gift,
        scale: scale,
        enhanceRank: enhanceRank
      })]
    })
  }), document.body);
}