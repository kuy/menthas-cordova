import 'babel-polyfill';
import inject from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './app';
import News from './pages/news';
import About from './pages/about';
import store from './store';

const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('deviceready', () => {
  inject();
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Redirect from="/" to="/categories/top" />
        <Route path="/" component={App}>
          <Route path="categories/:name" component={News} />
          <Route path="about" component={About} />

          {/* NOTE: Required to accept Cordova's default URL */}
          <Redirect from="android_asset/www/index.html" to="/" />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('container')
  );
}, false);
