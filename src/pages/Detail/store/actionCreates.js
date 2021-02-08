import { constants } from "./index";
// import { fromJS } from 'immutable';
//import axios from 'axios';

export const getDetail = (data) => {
    return {
        type: constants.GETDETAIL,
       // data: fromJS(data)
       data
    }
}


export const remoteDetail = () => {
    // return (dispatch, state, b) => {
    //     axios.post("/agent_house/getHouseDetail").then(({ data }) => {
    //         console.log(b);
    //         dispatch(remoteDetail(data.data));
    //     }).catch(() => {

    //     })
    // }
}