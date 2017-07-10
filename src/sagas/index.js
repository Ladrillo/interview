import { watchUpdatePerson } from './person';
import { watchGetPeople, watchGetFavoritePeople } from './people';
import { watchGetFavorites, watchPostFavorites } from './favorites';


export default function* rootSaga() {
    return yield [
        watchGetPeople(),
        watchGetFavoritePeople(),
        watchGetFavorites(),
        watchPostFavorites(),
        watchUpdatePerson(),
    ];
}
