import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const handleClick = () => {
    setHeading('Radical Rhinos')
  }

  return (
    <>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
      <h1>{heading}</h1>
      <p>Hello World</p>
    </>
  )
}

export default App;