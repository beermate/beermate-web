import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppContainer from './components/AppContainer/AppContainer.jsx';

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}/>
    </Router>
);

export { routes };