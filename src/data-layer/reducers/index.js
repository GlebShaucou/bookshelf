import {
    ADD_AUTHOR,
    UPDATE_AUTHOR,
    DELETE_AUTHOR,
    GET_ALL_AUTHORS,
    GET_AUTHOR_BY_ID,
} from '../actions';

const initialState = {
    books: [],
    authors: [],
    publishers: [],
};

function bookshelfApp(state = initialState, action) {
    const { type, payload } = action;

    if (type === ADD_AUTHOR) {
        return { ...state, authors: [...state.authors, payload] };
    }

    if (type === UPDATE_AUTHOR) {
        return state;
    }

    if (type === DELETE_AUTHOR) {
        return state;
    }

    if (type === GET_ALL_AUTHORS) {
        return state;
    }

    if (type === GET_AUTHOR_BY_ID) {
        return state;
    }

    return state;
}

export default bookshelfApp;
