import actionTypes from './action-types';

export const loadCharacters = (apiInfo) => {
  return { type: actionTypes.LOAD_CHARACTERS, apiInfo };
};

export const charactersLoaded = (characters, apiInfo) => {
  return { type: actionTypes.CHARACTERS_LOADED, characters, apiInfo };
};
