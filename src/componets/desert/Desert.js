import React from 'react'
import DesertItem from './desertItem/DesertItem'
import { DesertData } from '../../consts'
import {
    PizzaContainer,
    Title,
    Container
} from './style'

const Desert = () => {
    return (
        <Container id='desert'>
            <Title>
                Десерты
            </Title>
            <PizzaContainer>
                {
                    DesertData.map((desert, index) => (
                        <DesertItem key={index} desert={desert} />
                    ))
                }
            </PizzaContainer>
        </Container>
    )
}
export default Desert
