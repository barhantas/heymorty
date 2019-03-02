import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const { Meta } = Card;

class CharacterCard extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <div className="character-card">
        <Card
          hoverable
          cover={<img alt="example" src={character.image} />}>
          <Meta
            title={character.name}
            // description={
            //   <p>
            //     {character.status}
            //     {character.species}
            //     {character.gender}
            //     {character.origin.name}
            //     {character.location.name}
            //   </p>
            // }
          />
        </Card>
      </div>
    );
  }
}

CharacterCard.propTypes = { character: PropTypes.object };

export default CharacterCard;
