
import { useEffect, useRef, useState } from "react";
import { render, unmountComponentAtNode, createPortal } from "react-dom";
import DidLog from "./didLog";

/**
 * @example: 如果传递方法给子组件子组件使用了memo包裹也是会重新创建的
 * 可以给传递的方法添加useCallback 但是这里是自定义hook每次每次都是会必定重新执行的
 * so 这里暂时没办法优化
 *
 *
 * hook是可以在被函数继续包裹的
 *
 * const xx ()=>{
 *  return useCommandDidLog();
 * }
 */
export const useDidLog = () => {
    let [isShow, setShow] = useState(false);

    let RenderDidLog = (props) => {
        if (isShow) {
            return createPortal(<DidLog isShow={isShow} type={props.type} title={props.title} setShow={setShow}>
                {props.children}
            </DidLog>, document.body)
        }
        return null;
    };

    return {
        isShow,
        setShow,
        DidLog: RenderDidLog,
    }
}


/**
 *
 * 这种方法 现在的知识量貌似没办法来进行页面更新让组件重新render
 * 因为即便useEffect 传入依赖也不会更新正确的视图
 * 因为没有调用暴露出去的open重新setOptions。
 * 所以render的childre一直是第一次打卡的那个对象。
 */
export const useCommandDidLog = () => {

    let { isShow, setShow, } = useDidLog();

    let [options, setOptions] = useState({});

    let [Div, setDiv] = useState(null);

    function close() {
        if (Div) {
            setShow(false);
            unmountComponentAtNode(Div);
            Div.remove();
        }
    }

    useEffect(() => {
        let createDiv = document.createElement("div");
        setDiv(createDiv)
    }, [])

    useEffect(() => {
        if (isShow) {
            if (!document.body.contains(Div)) {
                document.body.append(Div);
            }
            render(<DidLog isShow={true} setShow={close}>
                {options.children}
            </DidLog>, Div);
        }
    }, [isShow, options])

    return {
        open(props) {
            setOptions(props);
            setShow(true);
        },
        close
    }
}