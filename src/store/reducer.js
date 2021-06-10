import { combineReducers } from 'redux-immutable';

import { reducer as detail } from '../pages/Detail/store/index';
import { reducer as sage } from '../pages/Sage/store/index';

//合并模块
export default combineReducers({
    detail,
    sage
})