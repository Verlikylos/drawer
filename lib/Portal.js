"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Portal = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _canUseDom = _interopRequireDefault(require("./utils/canUseDom"));

var Portal = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  var _super = (0, _createSuper2.default)(Portal);

  function Portal() {
    var _this;

    (0, _classCallCheck2.default)(this, Portal);
    _this = _super.apply(this, arguments);
    _this.initRef = false;
    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$didUpdate, _this$props;

      // @ts-ignore
      this.props.innerRef({});
      (_this$props$didUpdate = (_this$props = this.props).didUpdate) === null || _this$props$didUpdate === void 0 ? void 0 : _this$props$didUpdate.call(_this$props, this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props$didUpdate2, _this$props2;

      (_this$props$didUpdate2 = (_this$props2 = this.props).didUpdate) === null || _this$props$didUpdate2 === void 0 ? void 0 : _this$props$didUpdate2.call(_this$props2, this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      return function () {
        _this2.containerRef.parentNode.removeChild(_this2.containerRef);
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.initRef && (0, _canUseDom.default)()) {
        this.containerRef = this.props.getContainer();
        this.initRef = true;
      }

      this.containerRef ? _reactDom.default.unstable_renderSubtreeIntoContainer(this, React.Children.only(this.props.children), this.containerRef) : null;
      return null;
    }
  }]);
  return Portal;
}(React.Component);

exports.Portal = Portal;