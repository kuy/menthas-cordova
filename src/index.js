import 'babel-polyfill';
import inject from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './app';
import Top from './pages/top';
import About from './pages/about';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('deviceready', () => {
  inject();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Top} />
          <Route path="about" component={About} />

          {/* NOTE: Required to accept Cordova's default URL */}
          <Redirect from="android_asset/www/index.html" to="/" />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('container')
  );
}, false);
