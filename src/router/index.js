import { asyncCreated } from './asyncRoute';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: "/",
        exact: true,
        component: asyncCreated(() => import("../pages/Login"))
    },
    {
        path: "/content",
        redirectTo: "/content/list",
        component: asyncCreated(() => import("../pages/Content")),
        children: [
            {
                path: "/content/list",
                component: asyncCreated(() => import("../pages/List"))
            }
        ]
    },
    {
        path: "/Sage",//(:/id) 为可选匹配 ?号好像也是可选
        exact: true,
        component: asyncCreated(() => import("../pages/Sage")),
    },
    {
        path: "/Detail/:id",//(:/id) 为可选匹配 ?号好像也是可选
        exact: true,
        component: asyncCreated(() => import("../pages/Detail")),
    },
    {
        path: "*",
        component: () => <div>404</div>
    }
]