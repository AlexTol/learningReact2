import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello1 from "./hello1";
import Hello2 from "./hello2";
import Name from "./name";
import Element1 from "./element1";
import Struct from "./struct";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Hello1 />, document.getElementById("hello1"));
ReactDOM.render(<Hello2 />, document.getElementById("hello2"));
ReactDOM.render(<Name />, document.getElementById("name"));
ReactDOM.render(<Element1 />, document.getElementById("element1"));
ReactDOM.render(<Struct />, document.getElementById("struct"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
