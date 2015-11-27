import {createStore} from 'redux';
import todoReducer from './reducer';
import {addItem, completeItem} from './action';
import {saveData, fetchData} from './server';

let initialState = fetchData();

let store = createStore(todoReducer, initialState);

export default store;