import { watchGetPeople } from './people';


export default function* rootSaga() {
    return yield [
        watchGetPeople(),
    ];
}
