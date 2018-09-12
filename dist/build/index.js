import * as React from "/esm/react-esm.js";
import * as ReactDOM from "/esm/react-dom-esm.js";
import { SubComponent01 } from "./sub/component01.js";
import { Doc01 } from "./sub/doc01.js";
import { Doc02 } from "./sub/doc02.js";
const App = () => (React.createElement("div", null,
    React.createElement("h1", null, "Hello React!"),
    React.createElement(SubComponent01, { name: "Hello!! SubComponent" }),
    Doc01(),
    Doc02()));
console.log("test run");
ReactDOM.render(React.createElement(App, null), document.querySelector("#app"));
import { test } from "./sub/test-foo.js";
test();
