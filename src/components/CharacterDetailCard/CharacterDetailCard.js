import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { CHARACTER_STATUS } from '../../constants';
import { InfoItem } from '../../components';

class CharacterDetailCard extends React.Component {
  render() {
    const { character } = this.props;
    const infoItems = [
      {
        name: 'Status',
        value: character.status,
        imgUrl: CHARACTER_STATUS[character.status].logo,
      },
      { name: 'Species', value: character.species },
      { name: 'Gender', value: character.gender },
      { name: 'Origin', value: character.origin.name },
      { name: 'Location', value: character.location.name },
    ];
    return (
      <div className="character-detail-card">
        <Row>
          <Col span={12}>
            <Row className="character-image-row">
              <img
                className="character-detail-image"
                alt="character"
                src={character.image}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row className="character-information-row">
              {infoItems.map((item, key) => (
                <InfoItem
                  key={key}
                  label={item.name}
                  context={item.value}
                  imgUrl={item.imgUrl}
                />
              ))}
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
