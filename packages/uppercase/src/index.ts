const { version } = require("../package.json");
export class Uppercase {
  constructor() {
    console.log("Welcome to My First NPM Package!")
  }
  version = () => {
    return `${version}`;
  };
}

import { WindowInterface } from "./interfaces/window";

(window as WindowInterface & typeof globalThis).Uppercase = new Uppercase();

eval("var Uppercase = Uppercase;");
