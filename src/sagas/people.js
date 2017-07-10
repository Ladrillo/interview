import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import plugPlanets from './services/plugPlanets';
import searchPlanets from './services/searchPlanets';
import buildUrl from './services/buildUrl';
import buildUrlFavorites from './services/buildUrlFavorites';
import { get } from './services/axios';


function* getPeople(action) {
    const page   = action.page   || 1;
    const search = action.search || '';

    if (page > 9 || page < 1) {
        return;
    }

    const planetIds         = yield call(searchPlanets, search);
    const url               = yield call(buildUrl, page, search, planetIds);
    const people            = yield call(get, url);
    const peopleWithPlanets = yield call(plugPlanets, people.data);

    yield put({ type: 'PEOPLE/SET', payload: peopleWithPlanets });
}

function* getFavoritePeople(action) {
    const state         = yield select();
    const { favorites } = state;
    const url           = yield call(buildUrlFavorites, favorites);
    const result        = yield call(get, url);

    yield put({ type: 'FAVORITE_PEOPLE/SET', payload: result.data });
}

export function watchGetPeople() {
    return takeLatest('PEOPLE/GET', getPeople);
}

export function watchGetFavoritePeople() {
    return takeLatest('FAVORITE_PEOPLE/GET', getFavoritePeople);
}
