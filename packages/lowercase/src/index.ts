const { version } = require("../package.json");
export class Uppercase {
  constructor() {
    console.log("Welcome to My Second NPM Package!")
  }
  version = () => {
    return `${version}`;
  };
}

// TODO: test

import { WindowInterface } from "./interfaces/window";

(window as WindowInterface & typeof globalThis).Uppercase = new Uppercase();

eval("var Uppercase = Uppercase;");
