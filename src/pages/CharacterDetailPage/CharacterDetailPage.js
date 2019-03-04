import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCharacter, characterLoaded } from './actions';
import {
  CharacterDetailCard,
  CharacterEpisodeList,
  Loading,
} from '../../components';
import { Link } from 'react-router-dom';
import { Row, Icon } from 'antd';

class CharacterDetailPage extends React.Component {
  componentDidMount() {
    const { characters, loadCharacter, characterLoaded, match } = this.props;
    const characterId = match.params.id;
    const character = characters[characterId - 1];
    character ? characterLoaded(character) : loadCharacter(characterId);
  }

  render() {
    const {
      character,
      characterLoading,
      episodes,
      episodesLoading,
    } = this.props;
    return (
      <div className="character-detail-page">
        {characterLoading ? (
          <Loading center />
        ) : (
          character.id && (
            <React.Fragment>
              <Link to="/">
                <div className="go-home">
                  <Icon type="arrow-left" /> Go Home
                </div>
              </Link>
              <Row>
                <CharacterDetailCard character={character} />
              </Row>
              <Row>
                <CharacterEpisodeList
                  episodes={episodes}
                  loading={episodesLoading}
                />
              </Row>
            </React.Fragment>
          )
        )}
      </div>
    );
  }
}

CharacterDetailPage.propTypes = {
  characters: PropTypes.array,
  character: PropTypes.object,
  loadCharacter: PropTypes.func,
  characterLoaded: PropTypes.func,
  characterLoading: PropTypes.bool,
  episodes: PropTypes.array,
  episodesLoading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    characters: state.homePageReducer.characters,
    character: state.characterDetailPageReducer.character,
    characterLoading: state.characterDetailPageReducer.characterLoading,
    episodes: state.characterDetailPageReducer.episodes,
    episodesLoading: state.characterDetailPageReducer.episodesLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCharacter: (id) => dispatch(loadCharacter(id)),
  characterLoaded: (character) => dispatch(characterLoaded(character)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetailPage);
