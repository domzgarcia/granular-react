"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=require("react"),React__default=_interopDefault(React);require("prop-types");var classnames=_interopDefault(require("classnames")),blacklist=_interopDefault(require("blacklist"));function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}var Button=function(e){function t(){var e,r;_classCallCheck(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(r=_possibleConstructorReturn(this,(e=_getPrototypeOf(t)).call.apply(e,[this].concat(o)))).build=function(e){var t=e.href,r=e.type,n=e.submit,o=e.block,i=e.className,a=e.children,c=e.isActive,s=e.size,u=e.component,l=classnames("Button","Button--"+r,{"Button--block":o},_defineProperty({},"Button--".concat(s),s),{"is-active":c});l=i?"".concat(l," ").concat(i):l;var f=Object.assign({},e);f=blacklist(f,"submit","block","className","children","isActive","size","component");var p=n?"submit":"button";return console.log("component",u),t?React__default.createElement("a",_extends({className:l},f),a):React__default.createElement("button",_extends({className:l},f,{type:p}),a)},r}return _inherits(t,React.PureComponent),_createClass(t,[{key:"render",value:function(){return this.build(this.props)}}]),t}();Button.defaultProps={type:"default"},module.exports=Button;