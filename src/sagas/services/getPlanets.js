import { call, put, select } from 'redux-saga/effects';
import { get } from './axios';


export default function* getPlanets() {
    const state = yield select();
    let planets = state.planets;

    if (! planets || ! planets.length) {
        // we only want to bring the planets once
        const result = yield call(get, 'http://localhost:3008/planets');
        planets      = result.data;

        yield put({ type: 'PLANETS/SET', payload: planets });
    }

    return planets;
}
