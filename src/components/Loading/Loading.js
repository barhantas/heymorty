import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  render() {
    const { center } = this.props;
    return <div className={`loading ${center && 'center'}`} />;
  }
}

Loading.propTypes = {
  center: PropTypes.bool,
};

export default Loading;
