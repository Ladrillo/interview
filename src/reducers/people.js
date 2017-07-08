export default function people(state = [], action) {
    switch (action.type) {
        case 'PEOPLE/SET':
            return action.payload;
        default:
            return state;
    }
}
