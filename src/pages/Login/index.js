import api from "../../api/require";
import { Input, Button, notification } from 'antd';
import { useState, memo, useCallback } from 'react';
import util from '../../util/util.js';
import { LOGINDATA, TOKEN } from '../../util/constMap';

const Login = (props) => {
    let [userName, setUserName] = useState("15280398053");
    let [userPassWord, setUserPassWord] = useState("E99A18C428CB38D5F260853678922E03");

    const getUserMessage = useCallback(() => {
        return api.post({
            url: "/loginManager/pcLogin",
            data: {
                clientId: 0,
                passWord: "E99A18C428CB38D5F260853678922E03",
                qrCode: "",
                sessionId: "sssss",
                userName: "15280398053",
            },
            headers: { "Content-Type": "application/json;charset=UTF-8" }
        })
            .then(({ data }) => {
                util.localStorageSet(LOGINDATA, data.data);
                util.localStorageSet(TOKEN, data.data.token.token);
                notification.success({
                    message: '成功喽',
                    description:
                        '阿sir,一切正常!',
                });
                props.history.push({
                    pathname: "/content"
                });
            })
            .catch(e => {
            });
    }, []);


    return (
        <div>
            <Input placeholder="账号"
                value={userName} onChange={(e) =>
                    setUserName(e.target.value)} />
            <Input.Password placeholder="密码"
                value={userPassWord} onChange={(e) =>
                    setUserPassWord(e.target.value)} />
            <Button onClick={getUserMessage}>登陆</Button>
        </div>
    )
}

export default memo(Login);