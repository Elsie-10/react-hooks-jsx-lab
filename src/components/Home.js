import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return React.createElement(
    "div",
    { id: "home" },
    React.createElement(
      "h1",
      { style: { color: "firebrick" } },
      `${name} is a Web Developer from ${city}`
    )
  );
}

export default Home;
