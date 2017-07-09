import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { patch } from './services/axios';


function* updatePerson(action) {
    const state = yield select();
    const { currentPage } = state;

    const { id, name, birthday } = action.payload;
    const url = `http://localhost:3008/people/${id}`;

    const response = yield call(patch, url, { name, birth_year: birthday });

    if (response.status != 200) {
        alert('Something went wrong');
    }
    else {
        yield put({ type: 'PERSON/EXIT_EDIT_MODE', payload: id });
        yield put({ type: 'PEOPLE/GET', page: currentPage });
    }
}

export function watchUpdatePerson() {
    return takeLatest('PERSON/SAVE', updatePerson);
}
