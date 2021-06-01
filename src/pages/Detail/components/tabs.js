import { memo, useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fromJS } from "immutable";
import api from "../../../api/require";
import tabsCss from "../style/tabs.module.css"
const LOGTAB = [
    { title: "跟进", methodsName: "getHouseFollow", storageData: "follow" },
    { title: "带看", methodsName: "getHousePairFollowList", storageData: "pair" },
    { title: "语音", methodsName: "getHouseVoice", storageData: "voice" },
    { title: "面访", methodsName: "getInterviews", storageData: "interviews" },
    { title: "日志", methodsName: "getHouseLog", storageData: "log" }
];

const TabsHeader = (props) => {
    return <div className={tabsCss.tabsHeader}>
        {LOGTAB.map((v, y) => <div key={v.title}
            onClick={() => props.setActiveIndex(y)}
            className={props.activeIndex === y ? tabsCss.active : ''}>
            {v.title}</div>)}
    </div>
}

const FollowTabs = (props) => {
    let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual);
    const [follow, setfollow] = useState(fromJS({
        list: [],
        totalPage: 0,
        page: 1,
        loading: false,
        loadPageEnd: false
    }));

    useEffect(() => {
        setfollow((v) => v.set("loading", true))
        api
            .get({
                url: "/agentHouse/follow/getHouseFollowList",
                data: {
                    page: follow.get("page"),
                    limit: 7,
                    houseId: detail.get("id"),
                    followType: "NORMAL"
                },
                headers: { "Content-Type": "application/json;charset=UTF-8" }
            })
            .then(e => {
                // let result = e.data;
                // if (result.code == 200) {
                //     this.follow.list = [...this.follow.list, ...result.data.list];
                //     this.follow.totalPage = result.data.totalPage;
                // }
            })
            .catch(() => { })
            .finally(() => {
                setfollow((v) => v.set("loading", false))
            })
    }, [follow.get("page")])



    return <div>


    </div>
}

const Tabs = () => {
    // let loading = useSelector((state) => state.getIn(["detail", "loading"]), shallowEqual);

    const [activeIndex, setActiveIndex] = useState(0);

    const [ActiveTabs, setTabsItem] = useState(() => FollowTabs);

    return (
        <div>
            <TabsHeader activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}>
            </TabsHeader>
            <ActiveTabs></ActiveTabs>
        </div>
    )
}

export default memo(Tabs)