import { Redirect, Switch, Route } from "react-router-dom";

import CreateBook from "../pages/book/create";
import Home from "../pages/home";

import { path } from "./constant";

const Router = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={path.home} />
      <Route path={path.home}>
        <Home />
      </Route>
      <Route path={path.createBook}>
        <CreateBook />
      </Route>
      <Route path={`${path.updateBook}/:bookId`}>
        <div>update</div>
      </Route>
      <Route path={`${path.bookDetail}/:bookId`}>
        <div>detail</div>
      </Route>
      <Route path="*" >
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default Router;
