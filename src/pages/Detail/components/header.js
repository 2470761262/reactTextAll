import { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { Content } from "../style/header";
import { Button } from "antd";
import api from "../../../api/require";
import ReportPop from "./reportPop";
import { useDidLog } from '../../../components/didLog/useDidLog';

// import DidLog from '../../../components/didLog/didLog';
//获取是否可以查看楼栋号 如果是则返回对应的楼栋加单元号
function useGetShowBuliding(detail) {
    let [buildNum, setBuildNum] = useState("");
    useEffect(() => {
        if (detail.has("id")) {
            api.get({
                url: "/agent_house/isShowBuilding",
                data: {
                    houseId: detail.get("id")
                },
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                }
            })
                .then(e => {
                    if (e.data.code == 200) {
                        setBuildNum(`${detail.get("BuildingName")}-${detail.get("RoomNo")}`)
                    } else {
                    }
                })
                .catch(e => { });
        }
        //这里只依赖detail的id 不依赖整个detail
        //以免detail的某个属性被修改导致这里也跟着重新请求了
    }, [detail.get('id')]);
    return buildNum;
};
const Header = () => {

    let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual);

    let budingNum = useGetShowBuliding(detail);

    let { setShow, DidLog } = useDidLog();


    let openReport = () => {
        setShow(true);
    }

    return (
        <Content>
            <div className="content-header-left">
                <h3>{detail.get("CommunityName")}</h3>
                <span >{budingNum}</span>
                <div>
                    房源编号：{detail.get("HouseNo")}
                    <span type="text">复制</span>
                </div >
            </div >
            <div className="content-header-right">
                <Button>添加印象</Button>
                <Button>关注</Button>
                <Button onClick={openReport}>举报</Button>
            </div>

            {/* 举报框 */}
            <DidLog title="我要举报" type="error">
                <ReportPop close={() => setShow(false)}></ReportPop>
            </DidLog>
        </Content >
    )
}

export default memo(Header);



