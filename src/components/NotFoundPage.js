import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h4>Sorry, that page does not exist.</h4>
          <div>
            <Link to="/"> Go back to home page</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
