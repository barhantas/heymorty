import './index.scss';

import React from 'react';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found-page">
        <div className="wrapper">
          <div className="img-wrapper">
            <span>44</span>
          </div>
          <p>
            The page you are trying to search has been <br /> moved to another
            universe.
          </p>
          <button onClick={() => (window.location = '/')} type="button">
            GO HOME
          </button>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
