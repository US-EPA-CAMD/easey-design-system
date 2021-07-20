"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StageEnvironment = exports.TestEnvironment = exports.DevEnvironment = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _EnvBanner = require("./EnvBanner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'EnvBanner',
  component: _EnvBanner.EnvBanner
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_EnvBanner.EnvBanner, args);
};

var DevEnvironment = Template.bind({});
exports.DevEnvironment = DevEnvironment;
DevEnvironment.args = {
  label: 'development'
};
var TestEnvironment = Template.bind({});
exports.TestEnvironment = TestEnvironment;
TestEnvironment.args = {
  label: 'testing'
};
var StageEnvironment = Template.bind({});
exports.StageEnvironment = StageEnvironment;
StageEnvironment.args = {
  label: 'staging'
};