import React from "react";
import "./App.scss";
import { BookShelf } from "./components/BookShelf";
import { Login } from "./components/Login";
import { authContext, useAuthContext } from "./components/hooks/useAuthContext";

function App() {
  return (
    <div className="App">
      <authContext.Provider value={useAuthContext()}>
        <Login />
        <BookShelf />
      </authContext.Provider>
    </div>
  );
}

export default App;
