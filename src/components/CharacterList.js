import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component {
  render() {
    const { characters } = this.props;
    return (
      <div className="character-list">
        {characters.map((character, key) => (
          <CharacterCard key={key} character={character} />
        ))}
      </div>
    );
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};

export default CharacterList;
