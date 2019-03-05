import { put, call, takeEvery, all } from 'redux-saga/effects';
import { message } from 'antd';
import { characterLoaded, episodesLoaded, characterNotFound } from './actions';
import actionTypes from './action-types';
import { Character } from '../../models';

export function* loadCharacter(action) {
  let error = false;
  const res = yield call(() =>
    Character.get({
      path: 'getById',
      pathData: { id: action.id },
    }).catch((err) => {
      error = true;
      console.error(err.response.error);
      message.error(err.response.error);
    })
  );
  if (!error) {
    yield put(characterLoaded(res.response));
  } else {
    yield put(characterNotFound());
  }
}

export function* loadEpisodes(action) {
  const { character } = action;
  const responseArray = yield all(
    character.episode.map((url) => call(fetch, url))
  );
  const response = yield all(responseArray.map((promise) => promise.json()));
  yield put(episodesLoaded(response));
}

export default function* characterDetailPageSaga() {
  yield takeEvery(actionTypes.LOAD_CHARACTER, loadCharacter);
  yield takeEvery(actionTypes.CHARACTER_LOADED, loadEpisodes);
}
