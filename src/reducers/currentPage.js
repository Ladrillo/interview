export default function currentPage(state = 1, action) {
    switch(action.type) {
        case 'CURRENT_PAGE/INCREMENT':
            return state < 9 ? state + 1 : state;
        case 'CURRENT_PAGE/DECREMENT':
            return state > 1 ? state - 1 : state;
        case 'CURRENT_PAGE/RESET':
            return 1;
        default:
            return state;
    }
}
