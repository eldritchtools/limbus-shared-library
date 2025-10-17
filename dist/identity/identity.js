import { ASSETS_ROOT } from "../paths";
import identities from "../data/identitiesData";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function IdentityImg(_ref) {
  var id = _ref.id,
    _ref$identity = _ref.identity,
    identity = _ref$identity === void 0 ? null : _ref$identity,
    uptie = _ref.uptie,
    _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? false : _ref$displayName,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  var identityObject = identity;
  if (!identityObject) {
    if (!(id in identities)) {
      console.warn("Identity ".concat(id, " not found."));
      return null;
    } else {
      identityObject = identities[id];
    }
  }
  var scaledStyle = {
    width: "".concat(256 * scale, "px"),
    height: "".concat(256 * scale, "px")
  };
  var type = uptie > 2 || identityObject.tags.includes("Base Identity") ? "gacksung" : "normal";
  var img = /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/identities/").concat(identityObject.id, "_").concat(type, "_profile.png"),
    alt: identityObject.name,
    title: identityObject.name,
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
        children: identityObject.name
      })]
    });
  } else {
    return img;
  }
}
export { IdentityImg };