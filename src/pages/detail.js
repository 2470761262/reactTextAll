import RouterView from "../router/renderRouter";
import {Link} from "react-router-dom";
export default (props) => {
    function goList () {
        props.history.push({
            pathname: "/Context/List",
        });
    }
    return (
        <div>
            <div>详情页</div>
            <button to="/Context/List" onClick={goList}>去列表</button>
            <Link to="/Context/Detail/JsType">查看jstype类型页面</Link>
            <RouterView config={props.route} />
        </div >
    )
}