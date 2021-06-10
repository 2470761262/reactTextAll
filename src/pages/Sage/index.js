import { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { constants } from "./store";

const Sage = () => {
    const sagaList = useSelector((state) => state.getIn(["sage"]));
    const dispatch = useDispatch();

    const setList = () => {
        dispatch({ type: constants.SETLIST_SG, data: 6666 });
        dispatch({ type: constants.SETPRE_SG, name: "你好" });
    }
    useEffect(() => {
        console.log(sagaList, "sagaList");
    })
    return <>
        <button onClick={() => setList()}>gogo</button>
    </>;
}

export default memo(Sage);