import { memo, Fragment } from "react";
import LoopImg from "./loopImg";
import DetailWarp from "./leftDetail";
const cssFlex  ={
    display:"flex"
}
const detailWarp = () => {
    return (
        <div style={cssFlex}>
            <LoopImg></LoopImg>
            <DetailWarp />
        </div>
    )
}

export default memo(detailWarp)