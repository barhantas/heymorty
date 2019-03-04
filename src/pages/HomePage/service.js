import { put, call, takeEvery } from 'redux-saga/effects';
import { safeSaga } from '../../helpers';
import { charactersLoaded } from './actions';
import actionTypes from './action-types';

export function* loadCharacters(action) {
  const { next } = action.apiInfo;
  const response = yield call(
    fetch,
    next || 'https://rickandmortyapi.com/api/character/'
  );
  const data = yield call([response, response.json]);
  yield put(charactersLoaded(data.results, data.info));
}

export default function* createSprintSaga() {
  yield takeEvery(actionTypes.LOAD_CHARACTERS, safeSaga(loadCharacters));
}
