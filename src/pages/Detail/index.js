import { memo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
const Detail = () => {
    let detail = useSelector((state) => state.get("detail"), shallowEqual);
    return <div>111</div>
}

export default memo(Detail);