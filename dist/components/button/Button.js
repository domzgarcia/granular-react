"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _blacklist = _interopRequireDefault(require("blacklist"));

class Button extends _react.PureComponent {
  constructor(...args) {
    super(...args);

    this.build = props => {
      const {
        href,
        type,
        submit,
        block,
        className,
        children,
        isActive,
        size,
        component
      } = props;
      let classes = (0, _classnames.default)('Button', 'Button--' + type, {
        'Button--block': block
      }, {
        [`Button--${size}`]: size
      }, {
        'is-active': isActive
      }); // Combine classes

      classes = className ? `${classes} ${className}` : classes; // Set valid attributes

      let attr = Object.assign({}, props);
      attr = (0, _blacklist.default)(attr, 'submit', 'block', 'className', 'children', 'isActive', 'size', 'component'); // Set type

      const btnType = submit ? 'submit' : 'button';
      console.log('component', component); // ? No idea

      dd(props); // Create element

      if (href) {
        return _react.default.createElement("a", (0, _extends2.default)({
          className: classes
        }, attr), children);
      }

      return _react.default.createElement("button", (0, _extends2.default)({
        className: classes
      }, attr, {
        type: btnType
      }), children);
    };
  }

  render() {
    return this.build(this.props);
  }

}

const BUTTON_SIZES = process.env.NODE_ENV !== "production" ? ['lg', 'sm', 'xs'] : {};
const BUTTON_TYPES = process.env.NODE_ENV !== "production" ? ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'hollow-primary', 'hollow-success', 'hollow-warning', 'hollow-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-text', 'link-primary', 'link-success', 'link-warning', 'link-danger', 'link-cancel', 'link-delete'] : {};
Button.defaultProps = {
  type: 'default'
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  block: _propTypes.default.bool,
  className: _propTypes.default.string,
  component: _propTypes.default.element,
  href: _propTypes.default.string,
  isActive: _propTypes.default.bool,
  size: _propTypes.default.oneOf(BUTTON_SIZES),
  submit: _propTypes.default.bool,
  type: _propTypes.default.oneOf(BUTTON_TYPES)
} : void 0;
var _default = Button;
exports.default = _default;