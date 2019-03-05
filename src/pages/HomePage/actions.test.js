import { loadCharacters, charactersLoaded } from './actions';
import actionTypes from './action-types';

describe('actions', () => {
  it('should create an action to load characters', () => {
    const expectedAction = {
      type: actionTypes.LOAD_CHARACTERS,
    };
    expect(loadCharacters()).toEqual(expectedAction);
  });
  it('should create an action after characters loaded', () => {
    const characters = [];
    const apiInfo = {};
    const expectedAction = {
      type: actionTypes.CHARACTERS_LOADED,
      characters,
      apiInfo,
    };
    expect(charactersLoaded(characters, apiInfo)).toEqual(expectedAction);
  });
});
