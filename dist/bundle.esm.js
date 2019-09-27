import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import blacklist from 'blacklist';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

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
      var classes = classnames("Button", "Button--" + type, {
        "Button--block": block
      }, _defineProperty({}, "Button--".concat(size), size), {
        "is-active": isActive
      }); // Combine classes

      classes = className ? "".concat(classes, " ").concat(className) : classes; // Set valid attributes

      var attr = Object.assign({}, props);
      attr = blacklist(attr, "submit", "block", "className", "children", "isActive", "size", "component"); // Set type

      var btnType = submit ? "submit" : "button";
      console.log("component", component); // ? No idea
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

var BUTTON_SIZES = ["lg", "sm", "xs"];
var BUTTON_TYPES = ["default", "default-primary", "default-success", "default-warning", "default-danger", "hollow-primary", "hollow-success", "hollow-warning", "hollow-danger", "primary", "success", "warning", "danger", "link", "link-text", "link-primary", "link-success", "link-warning", "link-danger", "link-cancel", "link-delete"];
Button.defaultProps = {
  type: "default"
};
Button.propTypes = {
  block: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.element,
  href: PropTypes.string,
  isActive: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_SIZES),
  submit: PropTypes.bool,
  type: PropTypes.oneOf(BUTTON_TYPES)
};

export default Button;
