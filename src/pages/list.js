export default (props) => {
    function goDetail(){
        props.history.push({
            pathname:"/Context/Detail"
        });
    }
    return (
        <div>
            <div>列表页</div>
            <button onClick={goDetail}>去详情</button>
        </div>
    )
}