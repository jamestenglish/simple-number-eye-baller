import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap";
import "./style/fonts.css";
import "./vendor/neon-glow/css/bootstrap4-neon-glow.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

library.add(faEye, faSearch);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
