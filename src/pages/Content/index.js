import RouterView from '../../router/renderRouter';
import Menu from './components/Menu';
import { Layout } from 'antd';
import { ContentBox } from './style/style';
import Logo from './components/Logo';
const Context = () => {
    return (
        <ContentBox>
            <Layout className="Layout">
                <Layout.Sider>
                    <Logo />
                    <Menu />
                </Layout.Sider>
                <Layout.Content>
                    <Layout.Header />
                    <RouterView />
                </Layout.Content>
            </Layout>
        </ContentBox>
    )
}
export default Context;