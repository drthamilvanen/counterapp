import { render } from "@testing-library/react";
import React, { Component, useState } from "react";
import "./assets/css/style.css";
import Images from "./components/images";

function App() {
  const [title, setTitle] = React.useState("Hello React");
  const [isShowing, setisShowing] = React.useState(false);

  function handleClick(){
    setisShowing(!isShowing);

  }

  return (
    <section className="flex justify-center">
    <div className="w-1/2">
      <div className="text-center">
        <div className="my-4">{title}</div>
        <button
          className="p-1 bg-blue-700 text-white my-2"
          onClick={handleClick}>
          Toggle Image
        </button>
      </div>
    {
        isShowing ? <Images/> : null
    }
      
 
      
    </div>
  </section>
  );
}

export default App;
