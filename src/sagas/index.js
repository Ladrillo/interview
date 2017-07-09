import { watchGetPeople } from './people';
import { watchGetFavorites } from './favorites';
import { watchUpdatePerson } from './person';


export default function* rootSaga() {
    return yield [
        watchGetPeople(),
        watchGetFavorites(),
        watchUpdatePerson(),
    ];
}
