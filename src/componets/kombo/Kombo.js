import React from 'react'
import {KomboData} from '../../consts'
import KomboItem from './KomboItem/KomboItem'
import {
    PizzaContainer,
    Title,
    Container
} from './style'

const Kombo = () => {
    return (
        <Container id='kombo'>
            <Title>
                Комбо
            </Title>
            <PizzaContainer>
                {
                    KomboData.map((kombo, index) => (
                    <KomboItem key={index} kombo={kombo} />
                    ))
                }
            </PizzaContainer>
        </Container>
    )
}
export default Kombo
