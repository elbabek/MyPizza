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

const SnackItem = ({ snacks }) => {
    return (
        <KomboWrapper>
            <ImgBlock src={snacks.img} alt="" />
            <NameBlock>
                {snacks.name}
            </NameBlock>
            <DescBlock>
                {snacks.desc}
            </DescBlock>
            <FooterBlock>
                <Price>
                    {snacks.price} ₽
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
export default SnackItem;