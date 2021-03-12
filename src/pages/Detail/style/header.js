import style from 'styled-components';

export const Content = style.div`
    display: flex;
    align-items:center;
    font-size:0;
    padding:10px;
    .content-header-left{
        h3{
            font-size: 22px;
            font-weight: 400;
            margin-right: 10px;
            display: inline-block;
        }
        span{
            color: #247257;
            font-size: 12px;
            display: inline-block;
            vertical-align: text-bottom;
        }
        div{
            color: #525252;
            margin: 0 17px;
            min-width: 2rem;
            font-size: 12px;
            display: inline-block;
            vertical-align: text-bottom;
            span{
                text-decoration: underline;
                cursor: pointer;
                color: #247257;
                font-size: 12px;
                display: inline-block;
                vertical-align: text-bottom;
            }
        }
    }
    .content-header-right{
        flex:1;
        display:flex;
        button{
            margin-right:8px;
            &:last-child{
            margin-right:0px;
            }
        }
    }
`