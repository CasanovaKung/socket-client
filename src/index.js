import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
import registerServiceWorker from './registerServiceWorker'

import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import jQuery from 'jquery'

import 'font-awesome/css/font-awesome.min.css'
import 'simple-line-icons/css/simple-line-icons.css'
import { Scrollbars } from 'react-custom-scrollbars'

import './styles/style.css'

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import Full from './containers/Full'
import Login from './views/Login'
import Register from './views/Register'
import Page404 from './views/Page404'
import Page500 from './views/Page500'

import * as MainFunction from './customizes/MainFunction'

console.log(typeof MainFunction.makeRandomId)
const history = createBrowserHistory()
window.jQuery = window.$ = jQuery

let windowWidth = jQuery(document).width()
let windowHeigth = jQuery(document).height()
jQuery(document).click(function(e) {
  windowWidth = jQuery(document).width()
  windowHeigth = jQuery(document).height()
})

ReactDOM.render(
  (
    <Scrollbars 
      style={{ width: windowWidth, height: windowHeigth }}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login}/>
          <Route exact path="/register" name="Register Page" component={Register}/>
          <Route exact path="/404" name="Page 404" component={Page404}/>
          <Route exact path="/500" name="Page 500" component={Page500}/>
          <Route path="/" name="Test" component={Full} />
        </Switch>
      </Router>
    </Scrollbars>
  ),
  document.querySelector('#root')
)