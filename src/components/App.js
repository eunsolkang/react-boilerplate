import React from 'react'
import PropTypes from 'prop-types'
import {Switch, Route } from 'react-router-dom';
import { MainPage, NotFoundPage } from 'pages'


const App = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>

    </div>

  );
}

export default App
