import { asyncCreated } from './asyncRoute';

export default [
    {
        path: "/",
        exact: true,
        component: asyncCreated(() => import("../pages/Login"))
    },
    {
        path: "/content",
        component: asyncCreated(() => import("../pages/Content")),
        children: [
            {
                path: "/content/list",
                component: asyncCreated(() => import("../pages/List"))
            }
        ]
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