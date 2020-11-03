import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Contact } from '../Pages/Contact';

const Routes = (): React.ReactElement => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
