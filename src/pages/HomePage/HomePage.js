import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { loadCharacters } from './actions';
import { CharacterList, Loading } from '../../components';

class HomePage extends React.Component {
  componentDidMount() {
    const { apiInfo } = this.props;
    this.props.loadCharacters(apiInfo);
  }

  render() {
    const {
      characters,
      loadCharacters,
      charactersLoading,
      apiInfo,
    } = this.props;
    return (
      <div className="home-page">
        <InfiniteScroll
          className="infinite-scroll"
          dataLength={characters.length} //This is important field to render the next data
          next={() => {
            loadCharacters(apiInfo);
          }}
          hasMore={!!apiInfo.next}
          scrollThreshold={1}
          loader={charactersLoading && <Loading key={0} />}>
          <CharacterList characters={characters} />
        </InfiniteScroll>
      </div>
    );
  }
}

HomePage.propTypes = {
  characters: PropTypes.array,
  charactersLoading: PropTypes.bool,
  loadCharacters: PropTypes.func,
  apiInfo: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    characters: state.homePageReducer.characters,
    charactersLoading: state.homePageReducer.charactersLoading,
    apiInfo: state.homePageReducer.apiInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: (apiInfo) => dispatch(loadCharacters(apiInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
