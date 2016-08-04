import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import PageOneContainer from './containers/PageOneContainer';
import PageTwoContainer from './containers/PageTwoContainer';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageOneContainer}/>
    <Route path="page1" component={PageOneContainer}/>
    <Route path="page2" component={PageTwoContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
