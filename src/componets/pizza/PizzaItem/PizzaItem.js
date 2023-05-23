import React from 'react'
import {
    PizzaWrapper,
    ImgBlock,
    NameBlock,
    DescBlock,
    FooterBlock,
    Price,
    CartButton
} from './style'

const PizzaItem = ({pizza})=> {
  return (
      <PizzaWrapper>
        
        <ImgBlock src={pizza.img} alt=''/>
         <NameBlock>
              {pizza.name}
         </NameBlock>
         <DescBlock>
              {pizza.desc}
         </DescBlock>
         <FooterBlock>
            <Price>
                 От {pizza.price} ₽
            </Price>
            <CartButton>
                В корзину
            </CartButton>
         </FooterBlock>
      </PizzaWrapper>
  )
}
export default PizzaItem



