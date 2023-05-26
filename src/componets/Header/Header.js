import {
    HeaderWrapper,
    HEaderRightBlock,
    Logo,
    Destination,
    Call,
    HeaderLeftBlock,
    Coins,
    Signin
}from "./style"
import { StarFilled, DollarOutlined } from "@ant-design/icons"
import logo from '../../images/Logotip.jpg'

const Header = ()=>{
    return(
        <HeaderWrapper>
         <HEaderRightBlock>
            <Logo>
                    <a href="http://localhost:3000/">
                <span>
                <img className="mainLogo" src={logo}/>
                My pizza
                </span>
                    </a>
            </Logo>
            <Destination>
                    <div>Доставка пиццы <span className="color">Бишкек</span></div>
                <span>30 мин. 4.91
                    <StarFilled style={{color: 'gold'}} />
                    </span>
            </Destination>
            <Call>
                    <div className="number"><a href="tel:+996700640457">0700 64 04 57</a></div>
                <div>Звонок бесплатный</div>
            </Call>
         </HEaderRightBlock>
         <HeaderLeftBlock>
            <Coins>
                    <DollarOutlined 
                    style={{fontSize: '23px'}} />
                    <span>Додокоины</span> 
                </Coins>
            <Signin>Войти</Signin>
         </HeaderLeftBlock>
        </HeaderWrapper>
    )
}
export default Header