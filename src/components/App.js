import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h2>Demo for react-bootstrap-theme-switcher</h2>
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
