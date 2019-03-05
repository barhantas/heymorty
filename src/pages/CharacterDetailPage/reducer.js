import actionTypes from './action-types';

const initialState = {
  character: {},
  characterLoading: false,
  episodes: [],
  episodesLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTER:
      return { ...state, characterLoading: true, episodesLoading: true, };
    case actionTypes.CHARACTER_LOADED:
      return {
        ...state,
        characterLoading: false,
        character: action.character,
      };
    case actionTypes.EPISODES_LOADED:
      return {
        ...state,
        episodesLoading: false,
        episodes: action.detailedEpisodes,
      };
    default:
      return state;
  }
};
