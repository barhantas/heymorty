import { put, call, takeEvery } from 'redux-saga/effects';
import { safeSaga } from '../../helpers';
import { message } from 'antd';
import { characterLoaded, episodesLoaded } from './actions';
import actionTypes from './action-types';
import { Character } from '../../models';

export function* loadCharacter(action) {
  const res = yield call(() =>
    Character.get({
      path: 'getById',
      pathData: { id: action.id },
    })
      .then((response) => response)
      .catch((err) => {
        console.error(err.response);
        message.error(err.response.message);
      })
  );
  yield put(characterLoaded(res.response));
}

export function* loadEpisodes(action) {
  const { character } = action;
  const responseArray = yield character.episode.map((url) => call(fetch, url));
  const response = yield responseArray.map((promise) => promise.json());
  yield put(episodesLoaded(response));
}

export default function* createSprintSaga() {
  yield takeEvery(actionTypes.LOAD_CHARACTER, safeSaga(loadCharacter));
  yield takeEvery(actionTypes.CHARACTER_LOADED, safeSaga(loadEpisodes));
}
