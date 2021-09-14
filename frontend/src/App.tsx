import React from "react";
import "./App.scss";
import { BookShelf } from "./components/BookShelf";

function App() {
  return (
    <div className="App">
      <div className="app-bar"></div>
      <main className="main">
        <BookShelf />
      </main>
    </div>
  );
}

export default App;
