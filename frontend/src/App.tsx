import React from "react";
import "./App.scss";
import { AppBar } from "./components/AppBar";
import { BookShelf } from "./components/BookShelf";
import { Login } from "./components/Login";
import { authContext, useAuthContext } from "./components/hooks/useAuthContext";

function App() {
  return (
    <>
      <AppBar />
      <div className="App">
        <authContext.Provider value={useAuthContext()}>
          <Login />
          <BookShelf />
        </authContext.Provider>
      </div>
    </>
  );
}

export default App;
