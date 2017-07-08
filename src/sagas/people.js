import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';


function* getPeople(action) {
    yield put({ type: 'PEOPLE/SET', payload: ['Luke', 'Leia'] });
}

export function watchGetPeople() {
    return takeLatest('PEOPLE/GET', getPeople);
}
