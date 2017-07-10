export default function favorites(state = [], action) {
    switch (action.type) {
        case 'FAVORITE_PEOPLE/SET':
            return action.payload;
        default:
            return state;
    }
}
