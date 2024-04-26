import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: #0F52BA;
    width: 100vw;
    height: 101px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 520px) {
        height: 48px;
        justify-content: space-around;
    }
`;

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    height: 50px;
    margin-left: 80px;
    cursor: default;

    @media (max-width: 520px) {
        margin-left: 0;
        padding-bottom: 10px;
    }
`

export const MksTitle = styled.h1`
    color: #FFFFFF;
    height: 50px;
    display: flex;
    align-items: end;
    font-size: 40px;
    font-weight: 600;
    overflow-y: hidden;

    @media (max-width: 520px) {
        font-size: 32px;
    }
`;

export const SistemasTitle = styled.p`
    color: #FFFFFF;
    height: 50px;
    display: flex;
    align-items: end;
    font-size: 20px;
    font-weight: 300;
    margin: 0 0 5px 10px;

    @media (max-width: 520px) {
        font-size: 16px;
    }
`;

export const CardButton = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 90px;
    height: 45px;
    border-radius: 8px;
    background-color: white;
    margin-right: 80px;
    cursor: pointer;

    @media (max-width: 520px) {
        width: 52px;
        height: 26px;
        margin-right: 0;
    }
`

export const CartImage = styled.img`
    width: 19px;
    height: 18px;
    top: 43px;
    left: 1075px;

    @media (max-width: 520px) {
        width: 11px;
        height: 10px;
    }
`

export const CartCount = styled.p`
    font-size: 18px;
    font-weight: 700;
`