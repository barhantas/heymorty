import actionTypes from './action-types';

export const loadCharacters = () => {
  return { type: actionTypes.LOAD_CHARACTERS };
};

export const charactersLoaded = (characters, apiInfo) => {
  return { type: actionTypes.CHARACTERS_LOADED, characters, apiInfo };
};
