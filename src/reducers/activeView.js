export default function activeView(state = 'main', action) {
    switch(action.type) {
        case 'ACTIVE_VIEW/TOGGLE':
            return state == 'main' ? 'favs' : 'main';
        default:
            return state;
    }
}
