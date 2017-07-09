export default function favorites(state = [], action) {
    switch (action.type) {
        case 'FAVORITES/SET':
            return action.payload;
        default:
            return state;
    }
}
