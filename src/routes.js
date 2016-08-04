import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PageOneContainer from './containers/PageOneContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageOneContainer}/>
    <Route path="*" component={PageOneContainer}/>
  </Route>
);
