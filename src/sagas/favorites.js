import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { get, patch } from './services/axios';


function* getFavorites(action) {
    const result    = yield call(get, 'http://localhost:3008/peoplefavorites');

    yield put({ type: 'FAVORITES/SET', payload: result.data });
}

export function watchGetFavorites() {
    return takeLatest('FAVORITES/GET', getFavorites);
}
