import { memo ,Fragment} from 'react';
import { Button } from 'antd';
const List = () => {
    function OpenDetail () {
        window.open("/Detail/184953", '_blank');
    }
    function OpenSage () {
        window.open("/Sage", '_blank');
    }
    return <Fragment>
        <Button onClick={OpenDetail}>查看详情</Button>
        <Button onClick={OpenSage}>react-saga</Button>
    </Fragment>
}

export default memo(List);