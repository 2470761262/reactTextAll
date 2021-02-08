import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
export default () => {
    return (
        <div >
            <Menu
                mode="inline"
                theme="dark"
            >
                <Menu.SubMenu
                    key="sub0"
                    title={
                        <span>
                            <MailOutlined />
                            <span>新房源系统</span>
                        </span>
                    }
                >
                    <Menu.Item key="1">房源管理</Menu.Item>
                    <Menu.Item key="2">补充楼盘审核</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
    )
}