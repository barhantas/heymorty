import reducer from './reducer';
import actionTypes from './action-types';

describe('Character detail page reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      character: {},
      characterLoading: false,
      episodes: [],
      episodesLoading: false,
      characterNotFound: false,
    });
  });
  it('should handle LOAD_CHARACTER', () => {
    expect(
      reducer(
        {},
        {
          type: actionTypes.LOAD_CHARACTER,
        }
      )
    ).toEqual({
      characterLoading: true,
    });
  });
  it('should handle CHARACTER_LOADED', () => {
    expect(
      reducer(
        { character: {}, characterLoading: true, episodesLoading: true },
        {
          type: actionTypes.CHARACTER_LOADED,
          character: {},
        }
      )
    ).toEqual({
      character: {},
      characterLoading: false,
      episodesLoading: true,
    });
  });
  it('should handle EPISODES_LOADED', () => {
    expect(
      reducer(
        {
          episodes: [],
          episodesLoading: true,
        },
        {
          type: actionTypes.EPISODES_LOADED,
          detailedEpisodes: [],
        }
      )
    ).toEqual({
      episodes: [],
      episodesLoading: false,
    });
  });
  it('should handle CHARACTER_NOT_FOUND', () => {
    expect(
      reducer(
        {
          characterLoading: false,
          episodesLoading: false,
          characterNotFound: false,
        },
        {
          type: actionTypes.CHARACTER_NOT_FOUND,
        }
      )
    ).toEqual({
      characterNotFound: true,
      characterLoading: false,
      episodesLoading: false,
    });
  });
});
