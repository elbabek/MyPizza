import styled from "styled-components";

export const SliderItemWrapper = styled.div`
background-image: url(${props=> props.src});
background-repeat: no-repeat;
background-size: cover;
width: 470px;
height: 250px;
border-radius: 15px;
border: 3px solid rgb(255, 105, 0);
gap: 10px;
margin-top: 1.5rem;
cursor: pointer;

&:hover{
     transform: scale(0.9);
    transition: 0.5s;
}
`
