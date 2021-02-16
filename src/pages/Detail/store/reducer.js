import { constants } from "./index";
import { fromJS } from 'immutable';
const defaultSate = fromJS({
    loading: true,
    detail: {},
    reloData: {
        inspector: false,
        shopOwner: false,
        locking: false,
        releaseOutsideHouse: false,
        cancelOutsideHouse: false,
        cancelMethod: false, //取消作业方按钮
        deleteFollow: false,
        updateKeyStorageDept: false,
        telFollow: false,
        editAgentHouse: false,
        applyAgent: false, //申请跟单人
        applyKeyOwner: false, //申请钥匙人
        applyRealOwner: false, //申请实勘人
        applyOnlyOwner: false, //申请委托人
        submitApplyKeyOwner: false, //提交申请钥匙人
        submitApplyAgent: false, //提交申请跟单人
        submitApplyOnlyOwner: false, //提交申请委托人
        submitApplyRealOwner: false, //提交申请实勘人
        insertFollow: false, //提交跟进按钮
        insertReport: false, //添加举报按钮
        betBtn: false, //是否对赌
        changePopUp: false, // 转状态按钮
        dialPhone: false, //拨号
        shareQRCode: false //二维码
    }
});

export default (state = defaultSate, action) => {
    switch (action.type) {
        case constants.SETLOADING:
            return state.set("loading", action.data.value);
        case constants.SETDETAIL:
            return state.set("detail", action.data);
        case constants.SETROLEITEM:
            let { key, value } = action.data;
            return state.setIn(["reloData", key], value);
        default:
            return state;
    }
}