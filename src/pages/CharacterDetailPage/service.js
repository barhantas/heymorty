import { put, call, takeEvery, all } from 'redux-saga/effects';
import { message } from 'antd';
import { characterLoaded, episodesLoaded } from './actions';
import actionTypes from './action-types';
import { Character } from '../../models';

export function* loadCharacter(action) {
  const res = yield call(() =>
    Character.get({
      path: 'getById',
      pathData: { id: action.id },
    }).catch((err) => {
      console.error(err.response);
      message.error(err.response.message);
    })
  );
  yield put(characterLoaded(res.response));
}

export function* loadEpisodes(action) {
  const { character } = action;
  const responseArray = yield all(
    character.episode.map((url) => call(fetch, url))
  );
  const response = yield all(responseArray.map((promise) => promise.json()));
  yield put(episodesLoaded(response));
}

export default function* createSprintSaga() {
  yield takeEvery(actionTypes.LOAD_CHARACTER, loadCharacter);
  yield takeEvery(actionTypes.CHARACTER_LOADED, loadEpisodes);
}
