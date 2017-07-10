import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { get, post, del, patch } from './services/axios';


function* getFavorites(action) {
    const result    = yield call(get, 'http://localhost:3008/peoplefavorites');

    yield put({ type: 'FAVORITES/SET', payload: result.data.map(f => f.id) });
}

function* postFavorites(action) {
    const url           = 'http://localhost:3008/peoplefavorites';
    const state         = yield select();
    const { favorites } = state;

    if (favorites.indexOf(action.payload) == -1) {
        yield call(post, url, { id: action.payload });
        yield call(getFavorites);
    }
    else {
        yield call(del, url, action.payload);
        yield call(getFavorites);
    }
}

export function watchGetFavorites() {
    return takeLatest('FAVORITES/GET', getFavorites);
}

export function watchPostFavorites() {
    return takeLatest('FAVORITES/POST', postFavorites);
}
