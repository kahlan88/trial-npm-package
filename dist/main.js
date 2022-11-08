require("./main.css");
var $bzML5$reactjsxruntime = require("react/jsx-runtime");
require("react");
var $bzML5$reactdom = require("react-dom");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $449aaa0721dc4137$export$2e2bcd8739ae039; });






var $283665f0f7fa11c8$export$c86715117507e8e5 = function(param) {
    var _type = param.type, type = _type === void 0 ? "text" : _type, label = param.label, value = param.value, onChange = param.onChange;
    return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
        className: "simple-form-group",
        children: [
            label && /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("label", {
                className: "simple-text-label",
                children: label
            }),
            /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("input", {
                type: type,
                className: "simple-text-input",
                value: value,
                onChange: function(e) {
                    return onChange && onChange(e.target.value);
                }
            })
        ]
    });
};
var $283665f0f7fa11c8$export$2e2bcd8739ae039 = $283665f0f7fa11c8$export$c86715117507e8e5;




function $449aaa0721dc4137$var$init(id) {
    // console.log("inside init")
    var App = function() {
        return /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsxs)("div", {
            style: {
                width: 640,
                margin: "15px auto"
            },
            children: [
                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)("h1", {
                    children: "Hello React"
                }),
                /*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)((0, $283665f0f7fa11c8$export$2e2bcd8739ae039), {
                    label: "Email Address",
                    placeholder: "name@example.com"
                })
            ]
        });
    };
    (0, $bzML5$reactdom.render)(/*#__PURE__*/ (0, $bzML5$reactjsxruntime.jsx)(App, {}), document.getElementById(id || "root"));
}
$449aaa0721dc4137$var$init("root");
var // console.log("outside init")
$449aaa0721dc4137$export$2e2bcd8739ae039 = $449aaa0721dc4137$var$init;


//# sourceMappingURL=main.js.map
