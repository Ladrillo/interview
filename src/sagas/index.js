import { watchGetPeople } from './people';
import { watchUpdatePerson } from './person';
import { watchGetFavorites, watchPostFavorites } from './favorites';


export default function* rootSaga() {
    return yield [
        watchGetPeople(),
        watchGetFavorites(),
        watchPostFavorites(),
        watchUpdatePerson(),
    ];
}
