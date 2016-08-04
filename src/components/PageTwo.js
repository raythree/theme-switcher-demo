import React from 'react';

class PageTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h2>Page Two</h2>
          {this.props.message}
        </div>
      </div>
    );
  }
}

PageTwo.propTypes = { message: React.PropTypes.string };
PageTwo.defaultProps = { message: 'This is page Two' };

export default PageTwo;
