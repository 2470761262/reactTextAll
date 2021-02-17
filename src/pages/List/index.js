import { memo } from 'react';
import { Button } from 'antd';
const List = () => {
    function OpenDetail () {
        window.open("/Detail/184953", '_blank');
    }
    return <Button onClick={OpenDetail}>查看详情</Button>
}

export default memo(List);