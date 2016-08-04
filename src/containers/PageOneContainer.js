import React from 'react';
import {connect} from 'react-redux';
import {getBoundActionCreators} from '../actions-reducers';

import PageOne from '../components/PageOne';

export const Container = (props) => {
  return (
    <PageOne {...props} />
  );
};

function mapStateToProps(state) {
  return {
    page1: state.page2
  };
}

function mapDispatchToProps(dispatch) {
  return getBoundActionCreators(dispatch, 'state1');
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
