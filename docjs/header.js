/**
 * 
 * 挂载组件到指定的位置,实现类似model notify的组件
 * ReactDOM.createPortal 也可以挂载到指定的dom
 */


import { memo, useEffect } from "react";
import { render, unmountComponentAtNode,p } from "react-dom";
import { useSelector, shallowEqual } from "react-redux";

function XX () {
    useEffect(() => {
        return () => {
            console.log("7777777");
        }
    }, [])
    return <div>666666666</div>
}
let div = document.createElement("div");
document.body.append(div);
const Header = () => {
    let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual)
    useEffect(() => {
        //挂载组件到指定dom
        console.log(render(<XX />, div));

        setTimeout(() => {
            //卸载组件
            console.log(unmountComponentAtNode(div));
        }, 2000)
    }, [])
    return (
        <div >
            55
        </div>
    )
}

export default memo(Header);



