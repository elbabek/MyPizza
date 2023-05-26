import styled from "styled-components";
import { Button } from "antd";

export const NavigationWrapper = styled.div`
display: flex;
justify-content: space-between;
padding-top: 1rem;
padding-bottom: 1rem;
font-weight: 500!important;
    width: 100%;
    position: sticky;
    top: 0px;
    background-color: white;
    z-index: 10;

    &::before{
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        // height: 100%;
        box-shadow: rgba(6,5,50,0.1) 0px 0px 30px;
    }
`

export const Logo = styled.div`
fonst-size: 20px;
`

export const ButtonCart = styled(Button)`
color: white;
background-color:rgb(255, 105, 0);
    height: 40px;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;
    border-radius: 15px;

&:hover{
    background-color: rgb(145, 60, 0);
    border-color: #DEE13B!important;
}

&:hover span{
    color: white;
}
`

export const RightNavigation = styled.div`
display: flex;
gap: 10px;
align-items: center;
`