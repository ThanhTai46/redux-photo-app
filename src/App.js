import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./App.scss";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Loadding from "./utils/Loadding";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
