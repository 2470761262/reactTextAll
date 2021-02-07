import { Fragment, } from "react";
import RouterView from "../router/renderRouter";

export default (props) => {
    return (
        <Fragment>
            <div>内容主体页面</div>
            <RouterView /> 
        </Fragment>
    )
}