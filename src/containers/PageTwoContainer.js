import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {actions} from '../actions-reducers';

import PageTwo from '../components/PageTwo';

export const Container = (props) => {
  return (
    <PageTwo {...props} />
  );
};

function mapStateToProps(state) {
  return {
    page1: state.page1
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
