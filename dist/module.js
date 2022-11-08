import "./main.css";
import {jsxs as $d4YY5$jsxs, jsx as $d4YY5$jsx} from "react/jsx-runtime";
import "react";
import {render as $d4YY5$render} from "react-dom";







const $eed5bb8c5e1eef6c$export$c86715117507e8e5 = ({ type: type = "text" , label: label , value: value , onChange: onChange  })=>/*#__PURE__*/ (0, $d4YY5$jsxs)("div", {
        className: "simple-form-group",
        children: [
            label && /*#__PURE__*/ (0, $d4YY5$jsx)("label", {
                className: "simple-text-label",
                children: label
            }),
            /*#__PURE__*/ (0, $d4YY5$jsx)("input", {
                type: type,
                className: "simple-text-input",
                value: value,
                onChange: (e)=>onChange && onChange(e.target.value)
            })
        ]
    });
var $eed5bb8c5e1eef6c$export$2e2bcd8739ae039 = $eed5bb8c5e1eef6c$export$c86715117507e8e5;




function $79881796d07e2293$var$init(id) {
    // console.log("inside init")
    const App = ()=>/*#__PURE__*/ (0, $d4YY5$jsxs)("div", {
            style: {
                width: 640,
                margin: "15px auto"
            },
            children: [
                /*#__PURE__*/ (0, $d4YY5$jsx)("h1", {
                    children: "Hello React"
                }),
                /*#__PURE__*/ (0, $d4YY5$jsx)((0, $eed5bb8c5e1eef6c$export$2e2bcd8739ae039), {
                    label: "Email Address",
                    placeholder: "name@example.com"
                })
            ]
        });
    (0, $d4YY5$render)(/*#__PURE__*/ (0, $d4YY5$jsx)(App, {}), document.getElementById(id || "root"));
}
$79881796d07e2293$var$init("root");
var // console.log("outside init")
$79881796d07e2293$export$2e2bcd8739ae039 = $79881796d07e2293$var$init;


export {$79881796d07e2293$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
