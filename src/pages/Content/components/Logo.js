import { Link } from "react-router-dom";
import { Logo } from '../style/style';
export default () => {
    return (
        <Logo>
            <Link to="/iframe" className="logo_nav">
                <img src="https://preview.pro.ant.design/static/logo.f0355d39.svg" alt="" />
                <h1>鑫家网</h1>
            </Link>
        </Logo>
    )
}