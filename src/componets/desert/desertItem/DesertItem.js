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

const DesertItem = ({ desert }) => {
    return (
        <KomboWrapper>
            <ImgBlock src={desert.img} alt="" />
            <NameBlock>
                {desert.name}
            </NameBlock>
            <DescBlock>
                {desert.desc}
            </DescBlock>
            <FooterBlock>
                <Price>
                    {desert.price} ₽
                    {/* <p className="cena">
                        <del>999 ₽<i class="fa fa-rub" aria-hidden="true"></i></del>
                    </p> */}
                </Price>
                <CartButton>
                    В корзину
                </CartButton>
            </FooterBlock>
        </KomboWrapper>
    )
}
export default DesertItem;