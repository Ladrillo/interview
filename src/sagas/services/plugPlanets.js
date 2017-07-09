import { call, put, select } from 'redux-saga/effects';
import getPlanets from './getPlanets';


export default function* plugPlanets(people) {
    const planets = yield call(getPlanets);

    return people.map(person => {
        const homeworld     = planets.find(planet => planet.id === person.homeworld);
        const homeworldName = homeworld ? homeworld.name : '';

        return { ...person, homeworldName };
    });
}
