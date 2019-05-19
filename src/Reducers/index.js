import { combineReducers } from 'redux';
import { initial } from './initial';
import { getEmployee } from './getEmployee';

export default combineReducers({ 
    initial,
    getEmployee
});