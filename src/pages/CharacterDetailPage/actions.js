import actionTypes from './action-types';

export const loadCharacter = (id) => {
  return { type: actionTypes.LOAD_CHARACTER, id };
};

export const characterLoaded = (character) => {
  return { type: actionTypes.CHARACTER_LOADED, character };
};

export const episodesLoaded = (detailedEpisodes) => {
  return { type: actionTypes.EPISODES_LOADED, detailedEpisodes };
};
