"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AccordionMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("@material-ui/icons");

require("./AccordionMenu.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AccordionMenu = function AccordionMenu(_ref) {
  var items = _ref.items,
      _ref$isSubnav = _ref.isSubnav,
      isSubnav = _ref$isSubnav === void 0 ? false : _ref$isSubnav;

  var _useState = (0, _react.useState)(items),
      _useState2 = _slicedToArray(_useState, 2),
      menuItems = _useState2[0],
      setMenuItems = _useState2[1];

  var classes = (0, _classnames.default)({
    'usa-sidenav': !isSubnav,
    'usa-sidenav__sublist': isSubnav
  });

  var onClickHandler = function onClickHandler(index) {
    var newItems = _toConsumableArray(menuItems);

    var item = newItems[index];
    item.expanded = !item.expanded;
    setMenuItems(_toConsumableArray(newItems));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "easey-accordion-menu"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: classes,
    "data-testid": "sidenav"
  }, menuItems.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "sidenav_item_".concat(item.id),
      className: "usa-sidenav__item",
      "aria-expanded": item.expanded
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item.href,
      className: item.current ? "usa-current" : "",
      onClick: function onClick() {
        return onClickHandler(i);
      }
    }, item.label, !isSubnav && item.expanded ? /*#__PURE__*/_react.default.createElement(_icons.KeyboardArrowUpSharp, {
      className: "float-right"
    }) : null, !isSubnav && !item.expanded ? /*#__PURE__*/_react.default.createElement(_icons.KeyboardArrowDownSharp, {
      className: "float-right"
    }) : null), item.subItems && item.subItems.length > 0 && item.expanded ? /*#__PURE__*/_react.default.createElement(AccordionMenu, {
      items: item.subItems,
      isSubnav: true
    }) : null, item.comingSoon && item.comingSoon.length > 0 && item.expanded ? /*#__PURE__*/_react.default.createElement("div", {
      className: "coming-soon"
    }, /*#__PURE__*/_react.default.createElement("h4", null, "COMING SOON"), /*#__PURE__*/_react.default.createElement("p", null, item.comingSoon)) : null);
  })));
};

exports.AccordionMenu = AccordionMenu;
AccordionMenu.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.exact({
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    href: _propTypes.default.string,
    current: _propTypes.default.bool,
    expanded: _propTypes.default.bool,
    comingSoon: _propTypes.default.string,
    subItems: _propTypes.default.arrayOf(_propTypes.default.exact({
      id: _propTypes.default.string.isRequired,
      label: _propTypes.default.string.isRequired,
      href: _propTypes.default.string,
      current: _propTypes.default.bool
    }))
  })).isRequired,
  isSubnav: _propTypes.default.bool
};
var _default = AccordionMenu;
exports.default = _default;