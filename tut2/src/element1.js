import React from "react";

function Element1() {
  const element = React.createElement(
    "h1",
    { className: "element1" },
    "This is a jsx example"
  );

  return element;
}

export default Element1;
