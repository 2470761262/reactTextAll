import { memo, useMemo } from "react";
import leftDetailCss from "../style/leftDetail.module.css";
import { useSelector, shallowEqual } from "react-redux";

const LeftDetail = () => {
    let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual);

    //这种理论上都需要依赖更新的话
    //我觉得可以来一个useEffect 在这里里面把逻辑写上如果变化了
    //就把结果赋值给useState然后在用useMemo把这个useState包裹一下在返回
    // 但是又好像没有用
    const houseType = useMemo(() => {
        return `${detail.get("Rooms") || 0}-${detail.get("hall") || 0}-${detail.get("toilet") || 0}-${detail.get("balcony") || 0}`;
    }, [detail.get("Rooms")])

    const foolAll = useMemo(() => {
        return `${detail.get("Floor") || '暂无'}/${detail.get("floorNum") || '暂无'}`
    }, [detail.get("Floor")]);

    const proxyMaxTime = useMemo(() => {
        if (
            detail.get("onlyOwner") &&
            detail.get("isOnly") !== 0 &&
            detail.get("isOnly") !== 2 &&
            detail.get("proxyMaxTime") !== null
        ) {
            return `${detail.get('proxyMaxTime')}到期`;
        }
        return "暂无";
    }, [detail.get("onlyOwner")])

    const lastPairTime = useMemo(() => {
        if (detail.get("lastPairTime") !== null) {
            return detail.get("lastPairTime");
        }
        return "暂无";
    }, [detail.get("lastPairTime")])

    const isKeyMessage = useMemo(() => {
        if (
            detail.get("keyOwner") > 0 &&
            detail.get("keyStorageDeptName") !== null
        ) {
            return `有钥匙(${detail.get("keyStorageDeptName")})`;
        }
        return "暂无";
    }, [detail.get("keyOwner")])

    const agentPerMessage = useMemo(() => {
        if (detail.get("agentPerName") != null) {
            return `${detail.get("agentPerName")}(${detail.get("agentPerTel")})`;
        }
        return "无跟人";
    }, [])

    return (
        <div className={leftDetailCss.content}>
            <div className={leftDetailCss.cell}>
                <div className={leftDetailCss.price}>{detail.get("tradePrice") || detail.get("Price")}万元</div>
                <div className={leftDetailCss.price}>单价:{detail.get('averagePrice')}元/平</div>
                <div className={leftDetailCss.price}>调价记录</div>
            </div>
            <div className={leftDetailCss.cell}>
                <div className={leftDetailCss.cellItem}>
                    <div>户型</div>
                    <div>{houseType}</div>
                </div>
                <div className={leftDetailCss.cellItem}>
                    <div>面积</div>
                    <div>{detail.get("InArea")}平</div>
                </div>
                <div className={leftDetailCss.cellItem}>
                    <div>朝向</div>
                    <div>{detail.get("Face")}</div>
                </div>
                <div className={leftDetailCss.cellItem}>
                    <div>楼层</div>
                    <div>{foolAll}</div>
                </div>
            </div>
            <div >
                <div className={leftDetailCss.rowCell}>
                    <div>评估价:{detail.get('valuation') || '暂无'}</div>
                    <div>物业费:{detail.get('PropertyFee') || '暂无'}/月/㎡</div>
                </div>
                <div className={leftDetailCss.rowCell}>
                    <div>独家信息:{proxyMaxTime}</div>
                    <div>钥匙信息:{isKeyMessage}</div>
                </div>
                <div className={leftDetailCss.rowCell}>
                    <div>上次带看:{lastPairTime}</div>
                    <div>30日被看:{detail.get('seenNumRecent')}</div>
                </div>
                <div className={leftDetailCss.rowCell}>
                    <div>业主类型:{detail.get('customerType')}</div>
                    <div>跟单人:{agentPerMessage}</div>
                </div>
            </div>

        </div>
    )
}

export default memo(LeftDetail)