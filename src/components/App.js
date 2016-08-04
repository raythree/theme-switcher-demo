import React from 'react';

const App = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h2>Demo for react-bootstrap-theme-switcher</h2>
          <div style={{marginBottom: '1em'}}>
            <a href="https://github.com/raythree/theme-switcher-demo" target="_blank">Code is here.</a>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

App.propTypes = { children: React.PropTypes.node };

export default App;
