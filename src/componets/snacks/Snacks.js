import React from 'react'
import SnackItem from './SnacksItem/SnackItem'
import { SnacksData } from '../../consts'
import {
    PizzaContainer,
    Title,
    Container
} from './style'


const Snacks = () => {
    return (
        <Container id='snacks'>
            <Title>
                Закуски
            </Title>
            <PizzaContainer>
                {
                    SnacksData.map((snacks, index) => (
                        <SnackItem key={index} snacks={snacks} />
                    ))
                }
            </PizzaContainer>
        </Container>
    )
}
export default Snacks
