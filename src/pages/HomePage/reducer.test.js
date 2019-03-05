import reducer from './reducer';
import actionTypes from './action-types';

describe('Homepage reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      apiInfo: {},
      characters: [],
      charactersLoading: false,
    });
  });
  it('should handle LOAD_CHARACTERS', () => {
    expect(
      reducer(
        { charactersLoading: false },
        {
          type: actionTypes.LOAD_CHARACTERS,
        }
      )
    ).toEqual({
      charactersLoading: true,
    });
  });
  it('should handle CHARACTERS_LOADED', () => {
    expect(
      reducer(
        { apiInfo: {}, characters: [], charactersLoading: true },
        {
          type: actionTypes.CHARACTERS_LOADED,
          apiInfo: {},
          characters: [],
        }
      )
    ).toEqual({
      apiInfo: {},
      characters: [],
      charactersLoading: false,
    });
  });
});
