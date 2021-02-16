import { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
const Header = () => {
    let detail =  useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual)

    return (
        <div >
            55
        </div>
    )
}

export default memo(Header);



