import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _createSuper from "@babel/runtime/helpers/esm/createSuper";
import * as React from 'react';
import ReactDOM from 'react-dom';
import canUseDom from './utils/canUseDom';
export var Portal = /*#__PURE__*/function (_React$Component) {
  _inherits(Portal, _React$Component);

  var _super = _createSuper(Portal);

  function Portal() {
    var _this;

    _classCallCheck(this, Portal);

    _this = _super.apply(this, arguments);
    _this.initRef = false;
    return _this;
  }

  _createClass(Portal, [{
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
      if (!this.initRef && canUseDom()) {
        this.containerRef = this.props.getContainer();
        this.initRef = true;
      }

      this.containerRef ? ReactDOM.unstable_renderSubtreeIntoContainer(this, React.Children.only(this.props.children), this.containerRef) : null;
      return null;
    }
  }]);

  return Portal;
}(React.Component);