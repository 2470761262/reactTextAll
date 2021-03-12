import { memo, useState } from "react";
import { Radio, Input, Button,message } from "antd";
import api from "../../../api/require";
import { useSelector, shallowEqual } from "react-redux";
export default memo((props) => {
    let detail = useSelector((state) => state.getIn(["detail", "detail"]), shallowEqual);
    let [value, setValue] = useState(1);
    let [textValue, setTextValue] = useState("");

    function onChange(e) {
        setValue(e.target.value);
    }

    function textChange(e) {
        setTextValue(e.target.value)
    }
    function result() {
        let params = {
            Eid: detail.get("id"),
            Type: 11,
            OldOwner: 0,
            OwnerMemo: textValue,
            reportType: value
        };
        api.post({
            url: "/agentHouse/propertyCheck/insertReport",
            data: params,
            headers: { "Content-Type": "application/json;charset=UTF-8" }
        })
            .then(e => {
                message.success(e.data.message,1);
            })
            .catch(e => {
                if (e.response != undefined) {
                    message.error(e.data.message,1);
                }
            }).finally(()=>{
                props.close();
            })
    }





    return <div>
        <div>
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>虚假实勘</Radio>
                <Radio value={2}>虚假委托</Radio>
                <Radio value={3}>虚假钥匙</Radio>
                <Radio value={4}>虚假跟进</Radio>
                <Radio value={5}>房屋已售</Radio>
                <Radio value={6}>虚假业主号码</Radio>
                <Radio value={7}>其他</Radio>
            </Radio.Group>
        </div>
        <div>
            <Input onChange={textChange} value={textValue} />
        </div>
        <Button danger type="primary" onClick={props.close}>关闭</Button>
        <Button type="primary" onClick={result}>确定</Button>
    </div>
})