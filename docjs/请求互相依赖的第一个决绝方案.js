


// import { memo, useEffect, useState } from "react";
// import { useSelector, shallowEqual } from "react-redux";
// import { Content } from "../style/header";
// import api from "../../../api/require";

// function getShowBuliding (houseId) {
//     return api.get({
//         url: "/agent_house/isShowBuilding",
//         data: {
//             houseId
//         },
//         headers: {
//             "Content-Type": "application/json;charset=UTF-8"
//         }
//     })
//         .then(e => {
//             if (e.data.code == 200) {
//                 return true;
//             } else {
//                 return false;
//             }
//         })
//         .catch(e => { });
// }
// const Header = () => {
//     let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual)
//     let [buildNum, setBuildNum] = useState(0);
//     useEffect(() => {
            //第一次detail里是没有id的 在detail有值之后
            //在执行getShowBuliding
//         if (detail.has("id")) {
            //在需要的值变化确定之后在请求对应的接口
//             getShowBuliding(detail.get("id")).then((value) => {
//                 console.log(value, "houseId");
//                 if (value) {
//                     setBuildNum(`${detail.get("BuildingName")}-${detail.get("RoomNo")}`)
//                 }
//             })
//         }
//     }, [detail])
//     return (
//         <Content >
//             <div className="content-header-left">
//                 <h3>{detail.get("CommunityName")}</h3>
//                 <span >{buildNum}</span>
//                 <div>
//                     房源编号：{detail.get("HouseNo")}
//                     <span type="text">复制</span>
//                 </div >
//             </div >
//             <div className="content-header-right">

//             </div>
//         </Content >
//     )
// }

// export default memo(Header);


//----------------------------------------------------------------

// import { memo, useEffect, useState } from "react";
// import { useSelector, shallowEqual } from "react-redux";
// import { Content } from "../style/header";
// import api from "../../../api/require";

// function useGetShowBuliding (detail) {
//     let [budingNumFlag, setBudingNumFlag] = useState(false);
//     useEffect(() => {
//         if (detail.has("id")) {
//             api.get({
//                 url: "/agent_house/isShowBuilding",
//                 data: {
//                     houseId: detail.get("id")
//                 },
//                 headers: {
//                     "Content-Type": "application/json;charset=UTF-8"
//                 }
//             })
//                 .then(e => {
//                     if (e.data.code == 200) {
//                         setBudingNumFlag(true);
//                     } else {
//                         setBudingNumFlag(false);
//                     }
//                 })
//                 .catch(e => { });
//         }
//     }, [detail]);
//     return budingNumFlag;

// };
// const Header = () => {
//     let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual)
//     let [buildNum, setBuildNum] = useState(0);
//     let budingNumFlag = useGetShowBuliding(detail);
//     useEffect(() => {
//         if (budingNumFlag) {
//             console.log("????");
//             setBuildNum(`${detail.get("BuildingName")}-${detail.get("RoomNo")}`)
//         }
          // 这里其实已经可以不需要在依赖detail了
//     }, [detail, budingNumFlag])
//     return (
//         <Content >
//             <div className="content-header-left">
//                 <h3>{detail.get("CommunityName")}</h3>
//                 <span >{buildNum}</span>
//                 <div>
//                     房源编号：{detail.get("HouseNo")}
//                     <span type="text">复制</span>
//                 </div >
//             </div >
//             <div className="content-header-right">

//             </div>
//         </Content >
//     )
// }

// export default memo(Header);





//----------------- 第3版在detail > components > header 组件