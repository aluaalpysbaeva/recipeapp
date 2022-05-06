import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../App";
import Recipe from "./Recipe";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Routes>
  </BrowserRouter>
);

export default Router;