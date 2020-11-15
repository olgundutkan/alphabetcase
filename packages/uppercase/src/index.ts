const { version } = require("../package.json");
export class Uppercase {
  version = () => {
    return `${version}`;
  };
}

import { WindowInterface } from "./interfaces/window";

(window as WindowInterface & typeof globalThis).Uppercase = new Uppercase();

eval("var Uppercase = Uppercase;");
