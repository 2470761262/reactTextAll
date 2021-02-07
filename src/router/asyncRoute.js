import { useEffect, useState, memo, Fragment } from 'react';
function AsyncComponent ({ route, delay = 200, loading }, props) {
    let [component, setComponent] = useState(<Fragment />);
    let timeId = null;
    function delayCom () {
        timeId = setTimeout(() => {
            setComponent(loading);
        }, delay)
    }
    useEffect(() => {
        delayCom();
        route().then((data) => {
            clearTimeout(timeId);
            setComponent(<data.default {...props} />);
        })
    }, [])
    return component;
}
export const asyncCreated = (route) => {
    return memo(function (props) {
        return AsyncComponent({
            route,
            loading: <div>加载中,请稍后</div>
        }, props);
    })
} 