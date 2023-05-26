import React from "react";
import {
    KomboWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton
} from './style'

const KomboItem = ({kombo}) => {
    return (
        <KomboWrapper>
            <ImgBlock src={kombo.img} alt=""/>
            <NameBlock>
                 {kombo.name}
            </NameBlock>
            <DescBlock>
                 {kombo.desc}
            </DescBlock>
            <FooterBlock>
                <Price>
                     {kombo.price} ₽
                    {/* <p className="cena">
                        <del>999 ₽<i class="fa fa-rub" aria-hidden="true"></i></del>
                    </p> */}
                </Price>
                <CartButton>
                    Выбрать
                </CartButton>
            </FooterBlock>
        </KomboWrapper>
    )
}
export default KomboItem;