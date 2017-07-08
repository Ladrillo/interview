import { combineReducers } from 'redux';
import people from './people';
import planets from './planets';
import currentPage from './currentPage';


export default combineReducers({
    people,
    planets,
    currentPage,
});
