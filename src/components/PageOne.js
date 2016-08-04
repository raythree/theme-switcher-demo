import React from 'react';
import { ThemeChooser } from 'react-bootstrap-theme-switcher';

class PageOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Page One</h2>
          <ThemeChooser />
          {this.props.message}
        </div>
      </div>
    );
  }
}

PageOne.propTypes = { message: React.PropTypes.string };
PageOne.defaultProps = { message: 'This is page one' };

export default PageOne;
