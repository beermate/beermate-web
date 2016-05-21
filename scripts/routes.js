import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Main from './components/Main.jsx';

let routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}/>
    </Router>
);

export {routes};