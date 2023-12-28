import React from "react";
import "./App.css";
import { AuthorIndex } from "./components/layouts/author-index";
// import SplitScreenIndex from "./components/layouts/split-screen/index";
function App() {
  return (
    <div className="App">
      {/* <SplitScreenIndex /> */}
      <AuthorIndex />
    </div>
  );
}

export default App;
