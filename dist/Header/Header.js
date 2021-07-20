"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactUswds = require("@trussworks/react-uswds");

var _EnvBanner = _interopRequireDefault(require("../EnvBanner/EnvBanner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Header = function Header(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuExpanded = _useState2[0],
      setMenuExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(props.menuItems.map(function () {
    return false;
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      menuOpen = _useState4[0],
      setMenuOpen = _useState4[1];

  var menuButtonClickedHandler = function menuButtonClickedHandler() {
    setMenuExpanded(true);
    setTimeout(function () {
      var navClose = document.querySelector('button.usa-nav__close');
      navClose.focus();
    });
  };

  var menuClosedHandler = function menuClosedHandler() {
    setMenuExpanded(false);
    setTimeout(function () {
      var menuButton = document.querySelector('div.usa-navbar button.usa-button');
      menuButton.focus();
    });
  };

  var searchHandler = function searchHandler(event) {
    // *** URI encode the component after trimming to get rid of leading/trailing spaces
    // *** and mitigate any character collision issues during http request with window.open
    var searchTerm = encodeURI(event.target.value.trim());
    window.open("".concat(props.searchUrl, "/?querytext=").concat(searchTerm), "_blank");
    return false;
  };

  var menuTitleClickHandler = function menuTitleClickHandler(e) {
    e.stopPropagation();
  };

  var menuToggleHandler = function menuToggleHandler(index, value) {
    var newOpenMenu = props.menuItems.map(function () {
      return false;
    });
    newOpenMenu[index] = !value;
    setMenuOpen(newOpenMenu);
  };

  var menuItems = props.menuItems.map(function (p, index) {
    var isOpen = menuOpen[index];
    var subMenuItems = p.menuItems.map(function (c) {
      return /*#__PURE__*/_react.default.createElement(_reactUswds.Link, {
        href: c.link,
        target: "_blank",
        rel: "noopener noreferrer",
        key: "header-submenu-item-" + c.name
      }, c.name);
    });
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactUswds.NavDropDownButton, {
      key: "header-menu-" + p.name,
      menuId: "drop-down-menu" + p.name // TODO: this is causing the +/- sign to disappear
      //isOpen={isOpen}
      ,
      isCurrent: isOpen,
      label: /*#__PURE__*/_react.default.createElement(_reactUswds.Link, {
        className: "font-alt-md text-bold",
        href: p.link,
        target: "_blank",
        rel: "noopener noreferrer",
        key: "header-menu-item-" + p.name,
        onClick: function onClick(e) {
          return menuTitleClickHandler(e);
        }
      }, p.name),
      onToggle: function onToggle() {
        menuToggleHandler(index, isOpen);
      }
    }), /*#__PURE__*/_react.default.createElement(_reactUswds.MegaMenu, {
      id: "drop-down-menu" + p.name,
      key: "drop-down-menu" + p.name,
      isOpen: isOpen,
      items: [subMenuItems]
    }));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/_react.default.createElement(_reactUswds.GovBanner, {
    className: "padding-y-2px bg-base-lighter"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "usa-overlay ".concat(menuExpanded ? "is-visible" : "")
  }), props.environment ? /*#__PURE__*/_react.default.createElement(_EnvBanner.default, {
    label: props.environment
  }) : null, /*#__PURE__*/_react.default.createElement(_reactUswds.Header, {
    basic: true,
    className: "margin-bottom-neg-1"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: props.logoUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    title: "EPA Home page"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: props.logoSrc,
    className: "margin-3",
    alt: "Official EPA Logo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "usa-nav-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "usa-navbar"
  }, /*#__PURE__*/_react.default.createElement(_reactUswds.NavMenuButton, {
    label: "Menu",
    onClick: function onClick() {
      return menuButtonClickedHandler();
    },
    className: "display-block usa-button",
    "aria-haspopup": "true",
    "aria-expanded": menuExpanded
  })), /*#__PURE__*/_react.default.createElement(_reactUswds.PrimaryNav, {
    key: "primaryNav",
    items: menuItems,
    mobileExpanded: menuExpanded,
    onToggleMobileNav: function onToggleMobileNav() {
      return menuClosedHandler();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactUswds.Search, {
    key: "search-epa",
    placeholder: "Search EPA.gov",
    size: "small",
    onSubmit: function onSubmit(event) {
      return searchHandler(event);
    }
  })))));
};

exports.Header = Header;
Header.propTypes = {
  logoSrc: _propTypes.default.string.isRequired,
  logoUrl: _propTypes.default.string.isRequired,
  searchUrl: _propTypes.default.string.isRequired,
  environment: _propTypes.default.string,
  menuItems: [{
    link: _propTypes.default.string.isRequired,
    name: _propTypes.default.string.isRequired,
    menuItems: [{
      link: _propTypes.default.string.isRequired,
      name: _propTypes.default.string.isRequired
    }]
  }]
};
var _default = Header;
exports.default = _default;