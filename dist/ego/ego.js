import { ASSETS_ROOT } from "../paths";
import egos from "../data/egosData";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function EgoImg(_ref) {
  var id = _ref.id,
    _ref$ego = _ref.ego,
    ego = _ref$ego === void 0 ? null : _ref$ego,
    type = _ref.type,
    _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? false : _ref$displayName,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  var egoObject = ego;
  if (!egoObject) {
    if (!(id in egos)) {
      console.warn("Ego ".concat(id, " not found."));
      return null;
    } else {
      egoObject = egos[id];
    }
  }
  var scaledStyle = {
    width: "".concat(256 * scale, "px"),
    height: "".concat(256 * scale, "px")
  };
  var img = /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/egos/").concat(ego.id, "_").concat(type, "_profile.png"),
    alt: ego.name,
    title: ego.name,
    style: scaledStyle
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
        children: ego.name
      }), /*#__PURE__*/_jsx("span", {
        children: ego.sinner
      })]
    });
  } else {
    return img;
  }
}
export { EgoImg };