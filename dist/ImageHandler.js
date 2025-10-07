import { ASSETS_ROOT } from "./paths";
import { jsx as _jsx } from "react/jsx-runtime";
function Icon(_ref) {
  var path = _ref.path,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/icons/").concat(path, ".png"),
    alt: path,
    title: path,
    style: style
  });
}
function RarityImg(_ref2) {
  var rarity = _ref2.rarity;
  switch (rarity) {
    case 1:
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/0.png"),
        alt: "0",
        title: "0",
        style: {
          height: "2rem"
        }
      });
    case 2:
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/00.png"),
        alt: "00",
        title: "00",
        style: {
          height: "2rem"
        }
      });
    case 3:
      return /*#__PURE__*/_jsx("img", {
        src: "".concat(ASSETS_ROOT, "/000.png"),
        alt: "000",
        title: "000",
        style: {
          height: "2rem"
        }
      });
    default:
      return null;
  }
}
export { Icon, RarityImg };