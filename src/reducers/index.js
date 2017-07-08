import { combineReducers } from 'redux';
import people from './people';
import planets from './planets';
import currentPage from './currentPage';
import searchTerm from './searchTerm';


export default combineReducers({
    people,
    planets,
    currentPage,
    searchTerm,
});
