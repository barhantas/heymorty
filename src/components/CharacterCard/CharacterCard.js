import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

class CharacterCard extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <div className="character-card">
        <Link to={'character/' + character.id}>
          <Card hoverable cover={<img alt="character" src={character.image} />}>
            <Meta title={character.name} />
          </Card>
        </Link>
      </div>
    );
  }
}

CharacterCard.propTypes = { character: PropTypes.object };

export default CharacterCard;
