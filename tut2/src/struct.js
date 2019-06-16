import React from "react";

function hedgy() {
  return "hedgy";
}

function Struct() {
  const user = {
    firstName: "Hedge",
    lastName: "Hog"
  };

  const element = (
    <div>
      <h1>Hello, {user.firstName + user.lastName}</h1>
      <h1>Are you a {hedgy()} ?</h1>
    </div>
  );

  return element;
}

export default Struct;
