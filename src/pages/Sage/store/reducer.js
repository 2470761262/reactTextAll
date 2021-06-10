import { constants } from "./index";
import { fromJS } from 'immutable';
const defaultSate = fromJS({
    list: [],
    name: ""
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultSate, action) => {
    switch (action.type) {
        case constants.SETLIST:
            return state.set("list", action.list);
        case constants.SETPRE:
            return state.set("name", action.name);
        default:
            return state;
    }
}