import { motion } from "framer-motion";
import styled from "styled-components";

export const CartContentDiv = styled.div`
    overflow-y: auto;
    flex: 1;
    margin-bottom: 160px;

    @media (max-width: 520px) {
        margin-bottom: 120px;
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
        padding-top: 10px;
        width: 250px;
        height: 220px;
        flex-direction: column;
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
    overflow: hidden;

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