import React from "react";
import ReactDOM from "react-dom";
import PageManager from "../page-manager";

const SpecialItem = (props) => (
  <div>
    <p>Hello World from React!</p>
    <p>Here are my props:</p>
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

export default class ReactDemo extends PageManager {
  onReady() {
    const container = document.querySelector("#specialItem");
    ReactDOM.render(<SpecialItem context={this.context} />, container);
  }
}
