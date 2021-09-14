import React from "react";
import "./App.scss";
import { BookShelf } from "./components/BookShelf";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <BookShelf />
    </div>
  );
}

export default App;
