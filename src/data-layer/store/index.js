import { createStore } from 'redux';
import bookshelfApp from '../reducers';

const store = createStore(bookshelfApp);

export default store;
