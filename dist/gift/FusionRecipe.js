function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { Gift } from "@eldritchtools/limbus-shared-library";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function FusionRecipe(_ref) {
  var recipe = _ref.recipe,
    _ref$includeProduct = _ref.includeProduct,
    includeProduct = _ref$includeProduct === void 0 ? true : _ref$includeProduct;
  var fontStyle = {
    color: "#ECCDA3",
    fontSize: "2.5em"
  };
  var components = [];
  recipe.ingredients.forEach(function (ingredient) {
    if (components.length !== 0) components.push(/*#__PURE__*/_jsx("span", {
      style: fontStyle,
      children: "+"
    }));
    if (ingredient instanceof Object) {
      var half = Math.ceil(ingredient.options.length / 2);
      components.push(/*#__PURE__*/_jsxs("div", {
        style: _objectSpread(_objectSpread({}, fontStyle), {}, {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5px"
        }),
        children: [ingredient.count, "x", /*#__PURE__*/_jsxs("div", {
          children: [/*#__PURE__*/_jsx("div", {
            style: {
              display: "flex",
              flexDirection: "row"
            },
            children: ingredient.options.slice(0, half).map(function (option) {
              return /*#__PURE__*/_jsx(Gift, {
                id: option,
                scale: 0.5
              });
            })
          }), /*#__PURE__*/_jsx("div", {
            style: {
              display: "flex",
              flexDirection: "row"
            },
            children: ingredient.options.slice(half).map(function (option) {
              return /*#__PURE__*/_jsx(Gift, {
                id: option,
                scale: 0.5
              });
            })
          })]
        })]
      }));
    } else {
      components.push(/*#__PURE__*/_jsx(Gift, {
        id: ingredient
      }));
    }
  });
  if (includeProduct) {
    components.unshift(/*#__PURE__*/_jsx("span", {
      style: fontStyle,
      children: "="
    }));
    components.unshift(/*#__PURE__*/_jsx(Gift, {
      id: recipe.id
    }));
  }
  return /*#__PURE__*/_jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    children: components
  });
}
export default FusionRecipe;