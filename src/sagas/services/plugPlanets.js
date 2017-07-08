import { call, put, select } from 'redux-saga/effects';
import { get } from './axios';


export default function* plugPlanets(people) {
    const state = yield select();
    let planets = state.planets;

    if (! planets || ! planets.length) {
        // we only want to hit this endpoint once
        const result = yield call(get, 'http://localhost:3008/planets');
        planets      = result.data;

        yield put({ type: 'PLANETS/SET', payload: planets });
    }

    return people.map(person => {
        const homeworld     = planets.find(planet => planet.id === person.homeworld);
        const homeworldName = homeworld ? homeworld.name : '';

        return { ...person, homeworldName };
    });
}
