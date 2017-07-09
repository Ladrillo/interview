import { combineReducers } from 'redux';
import currentPage from './currentPage';
import editablePeople from './editablePeople';
import favorites from './favorites';
import people from './people';
import planets from './planets';
import searchTerm from './searchTerm';


export default combineReducers({
    currentPage,
    editablePeople,
    favorites,
    people,
    planets,
    searchTerm,
});
