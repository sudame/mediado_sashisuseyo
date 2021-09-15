import React from "react";
import "./App.scss";
import { AppBar } from "./components/AppBar";
import { BookShelf } from "./components/BookShelf";
import { Login } from "./components/Login";
import { authContext, useAuthContext } from "./components/hooks/useAuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppBar />
      <main className="main">
        <Router>
          <Switch>
            <authContext.Provider value={useAuthContext()}>
              <Route exact path="/Login" component={Login} />
              <Route exact path="/" component={BookShelf} />
            </authContext.Provider>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
