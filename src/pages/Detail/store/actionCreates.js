import { constants } from "./index";
import axios from "../../../api/require";
import { fromJS } from 'immutable';

export const mutations = {
    setDetail (data) {
        return {
            type: constants.SETDETAIL,
            data: fromJS(data)
        }
    },
    setRoleItem (data) {
        return {
            type: constants.SETROLEITEM,
            data
        }
    },
    setLoading (data) {
        return {
            type: constants.SETLOADING,
            data
        }
    }
}

const server = {
    //获取详情
    getDetail (houseId) {
        return axios.post({
            url: "/agent_house/getHouseDetail",
            data: {
                houseId
            },
            qs: true
        }).then((e) => {

            let result = e.data;
            if (
                result.data.remark != null &&
                result.data.remark.indexOf("$") != -1
            ) {
                let Arry1 = result.data.remark.split("$");
                for (let i = 0; i < Arry1.length; i++) {
                    let Arry2 = Arry1[i].split("@");
                    switch (Arry2[0]) {
                        case "小区介绍":
                            result.data.communityPresentation = Arry2[1];
                            break;
                        case "户型介绍":
                            result.data.houseTypePresentation = Arry2[1];
                            break;
                        case "税费解析":
                            result.data.taxParsing = Arry2[1];
                            break;
                        case "核心卖点":
                            result.data.coreSellingPoint = Arry2[1];
                            break;
                    }
                    if (result.data.applyAgentVo != null) {
                        REMARK.forEach(element => {
                            if (element.key == Arry2[0]) {
                                let obj = element.value;
                                result.data.applyAgentVo[obj] = Arry2[1];
                            }
                        });
                    }
                }
            }
            return result.data;
            // dispatch(mutations.setDetail(result.data));
        })
    },
    //获取权限
    getAgentRules () {
        return axios
            .get({
                url: "/agent_house/detailsFunction"
            })
            .then(e => {
                if (e.data.code == 200) {
                    let { data } = e.data;

                    return data.functionRuleList;
                }
            })
    },
    addLog (param) {
        axios
            .post({
                url: "/house/browse/add",
                data: param,
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            })
            .then(e => {
                if (result.code == 200) {
                    console.log("浏览记录添加成功");
                } else {
                    console.log("浏览记录添加失败" + result.message);
                }
            })
            .catch(e => {
                if (e.response != undefined) {
                    console.log(e.response);
                }
            });
    }
}


export const actions = {
    remoteDetail (houseId) {
        return (dispatch, state) => {
            let detail = state().getIn(["detail", "reloData"]);
            dispatch(mutations.setLoading({
                value: true
            }));
            return Promise
                .all([server.getDetail(houseId), server.getAgentRules()])
                .then((result) => {
                    dispatch(mutations.setDetail(result[0]));
                    result[1].forEach((roleItem) => {
                        if (detail.has(roleItem.rurl)) {
                            dispatch(mutations.setRoleItem({
                                key: roleItem.rurl,
                                value: true
                            }));
                        }
                    })

                }).
                then(() => {
                    let detailPar = state().getIn(["detail", "detail"]);


                    let params = {
                        Type: 1,
                        HouseId: detailPar.get("id"),
                        HouseNo: detailPar.get("HouseNo"),
                        Comid: detailPar.get("Comid"),
                        CBid: detailPar.get("CBid"),
                        BHID: detailPar.get("BHID"),
                        CommunityName: detailPar.get("CommunityName"),
                        BuildingName: detailPar.get("BuildingName"),
                        RoomNo: detailPar.get("RoomNo"),
                        Floor: detailPar.get("Floor"),
                        InArea: detailPar.get("InArea"),
                        Price: detailPar.get("Price"),
                        Decoration: detailPar.get("Decoration"),
                        Face: detailPar.get("Face"),
                        Title: detailPar.get("Title"),
                        Buildtype: detailPar.get("buildtype"),
                        //    Rooms: rooms,
                        //   Hall: hall,
                        //  Toilet: toilet
                    };
                    server.addLog(params);
                })
                .catch(() => {

                }).finally(() => {
                    dispatch(mutations.setLoading({
                        value: false
                    }));
                })
        }
    }
}

