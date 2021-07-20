"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppVersion = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./AppVersion.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppVersion = function AppVersion(_ref) {
  var version = _ref.version,
      publishDate = _ref.publishDate;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-version-container"
  }, /*#__PURE__*/_react.default.createElement("p", null, "".concat(version, " published ").concat(publishDate)));
};

exports.AppVersion = AppVersion;
AppVersion.propTypes = {
  version: _propTypes.default.string.isRequired,
  publishDate: _propTypes.default.string.isRequired
};
var _default = AppVersion;
exports.default = _default;