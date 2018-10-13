import React from "react";
import ReactDOM from "react-dom";
import Feed from "./components/Feed";
import 'bootstrap/dist/css/bootstrap.min.css';

var destination = document.querySelector("#container");
ReactDOM.render(
    <div>
        <Feed/>
    </div>,
    destination
);