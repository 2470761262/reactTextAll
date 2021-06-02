import React, { memo, useEffect, useState, useRef } from "react";
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
    const scrollTab = useRef();


    const [follow, setfollow] = useState(fromJS({
        list: [],
        totalPage: 1,
        page: 1,
        loading: false,
        loadPageEnd: false
    }));


    useEffect(() => {

        scrollTab.current.addEventListener("scroll", () => {
            if (scrollTab.current.clientHeight + scrollTab.current.scrollTop == scrollTab.current.scrollHeight) {
                //这里只希望更新state并且触发界面更新,并且还要得到新的值
                //要函数包裹
                //如果是直接拿外面的值比如
                //  setfollow(follow.set("page", follow.get("page") ))
                // 会执行 catchValue 一直是最开始的那个value每次更新之后的value都跟这个effect没关系
                // 想不形成catchValue又需要在useEffect里面添加依赖,这样又要用一个useref来接收page的值做事情 太麻烦了也许还不好实现。
                //
                setfollow((v) => v.set("page", v.get("page") + 1))
            }
        })
    }, [])



    useEffect(() => {
        if (detail.get("id") && follow.get("page") <= follow.get("totalPage")) {
            setfollow((v) => v.set("loading", true))
            api.get({
                url: "/agentHouse/follow/getHouseFollowList",
                data: {
                    page: follow.get("page"),
                    limit: 7,
                    houseId: detail.get("id"),
                    followType: "NORMAL"
                },
            })
                .then(({ data }) => {
                    setfollow((v) => {
                        return v.set("list", v.get("list").concat(fromJS(data.data.list)))
                            .set("totalPage", data.data.totalPage)
                    })
                })
                .catch(() => { })
                .finally(() => {
                    setfollow((v) => v.set("loading", false))
                })
        }
    }, [follow.get("page"), detail.get('id')])

    return <div className={tabsCss.itemtabs} ref={scrollTab}>
        {follow.get("list").map((v, y) => {
            return <div key={y}>
                <div>{v.get("followPerName")}</div>
                <div>{v.get("Memo")}</div>
            </div>
        })}
        {follow.get("loading") ? <div>正在加载中。。。</div> : null}
        {follow.get("page") >= follow.get("totalPage") ? <div>已经滚动到底了</div> : null}
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