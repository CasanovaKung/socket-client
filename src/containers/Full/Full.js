import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Container} from 'reactstrap'

import Header from './../../components/Header'

// import FontAwesome from '../../views/Icons/FontAwesome/'
// import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/'

class Full extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
        </div>
      </div>
    )
  }
}

export default Full