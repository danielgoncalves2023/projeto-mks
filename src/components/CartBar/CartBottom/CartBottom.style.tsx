import styled from "styled-components";

export const ContainerBottomDiv = styled.div`
position: absolute;
bottom: 0;
width: 480px;
padding-top: 20px;
overflow: hidden;

@media (max-width: 520px) {
    width: 330px;
    padding-top: 0px;
}
`;

export const TotalInfoDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 20px;

@media (max-width: 520px) {
    justify-content: space-around;
    margin-bottom: 10px;
}
`;

export const TotalPriceTitle = styled.h1`
width: 80px;
height: 35px;
font-size: 28px;
font-weight: 700;
color: #FFFFFF;
`;

export const TotalPriceValue = styled.h1`
width: 150px;
height: 35px;
font-size: 28px;
font-weight: 700;
color: #FFFFFF;
`;

export const ButtonCheckout = styled.div`
width: 500px;
height: 97px;
display: grid;
place-content: center;
background-color: #000000;
cursor: pointer;
transition: background-color 0.5s ease;

&:hover {
    background-color: #151515;
}

@media (max-width: 520px) {
    width: 330px;
    height: 65px;
    font-size: 20px;
}
`;

export const ButtonCheckoutTitle = styled.h1`
display: grid;
place-content: center;
height: 35px;
font-size: 28px;
font-weight: 700;
color: #FFFFFF;

@media (max-width: 520px) {
    font-size: 20px;
}
`