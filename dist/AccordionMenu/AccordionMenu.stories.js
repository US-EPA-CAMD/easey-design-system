"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AccordionMenu = _interopRequireDefault(require("./AccordionMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'AccordionMenu',
  component: _AccordionMenu.default
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_AccordionMenu.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  items: [{
    id: 'data',
    label: 'DATA',
    current: true,
    expanded: true,
    subItems: [{
      id: 'data-home',
      label: 'Data Home',
      href: 'https://easey-dev.app.cloud.gov/campd',
      current: true
    }, {
      id: 'custom-data-download',
      label: 'Custom Data Download',
      href: '#custom-data-download',
      current: false
    }, {
      id: 'bulk-data-files',
      label: 'Bulk Data Files',
      href: '#bulk-data-files',
      current: false
    }, {
      id: 'cam-api',
      label: 'CAM API',
      href: '#cam-api',
      current: false
    }]
  }, {
    id: 'analysis',
    label: 'ANALYSIS',
    current: false,
    expanded: false,
    comingSoon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }, {
    id: 'visualization',
    label: 'VISUALIZATION',
    current: false,
    expanded: false,
    comingSoon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }]
};