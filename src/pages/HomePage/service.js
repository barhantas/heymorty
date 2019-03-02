import { put, call, takeEvery } from 'redux-saga/effects';
import { safeSaga } from '../../helpers';
import { message } from 'antd';
import { charactersLoaded } from './actions';
import actionTypes from './action-types';
import { Character } from '../../models';
//import store from './store';

export function* loadCharacters(action) {
  const res = yield call(() =>
    Character.get()
      .then((response) => response)
      .catch((err) => {
        console.error(err.response);
        message.error(err.response.message);
      })
  );
  console.log(res);
  yield put(charactersLoaded(res.response.results, res.response.info));
  //yield put(charactersLoaded(res && res.response));
}

export default function* createSprintSaga() {
  yield takeEvery(actionTypes.LOAD_CHARACTERS, safeSaga(loadCharacters));
}
