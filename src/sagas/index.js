import { watchGetPeople } from './people';
import { watchUpdatePerson } from './person';


export default function* rootSaga() {
    return yield [
        watchGetPeople(),
        watchUpdatePerson(),
    ];
}
