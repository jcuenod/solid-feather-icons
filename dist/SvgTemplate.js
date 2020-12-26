"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _web = require("solid-js/web");

const _tmpl$ = (0, _web.template)(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"></svg>`, 2);

var SvgTemplate = function SvgTemplate() {
  for (var _len = arguments.length, children = new Array(_len), _key = 0; _key < _len; _key++) {
    children[_key] = arguments[_key];
  }

  return function (props) {
    return function () {
      var _el$ = _tmpl$.cloneNode(true);

      (0, _web.insert)(_el$, children);
      (0, _web.effect)(function (_p$) {
        var _v$ = props.size || 24,
            _v$2 = props.size || 24,
            _v$3 = props.strokeWidth || 2;

        _v$ !== _p$._v$ && (0, _web.setAttribute)(_el$, "width", _p$._v$ = _v$);
        _v$2 !== _p$._v$2 && (0, _web.setAttribute)(_el$, "height", _p$._v$2 = _v$2);
        _v$3 !== _p$._v$3 && (0, _web.setAttribute)(_el$, "stroke-width", _p$._v$3 = _v$3);
        return _p$;
      }, {
        _v$: undefined,
        _v$2: undefined,
        _v$3: undefined
      });
      return _el$;
    }();
  };
};

var _default = SvgTemplate;
exports["default"] = _default;