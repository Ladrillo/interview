import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import axios from 'axios';


function get(url) {
    return axios.get(url);
}

function* getPeople(action) {
    const result = yield call(get, 'http://localhost:3008/people');
    yield put({ type: 'PEOPLE/SET', payload: result.data });
}

export function watchGetPeople() {
    return takeLatest('PEOPLE/GET', getPeople);
}
