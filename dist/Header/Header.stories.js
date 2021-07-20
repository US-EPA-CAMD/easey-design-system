"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WithEnvironmentBanner = exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Header',
  component: _Header.Header
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Header.Header, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  logoSrc: '/images/EPALogo.svg',
  logoUrl: 'https://www.epa.gov',
  searchUrl: 'https://search.epa.gov/epasearch',
  menuItems: [{
    link: 'https://www.epa.gov/environmental-topics',
    name: 'Environmental Topics',
    menuItems: [{
      link: 'https://www.epa.gov/environmental-topics/air-topics',
      name: 'Air'
    }, {
      link: 'https://www.epa.gov/bedbugs',
      name: 'Bed Bugs'
    }, {
      link: 'https://www.epa.gov/environmental-topics/chemicals-and-toxics-topics',
      name: 'Chemicals and Toxics'
    }, {
      link: 'https://www.epa.gov/environmental-topics/location-specific-environmental-information',
      name: 'Environmental Information by Location'
    }]
  }, {
    link: 'https://www.epa.gov/laws-regulations',
    name: 'Laws and Regulations',
    menuItems: [{
      link: 'https://www.epa.gov/regulatory-information-sector',
      name: 'By Business Sector'
    }, {
      link: 'https://www.epa.gov/regulatory-information-topic',
      name: 'By Topics'
    }, {
      link: 'https://www.epa.gov/compliance',
      name: 'Compliance'
    }, {
      link: 'https://www.epa.gov/enforcement',
      name: 'Enforcement'
    }]
  }, {
    link: 'https://www.epa.gov/aboutepa',
    name: 'About EPA',
    menuItems: [{
      link: 'https://www.epa.gov/aboutepa/epa-organization-chart',
      name: 'Organization Chart'
    }, {
      link: 'https://cfpub.epa.gov/locator/index.cfm',
      name: 'Staff Directory'
    }, {
      link: 'https://www.epa.gov/planandbudget',
      name: 'Planning, Budget, and Results'
    }, {
      link: 'https://www.epa.gov/careers',
      name: 'Jobs and Internships'
    }]
  }, {
    link: 'https://www.epa.gov/accessibility',
    name: 'Accessibility',
    menuItems: []
  }, {
    link: 'https://www.epa.gov/privacy',
    name: 'Privacy',
    menuItems: []
  }, {
    link: 'https://www.epa.gov/privacy/privacy-and-security-notice',
    name: 'Privacy and Security Notice',
    menuItems: []
  }]
};
var WithEnvironmentBanner = Template.bind({});
exports.WithEnvironmentBanner = WithEnvironmentBanner;
WithEnvironmentBanner.args = _objectSpread({
  environment: 'development'
}, Default.args);