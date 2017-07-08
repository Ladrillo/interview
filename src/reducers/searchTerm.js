export default function searchTerm(state = '', action) {
    switch (action.type) {
        case 'SEARCH_TERM/SET':
            return action.payload;
        case 'SEARCH_TERM/RESET':
            return '';
        default:
            return state;
    }
}
