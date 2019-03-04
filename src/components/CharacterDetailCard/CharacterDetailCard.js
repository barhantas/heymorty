import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { CHARACTER_STATUS } from '../../constants';

class CharacterDetailCard extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <div className="character-detail-card">
        <Row>
          <Col span={8}>
            <Row className="character-image-row">
              <img
                className="character-detail-image"
                alt="character"
                src={character.image}
              />
            </Row>
          </Col>
          <Col span={16}>
            <Row className="character-information-row">
              <div className="info-item">
                Status:
                <span>
                  {character.status}
                  <img
                    className="character-status-logo"
                    alt="character-status"
                    src={CHARACTER_STATUS[character.status].logo}
                  />
                </span>
              </div>
              <div className="info-item">
                Species: <span>{character.species}</span>
              </div>
              <div className="info-item">
                Gender: <span>{character.gender}</span>
              </div>
              <div className="info-item">
                Origin: <span>{character.origin.name}</span>
              </div>
              <div className="info-item">
                Location: <span>{character.location.name}</span>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="character-name-row">{character.name}</Row>
      </div>
    );
  }
}

export default CharacterDetailCard;

CharacterDetailCard.propTypes = {
  character: PropTypes.object,
};
