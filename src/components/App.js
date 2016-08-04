import React from 'react';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Link className="btn btn-default" to="page1">Page One</Link>
          <Link className="btn btn-default"  to="page2">Page Two</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
