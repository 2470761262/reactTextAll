import { useEffect, memo } from "react";
import configGlobal from './globalIntercept';
export const RederRouter = memo((props) => {
    let { route, routerProps = {} } = props;
    useEffect(() => {
        //全局拦截
        if (configGlobal.onRouterEnter) {
            configGlobal.onRouterEnter(props);
        }
        //路由配置拦截
        if (route.onEnter && typeof route.onEnter == "function") {
            route.onEnter(props);
        }
        //重定向
        if (route.redirectTo && props.history.location.pathname == route.path) {
            props.history.replace(route.redirectTo);
        }
        return () => {
            //路由配置拦截
            if (route.onLeave) {
                route.onLeave(props);
            }
            //全局拦截
            if (configGlobal.onRouterLeave) {
                configGlobal.onRouterLeave(props);
            }
        }
    }, [])
    return <route.component  {...props}
        routerProps={routerProps}
        route={route.children} />
});