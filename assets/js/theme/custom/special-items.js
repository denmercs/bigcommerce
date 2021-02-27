import React from "react";
import ReactDOM from "react-dom";
import PageManager from "../page-manager";

const SpecialItem = ({ context }) => (
  <div>
    <p>Hello World from React!</p>
    <p>Here are my props:</p>
    <pre>{JSON.stringify({ context }, null, 2)}</pre>
    {/* {context && <img src={context.category.products[0].image.data} />} */}
  </div>
);

export default class ReactDemo extends PageManager {
  onReady() {
    const container = document.querySelector("#specialItem");
    console.log("this is the props", this.context);
    ReactDOM.render(<SpecialItem context={this.context} />, container);
  }
}
