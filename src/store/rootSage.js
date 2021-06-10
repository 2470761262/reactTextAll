import { constants, actionsCreate } from "../pages/Sage/store";
import { takeEvery, call, put, all, takeLatest } from 'redux-saga/effects';
import { isAssociative } from "immutable";

function remoteGetList(value) {
    return new Promise((r, s) => {
        setTimeout(() => {
            r([
                1, 2, 3, 5, value
            ]);
        }, 2000)
    })
}


function* setList(value2) {
    const value = yield call(remoteGetList, value2.data);
    yield put({
        type: constants.SETLIST,
        list: value
    })
}
function* setPre(value) {
    yield put({
        type: constants.SETPRE,
        name: value.name
    })
}


function* rootSage() {
    yield takeLatest(constants.SETLIST_SG, setList);
    yield takeLatest(constants.SETPRE_SG, setPre);
}


export default rootSage;
