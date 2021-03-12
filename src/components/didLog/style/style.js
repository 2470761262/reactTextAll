import style from 'styled-components';


export const DidLogContent = style.div`
   position: fixed;
   width:100vw;
   height:100vh;
   background-color: rgba(129,148,148,.3);
   top:0;
   left:0;
   z-index:2000;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const DidLogWarp = style.div.attrs(props => ({
    className: props.type,
}))`
    position:absolute;
    width:${props => props.width}px;
    padding:10px;
    border-radius:10px;
    box-sizing: border-box;
    min-height:200px;
    display:flex;
   flex-direction: column;
    &.primary{
        background: rgba(105,154,132,.5);
    }
    &.error{
        background:#f62f2f;
    }
    .did-body{
        background:#fff;
        flex:1;
        padding:0 8px;
        .did-body-head{
            display:flex;
            justify-content: space-between;
            padding:10px 0;
            align-item:center;
            .did-title{
                font-size:18px;
                font-weight: bold;
                color:black;
            }
            .did-close{
                font-size:14px;
                color:#666;
                cursor: pointer;
            }
        }
        .did-body-warp{

        }
    }
`