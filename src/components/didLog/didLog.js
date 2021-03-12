import { memo, useState } from "react";
import PropTypes from 'prop-types';
import { DidLogContent, DidLogWarp } from "./style/style";
/**
 * 其他方案 unmountComponentAtNode and render 配合
 */

const DidLog = (props) => {
    return <DidLogContent>
        <DidLogWarp width={props.width} type={props.type}>
            <div className="did-body">
                <div className="did-body-head">
                    <div className="did-title">{props.title}</div>
                    <div className="did-close" onClick={() => props.setShow(false)}>关闭</div>
                </div>
                <div className="did-body-warp">
                    {props.children}
                </div>
            </div>
        </DidLogWarp>
    </DidLogContent>
}

DidLog.propTypes = {
    isShow: PropTypes.bool.isRequired,
    setShow: PropTypes.func,
    width: PropTypes.number,
    type: PropTypes.string,
    title: PropTypes.string
}

DidLog.defaultProps = {
    isShow: false,
    width: 480,
    type: "primary",
    title: "模态框"
}

export default memo(DidLog);