import { combineReducers } from 'redux';
import activeView from './activeView';
import currentPage from './currentPage';
import editablePeople from './editablePeople';
import favoritePeople from './favorite_people';
import favorites from './favorites';
import people from './people';
import planets from './planets';
import searchTerm from './searchTerm';


export default combineReducers({
    activeView,
    currentPage,
    editablePeople,
    favorites,
    favoritePeople,
    people,
    planets,
    searchTerm,
});
