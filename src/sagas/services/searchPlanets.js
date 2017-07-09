import { call, put, select } from 'redux-saga/effects';
import getPlanets from './getPlanets';


/**
 * Resolves the ids of the planets whose names match against a search term
 *
 * @param {string} search term
 * @return {Object} an array of planet ids
 */
export default function* searchPlanets(searchTerm) {
    if (! searchTerm) {
        return [];
    }

    const planets = yield call(getPlanets);
    const regexp  = new RegExp(searchTerm.toLowerCase());

    return planets
        .filter(planet => regexp.test(planet.name.toLowerCase()))
        .map(planet => planet.id);
}
