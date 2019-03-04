import actionTypes from './action-types';

const initialState = {
  apiInfo: {},
  characters: [],
  charactersLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTERS:
      return { ...state, charactersLoading: true };
    case actionTypes.CHARACTERS_LOADED:
      return {
        ...state,
        charactersLoading: false,
        characters: [...state.characters, ...action.characters],
        apiInfo: { ...action.apiInfo },
      };
    default:
      return state;
  }
};
