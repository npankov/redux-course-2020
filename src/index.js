import './styles.css'
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './redux/rootReducer';
import thunk from 'redux-thunk';
import {DECREMENT, INCREMENT} from './redux/types';
import {asyncInc, decrement, increment} from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');
const themeBtn = document.getElementById('theme');

const store = createStore(rootReducer, 0, applyMiddleware(thunk));

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncInc())
})

themeBtn.addEventListener('click', () => {

})

store.subscribe(() => {
    counter.textContent = store.getState();
})

store.dispatch({ type: 'INIT_APP' });

