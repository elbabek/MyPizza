import { Anchor } from "antd"
import { NavItems } from "../../consts"
import {
NavigationWrapper,
Logo,
ButtonCart,
RightNavigation
}from './style'
import logo from '../../images/Logotip.jpg'
const Navigation = ()=>{
    return(
        <NavigationWrapper>
            <RightNavigation>
                <Logo>
                    <a href="http://localhost:3000/">
                   <img className="logo" src={logo}/>
                    </a>
                </Logo>
                <Anchor
                    affix = {false}
                    direction="horizontal"
                    items={NavItems}
                    className="linkNavigation"
                />
            </RightNavigation>
            <ButtonCart>
                Корзина
            </ButtonCart>
        </NavigationWrapper>
    )
}   
export default Navigation;