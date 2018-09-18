import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from './NoMatch';
import Conversations from './Conversations';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Conversations} />
      <Route component={NoMatch} />
    </Switch>
  </div>
);

export default Routes;
