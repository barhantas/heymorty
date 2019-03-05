import {
  loadCharacter,
  characterLoaded,
  episodesLoaded,
  characterNotFound,
} from './actions';
import actionTypes from './action-types';

describe('actions', () => {
  it('should create an action to load a character', () => {
    const expectedAction = {
      type: actionTypes.LOAD_CHARACTER,
    };
    expect(loadCharacter()).toEqual(expectedAction);
  });
  it('should create an action after a character loaded', () => {
    const character = {};
    const expectedAction = {
      type: actionTypes.CHARACTER_LOADED,
      character,
    };
    expect(characterLoaded(character)).toEqual(expectedAction);
  });
  it('should create an action after episodes loaded', () => {
    const detailedEpisodes = [];
    const expectedAction = {
      type: actionTypes.EPISODES_LOADED,
      detailedEpisodes,
    };
    expect(episodesLoaded(detailedEpisodes)).toEqual(expectedAction);
  });
  it('should create an action after character not found', () => {
    const expectedAction = {
      type: actionTypes.CHARACTER_NOT_FOUND,
    };
    expect(characterNotFound()).toEqual(expectedAction);
  });
});
