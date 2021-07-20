"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AppVersion = _interopRequireDefault(require("./AppVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'AppVersion',
  component: _AppVersion.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_AppVersion.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  version: 'v0.0.98',
  publishDate: 'Tues 13 2021'
};