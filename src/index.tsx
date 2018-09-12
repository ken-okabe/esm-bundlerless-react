import * as React from "react";
import * as ReactDOM from "react-dom";

import { SubComponent01 } from "./sub/component01";

import { Doc01 } from "./sub/doc01";
import { Doc02 } from "./sub/doc02";

const App = () => (
  <div>
    <h1>Hello React!</h1>
    <SubComponent01 name="Hello!! SubComponent" />
    {Doc01()}
    {Doc02()}
  </div>
);

console.log("test run");

ReactDOM.render(<App />, document.querySelector("#app"));

import { test } from "./sub/test-foo";
test();

