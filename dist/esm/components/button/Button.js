import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import blacklist from 'blacklist';

var Button =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Button)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.build = function (props) {
      var href = props.href,
          type = props.type,
          submit = props.submit,
          block = props.block,
          className = props.className,
          children = props.children,
          isActive = props.isActive,
          size = props.size,
          component = props.component;
      var classes = classnames('Button', 'Button--' + type, {
        'Button--block': block
      }, _defineProperty({}, "Button--".concat(size), size), {
        'is-active': isActive
      }); // Combine classes

      classes = className ? "".concat(classes, " ").concat(className) : classes; // Set valid attributes

      var attr = Object.assign({}, props);
      attr = blacklist(attr, 'submit', 'block', 'className', 'children', 'isActive', 'size', 'component'); // Set type

      var btnType = submit ? 'submit' : 'button';
      console.log('component', component); // ? No idea
      // Create element

      if (href) {
        return React.createElement("a", _extends({
          className: classes
        }, attr), children);
      }

      return React.createElement("button", _extends({
        className: classes
      }, attr, {
        type: btnType
      }), children);
    };

    return _this;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return this.build(this.props);
    }
  }]);

  return Button;
}(PureComponent);

var BUTTON_SIZES = process.env.NODE_ENV !== "production" ? ['lg', 'sm', 'xs'] : {};
var BUTTON_TYPES = process.env.NODE_ENV !== "production" ? ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'hollow-primary', 'hollow-success', 'hollow-warning', 'hollow-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-text', 'link-primary', 'link-success', 'link-warning', 'link-danger', 'link-cancel', 'link-delete'] : {};
Button.defaultProps = {
  type: 'default'
};
process.env.NODE_ENV !== "production" ? Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.element,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_SIZES),
  submit: PropTypes.bool,
  type: PropTypes.oneOf(BUTTON_TYPES)
} : void 0;
export default Button;