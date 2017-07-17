export default function lastPage(state = 999, action) {
    switch(action.type) {
        case 'LAST_PAGE/SET':
            return action.payload;
        default:
            return state;
    }
}
