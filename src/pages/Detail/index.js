import { memo } from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { actionCreates } from "./store/index";
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import Header from './components/header';
import { FlexContent, FlexLeft, FlexRight } from './style/index';
const Detail = () => {

    let loading = useSelector((state) => state.getIn(["detail", "loading"]), shallowEqual);

    let dispatch = useDispatch();

    let params = useParams();

    let { remoteDetail } = actionCreates.actions;

    useEffect(() => {

        dispatch(remoteDetail(params.id))

    }, []);


    return (
        <Spin spinning={loading} >
            <FlexContent>
                <FlexLeft>
                    <Header />
                </FlexLeft>
                <FlexRight></FlexRight>
            </FlexContent>
        </Spin>
    )
}

export default memo(Detail);