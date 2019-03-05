import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';

class InfoItem extends React.Component {
  render() {
    const { label, context, imgUrl } = this.props;
    return (
      <div className="info-item">
        {label}:
        <span>
          {context}
          {imgUrl && (
            <img
              className="info-item-logo"
              alt={label || 'info-item'}
              src={imgUrl}
            />
          )}
        </span>
      </div>
    );
  }
}

InfoItem.propTypes = {
  label: PropTypes.string,
  context: PropTypes.string,
  imgUrl: PropTypes.string,
};

export default InfoItem;
