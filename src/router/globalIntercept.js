export default {
    onRouterEnter (props) {
        console.log("全局路由拦截进入");
    },
    onRouterLeave (props) {
        console.log("全局路由拦截离开");
    }
}