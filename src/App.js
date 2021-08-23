import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from "./features/tasks/TasksPage/index.js";
import { StyledNavLink, StyledList } from "./styled";

export default () => (
  <HashRouter>
    <StyledList>
      <StyledNavLink to="/zadania">
        Zadania
      </StyledNavLink>
      <StyledNavLink to="/autor">
        O autorze
      </StyledNavLink>
    </StyledList>
    <Switch>
      <Route path="/autor">
        <Author />
      </Route>
      <Route path="/zadania">
        <Tasks />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);