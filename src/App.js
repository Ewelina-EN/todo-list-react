import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink, StyledList } from "./styled";
import AuthorPage from "./features/author/AuthorPage";

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
      <Route path="/zadania/:id">
        <TaskPage />
      </Route>
      <Route path="/zadania">
        <TasksPage />
      </Route>
      <Route path="/autor">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </HashRouter>
);