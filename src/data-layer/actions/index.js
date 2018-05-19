export const ADD_AUTHOR  = 'ADD_AUTHOR';
export const UPDATE_AUTHOR = 'UPDATE_AUTHOR';
export const DELETE_AUTHOR = 'DELETE_AUTHOR';
export const GET_ALL_AUTHORS = 'GET_ALL_AUTHORS';
export const GET_AUTHOR_BY_ID = 'GET_AUTHOR_BY_ID';

export function addAuthor(author) {
    return { type: ADD_AUTHOR, payload: author };
}

export function updateAuthor(author) {
    return { type: UPDATE_AUTHOR, payload: author };
}

export function deleteAuthor(id) {
    return { type: DELETE_AUTHOR, payload: id };
}

export function getAllAuthors() {
    return { type: GET_ALL_AUTHORS };
}

export function getAuthorById(id) {
    return { type: GET_AUTHOR_BY_ID, payload: id };
}
