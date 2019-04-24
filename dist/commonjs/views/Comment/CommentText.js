"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lib = require("../../lib");

/**
 * A comment can contain text.
 */
function CommentText(props) {
  var className = props.className,
      children = props.children,
      content = props.content;
  var classes = (0, _classnames["default"])(className, 'text');
  var rest = (0, _lib.getUnhandledProps)(CommentText, props);
  var ElementType = (0, _lib.getElementType)(CommentText, props);
  return _react["default"].createElement(ElementType, (0, _extends2["default"])({}, rest, {
    className: classes
  }), _lib.childrenUtils.isNil(children) ? content : children);
}

CommentText.handledProps = ["as", "children", "className", "content"];
CommentText.propTypes = process.env.NODE_ENV !== "production" ? {
  /** An element type to render as (string or function). */
  as: _lib.customPropTypes.as,

  /** Primary content. */
  children: _propTypes["default"].node,

  /** Additional classes. */
  className: _propTypes["default"].string,

  /** Shorthand for primary content. */
  content: _lib.customPropTypes.contentShorthand
} : {};
var _default = CommentText;
exports["default"] = _default;