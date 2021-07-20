"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EnvBanner = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnvBanner = function EnvBanner(props) {
  var classes = (0, _classnames.default)('bg-secondary-darker', 'padding-y-1', 'text-center', 'text-gold');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, "EPA ", props.label, " environment: The content on this page is not production data and this site is being used for ", /*#__PURE__*/_react.default.createElement("b", null, "development"), " and/or ", /*#__PURE__*/_react.default.createElement("b", null, "testing"), " purposes only.");
};

exports.EnvBanner = EnvBanner;
EnvBanner.propTypes = {
  label: _propTypes.default.string
};
var _default = EnvBanner;
exports.default = _default;