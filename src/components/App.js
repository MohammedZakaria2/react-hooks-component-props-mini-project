import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";

console.log(blogData);
function App() {
  return (
    <div className="App">
      <Header  name="Underreacted" />
      <About image={'logo.png'} about="About this blog" />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
