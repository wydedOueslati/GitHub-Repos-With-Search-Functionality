import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserPage from './containers/UserPage';


function App() {
  const username = prompt("Enter Github Username");
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:userName" component={UserPage} />
        <Redirect to={`/${username}`} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
