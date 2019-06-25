import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { initStore } from './store';
import './globalStyles.css';
import * as serviceWorker from './serviceWorker';

import Home from './pages/home';

const store = initStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
