import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import plugPlanets from './services/plugPlanets';
import { get } from './services/axios';


function* getPeople(action) {
    const page   = action.page   || 1;
    const search = action.search || '';

    if (page > 9 || page < 1) {
        return;
    }

    const people = yield call(
        get,
        `http://localhost:3008/people?_page=${page}&q=${search}`
    );

    const peopleWithPlanets = yield call(plugPlanets, people.data);

    yield put({ type: 'PEOPLE/SET', payload: peopleWithPlanets });
}

export function watchGetPeople() {
    return takeLatest('PEOPLE/GET', getPeople);
}
