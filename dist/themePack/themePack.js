import { themePacks } from "../data/mdData";
import { ASSETS_ROOT } from "../paths";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function rescaleThemePack(scale) {
  return {
    width: "".concat(380 * scale, "px"),
    height: "".concat(690 * scale, "px")
  };
}
function ThemePackImg(_ref) {
  var id = _ref.id,
    _ref$themePack = _ref.themePack,
    themePack = _ref$themePack === void 0 ? null : _ref$themePack,
    _ref$displayName = _ref.displayName,
    displayName = _ref$displayName === void 0 ? false : _ref$displayName,
    _ref$scale = _ref.scale,
    scale = _ref$scale === void 0 ? 1 : _ref$scale;
  var themePackObject = themePack;
  if (!themePackObject) {
    if (!(id in themePacks)) {
      console.warn("Theme Pack ".concat(id, " not found."));
      return null;
    } else {
      themePackObject = themePacks[id];
    }
  }
  var scaledStyle = rescaleThemePack(scale);
  var img = /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/theme_packs/").concat(themePack.image, ".png"),
    alt: themePack.name,
    title: themePack.name,
    style: rescaleThemePack(scale)
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
        children: themePack.name
      })]
    });
  } else {
    return img;
  }
}
export { ThemePackImg };