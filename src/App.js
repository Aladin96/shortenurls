import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/home/Home";

import store from "./redux/store";
import Urls from "./components/urls/Urls";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:id" component={Urls} />
      </Switch>
    </Provider>
  );
}

export default App;
