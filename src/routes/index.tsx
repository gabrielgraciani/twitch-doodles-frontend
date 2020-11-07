import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';
import { Contact } from '../Pages/Contact';
import { Create } from '../Pages/Create';

const Routes = (): React.ReactElement => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/create" component={Create} />
  </Switch>
);

export default Routes;
