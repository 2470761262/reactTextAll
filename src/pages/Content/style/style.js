import style from 'styled-components';

export const ContentBox = style.div`
    height:100vh;
    .Layout{
        height:100%;
    }
`


export const Logo = style.div`
    padding: 0 24px;
    overflow: hidden;
    background: #001529;
    cursor: pointer;
    transition: all .3s;
    .logo_nav{
        display: flex;
        align-items: center;
        height: 64px;
        img{
            height: 32px;
        }
        h1{
            margin: 0 0 0 20px;
            color: #fff;
            font-weight: 600;
            font-size: 20px;
        }
    }
`;

export const header = style.div`
height: 80px;
box-shadow: 0 1px 4px rgba(0,21,41,.08);
background: #fff;
display: flex;
align-items: center;
padding: 0 20px;
.icon_header{
    font-size: 20px;
    cursor: pointer;
}
`