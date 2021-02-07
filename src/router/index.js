import { asyncCreated } from './asyncRoute';
import Index from '../pages/index';
import Login from '../pages/login';
import Context from '../pages/context';
import List from '../pages/list';
const Detail = asyncCreated(() => import('../pages/detail'));
const JsType = asyncCreated(() => import('../pages/jsType'));



export default [
    {
        path: "/",
        exact: true,
        component: Index
    },
    {
        path: "/Context",
        component: Context,
        redirectTo: "/Context/List",
        children: [
            {
                path: "/Context/List",
                exact: true,
                component: List,
                mate: {
                    name: "so sorry"
                },
                onEnter (props) {
                    console.log("页面进入", props);
                    setTimeout(() => {
                        props.history.replace("/");
                    }, 1000)
                },
                onLeave (props) {
                    console.log("页面离开", props);
                }
            },
            {
                path: "/Context/Detail",
                //    exact: true,
                component: Detail,
                children: [
                    {
                        path: "/Context/Detail/jsType",
                        component: JsType
                    }
                ]
            }
        ]
    },
    {
        path: "/Login",
        exact: true,
        component: Login
    },
    {
        path: "*",
        component: () => <div>404</div>
    }
]