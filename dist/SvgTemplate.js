var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "solid-js/jsx-runtime";
var SvgTemplate = function () {
    var children = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments[_i];
    }
    return function (props) {
        return _jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: props.size || 24, height: props.size || 24, viewBox: "0 0 24 24", "stroke-width": props.strokeWidth || 2, "stroke-linecap": "round", "stroke-linejoin": "round", class: "feather feather-activity" }, { children: children }), void 0);
    };
};
export default SvgTemplate;
