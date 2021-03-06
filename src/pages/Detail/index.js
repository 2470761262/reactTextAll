import { memo } from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionCreates } from "./store/index";
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import Header from './components/header';
import { FlexContent, FlexLeft, FlexRight } from './style/index';
import DetailWarp from "./components/detailWarp";
import Tabs from "./components/tabs";
const Detail = () => {

    let loading = useSelector((state) => state.getIn(["detail", "loading"]), shallowEqual);

    let dispatch = useDispatch();

    let params = useParams();

    let { remoteDetail } = actionCreates.actions;

    // const [messsageApi] = message.useMessage();

    useEffect(() => {

        dispatch(remoteDetail(params.id))

        // messsageApi.open({
        //     type: 'info',
        //     content: <div>666</div>,
        //     duration: 1,
        //   });

    }, []);


    return (
        <Spin spinning={loading} >
            <FlexContent>
                <FlexLeft>
                    <Header />
                    <DetailWarp></DetailWarp>
                </FlexLeft>
                <FlexRight>
                    <Tabs></Tabs>
                </FlexRight>
            </FlexContent>
        </Spin>
    )
}

export default memo(Detail);