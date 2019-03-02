import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCharacters } from './actions';
import CharacterList from '../../components/CharacterList';
//import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadCharacters();
  }

  render() {
    const { characters } = this.props;
    return (
      <div className="home-page">
        <CharacterList characters={characters} />
      </div>
    );
  }
}

HomePage.propTypes = {
  characters: PropTypes.array,
  charactersLoading: PropTypes.bool,
  loadCharacters: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    characters: state.homePageReducer.characters,
    charactersLoading: state.homePageReducer.charactersLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: () => dispatch(loadCharacters()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
