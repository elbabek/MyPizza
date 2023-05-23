import styled from "styled-components";
import { Button } from "antd";

export const HeaderWrapper = styled.div`
display:flex;
justify-content: space-between;
`

export const HEaderRightBlock = styled.div`
display:flex;
gap: 80px;
font-weight: bold;
align-items: center;
`

export const Logo = styled.div`
font-size: 30px;
`

export const Destination = styled.div`
display:flex;
flex-direction: column;
`

export const Call = styled.div`
display:flex;
flex-direction:column;
`

export const HeaderLeftBlock = styled.div`
display:flex;
gap:65px;
align-items:center;
`

export const Coins = styled.div`
display:flex;
flex-direction: column;
align-items:center;
cursor:pointer;

& svg {
    transition: ease-in-out .3s;
    position: relative;
    bottom: 0;
}

&:hover{
    color:rgb(255, 105, 0);
    svg{
        bottom: 5px;
    }
}
`

export const Signin = styled(Button)`
color:rgb(93,99,112);
background-color: rgb(243,243,247);
border-radius:20px;

&:hover{
  background-color: lightgrey;
border-color:lightgrey!important;
}
&:hover span{
color:rgb(93,99,112);
}
`