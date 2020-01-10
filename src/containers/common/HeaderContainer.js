import React from 'react'

import { withRouter } from 'react-router-dom';
import Header from 'components/common/Header'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <Header
      />
    );
  }
}

export default connect(
  (state) => ({
  }),
  (dispatch) => ({

  })
)(withRouter(HeaderContainer));
