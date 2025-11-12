import { ASSETS_ROOT } from "../paths.js";
import { jsx as _jsx } from "react/jsx-runtime";
function KeywordIcon(_ref) {
  var id = _ref.id,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 32 : _ref$size;
  return /*#__PURE__*/_jsx("img", {
    src: "".concat(ASSETS_ROOT, "/icons/").concat(id, ".png"),
    alt: id,
    title: id,
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  });
}
export default KeywordIcon;