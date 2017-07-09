export default function editablePeople(state = [], action) {
    switch (action.type) {
        case 'PERSON/ENTER_EDIT_MODE':
            return state.indexOf(action.payload) > -1
                ? state
                : [...state, action.payload];

        case 'PERSON/EXIT_EDIT_MODE':
            return state.indexOf(action.payload) > -1
                ? state.filter(e => e != action.payload)
                : state;

        default:
            return state;
    }
}
