import * as React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Beer from './beer/beer';
import Login from './login/login';
import Signup from './signup/signup';
import PrivateRouteOutlet from './privareRouter';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/beers" element={<PrivateRouteOutlet />}>
          <Route path="" element={<Beer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
