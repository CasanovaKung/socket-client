import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {HashRouter, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import 'font-awesome/css/font-awesome.min.css'
import 'simple-line-icons/css/simple-line-icons.css'

// import './scss/style.scss'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import Full from './containers/Full'

const history = createBrowserHistory()

ReactDOM.render(
  (
    <HashRouter history={history}>
      <Switch>
        <Route extact path="/test" name="Test" component="" />
        <Route path="/" name="Test" component={Full} />
      </Switch>
    </HashRouter>
  ),
  document.querySelector('#root')
)