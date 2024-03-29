import {VIEW_ARTIST, VIEW_ALBUM, SET_ROCK_DATA, SET_POP_DATA, SET_HIPHOP_DATA} from "../action"; 

const initialState = {
    artist: [],
    album: [],
    rock: [],
    pop: [],
    hiphop:[],
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_ALBUM:
            return {
                ...state,
                album: [action.payload],
            };
        case VIEW_ARTIST:
            return {
                ...state,
                artist: [action.payload],
            };
        case SET_ROCK_DATA:
            return { ...state, afrobeat: action.payload };
        case SET_POP_DATA:
            return { ...state, pop: action.payload };
        case SET_HIPHOP_DATA:
            return { ...state, hiphop: action.payload };
        default:
            return state;
    };
};

export default mainReducer;

