import { combineReducers } from 'redux';
import activeView from './activeView';
import currentPage from './currentPage';
import editablePeople from './editablePeople';
import favorites from './favorites';
import people from './people';
import planets from './planets';
import searchTerm from './searchTerm';


export default combineReducers({
    activeView,
    currentPage,
    editablePeople,
    favorites,
    people,
    planets,
    searchTerm,
});
