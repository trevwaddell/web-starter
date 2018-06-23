import React from "react";
import { render } from "react-dom";

import App from "./components/App";

render(<App />, document.querySelector(".app"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
