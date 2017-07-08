export default function planets(state = [], action) {
    switch (action.type) {
        case 'PLANETS/SET':
            return action.payload;
        default:
            return state;
    }
}
