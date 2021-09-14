import React from "react";
import "./App.scss";
import { AppBar } from "./components/AppBar";
import { BookShelf } from "./components/BookShelf";

function App() {
  return (
    <div className="App">
      <AppBar />
      <main className="main">
        <BookShelf />
      </main>
    </div>
  );
}

export default App;
