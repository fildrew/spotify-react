import { combineReducers } from "@reduxjs/toolkit";
import indexReducer from "../reducer/index";
import favouriteSongsReducer from "../reducer/favouriteSongs"; 
import songPlayerReducer from "../reducer/songPlayer";

const rootReducer = combineReducers({
    index:indexReducer,
    favouriteSongs: favouriteSongsReducer,
    songPlayer: songPlayerReducer
});

export default rootReducer;