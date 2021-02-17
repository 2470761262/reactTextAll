import { memo, useEffect } from "react";
import { render ,unmountComponentAtNode} from "react-dom";
import { useSelector, shallowEqual } from "react-redux";

function XX () {
    return <div>666666666</div>
}
let div = document.createElement("div");
document.body.append(div);
const Header = () => {
    let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual)
    useEffect(() => {
        console.log(render(<XX/>, div));

        setTimeout(()=>{
            console.log(unmountComponentAtNode(div));
        },2000)
    }, [])
    return (
        <div >
            55
        </div>
    )
}

export default memo(Header);



