import React from 'react'

import MainComponents from 'components/main/MainComponents';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
import queryString from "query-string";

class MainContainer extends React.Component {

  componentDidMount(){
  }

  render () {
    return (
      <MainComponents/>
    )
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(withRouter(MainContainer));
