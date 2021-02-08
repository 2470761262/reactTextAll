import { constants } from "./index";
import { fromJS } from 'immutable';
// const defaultSate = fromJS({
//     detail:{},
//     reloData:{}
// });
const defaultSate = {
    detail:{},
    reloData:{}
};


export default (state = defaultSate, action) => {
    switch (action.type) {
        default:
            return state;
    }
}