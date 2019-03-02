import actionTypes from './action-types';

const initialState = {
  apiInfo: undefined,
  characters: [],
  charactersLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHARACTERS:
      return { ...state, charactersLoading: true };
    case actionTypes.CHARACTERS_LOADED:
      console.log(action);
      return {
        ...state,
        charactersLoading: false,
        characters: [...action.characters],
        apiInfo: { ...action.apiInfo },
      };
    default:
      return state;
  }
};
