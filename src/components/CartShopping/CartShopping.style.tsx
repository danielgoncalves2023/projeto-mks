import { motion } from 'framer-motion';
import styled from "styled-components";

export const CartContainer = styled(motion.aside)`
    background-color: #0F52BA;   
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 480px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    overflow-y: auto;

    @media (max-width: 520px) {
        width: 330px;
    }
`;

export const CartContent = styled.div`
    overflow-y: auto;
    flex: 1;
    margin-bottom: 160px;

    @media (max-width: 520px) {
        margin-bottom: 120px;
    }
`;

export const ContainerTop = styled.div`
    width: 480px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;

    @media (max-width: 520px) {
        width: 330px;
        height: 60px;
        margin: 10px 0;
    }
`;

export const CartTitle = styled.h1`
    color: #FFFFFF;
    font-size: 25px;
    font-weight: 700;
    padding-left: 30px;
    
    @media (max-width: 520px) {
        width: 180px;
    }
`;

export const CloseCart = styled(motion.p)`
    background-color: #000000;
    font-size: 20px;
    font-weight: 400;
    border-radius: 50%;
    margin-right: 30px;
    padding: 5px 10px;
    color: #FFFFFF;
    cursor: pointer;

    @media (max-width: 520px) {
        width: auto;
        margin-right: 50px;
        font-size: 34px;
        padding: 0 12px;
        color: #0F52BA;
    }
`;

export const CardProductDiv = styled(motion.div)`
    width: 379px;
    height: 100px;
    margin: 5px auto 0;
    background-color: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;

    @media (max-width: 520px) {
        width: 250px;
        height: 220px;
        flex-direction: column;
    }
`;

export const RemoveProduct = styled(motion.p)`
    width: 10px;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50%;
    background-color: #000000;
    color: #FFFFFF;
    padding: 1px 4px;
    text-align: center;
    position: relative;
    right: -422px;
    top: -105px;
    cursor: pointer;    

    @media (max-width: 520px) {
        width: 25px;
        font-size: 30px;
        color: #000000;
        background-color: #FFFFFF;
        right: -260px;
        top: -220px;
        z-index: 99;
    }
`;

export const CardProductImage = styled.img`
    width: 46px;
    height: 57px;
    object-fit: contain;

    @media (max-width: 520px) {
        width: 80px;
        height: 95px;
        flex-direction: column;
    }
`;

export const CardProductTitle = styled.h1`
    display: grid;
    place-content: center;
    width: 113px;
    font-size: 13px;
    font-weight: 400;

    @media (max-width: 520px) {
        font-size: 16px;
        width: 212px;
    }
`;

export const CardProductCountContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardProductCountTitle = styled.p`
    font-size: 5px;
    font-weight: 400;
    margin-bottom: 2px;

    @media (max-width: 520px) {
        display: none;
    }
`;

export const CartProductDivMobile = styled.div`
    display: none;
    
    @media (max-width: 520px) {
        width: 320px;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`

export const CardProductCountDiv = styled.div`
    width: 55px;
    height: 19px;
    border: 1px solid #BFBFBF;
    border-radius: 4px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 2px 0;

    @media (max-width: 520px) {
        width: 97px;
        height: 34px;
    }
`;

export const CardProductCountDec = styled.p`
    width: 10px;
    text-align: center;
    font-size: 8px;
    font-weight: 400;
    padding: 4px;
    cursor: pointer;

    @media (max-width: 520px) {
        font-size: 20px;
    }
`;

export const CardProductCount = styled.p`
    width: 10px;
    text-align: center;
    font-size: 8px;
    font-weight: 400;
    padding: 4px 7px;
    border-right: 1px solid #BFBFBF;
    border-left: 1px solid #BFBFBF;
    cursor: default;

    @media (max-width: 520px) {
        font-size: 20px;
        padding: 4px 15px;
    }
`;

export const CardProductCountSum = styled.p`
    width: 10px;
    text-align: center;
    font-size: 8px;
    font-weight: 400;
    padding: 4px;
    cursor: pointer;

    @media (max-width: 520px) {
        font-size: 20px;
    }
`;

export const CardProductPrice = styled.h3`
    display: grid;
    place-content: center;
    width: 72px;
    height: 20px;
    font-size: 14px;
    font-weight: 700;

    @media (max-width: 520px) {
        background-color: #373737;
        color: #FFFFFF;
        width: 84px;
        height: 34px;
        font-size: 14px;
        border-radius: 5px;
    }
`;

export const ContainerBottom = styled.div`
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