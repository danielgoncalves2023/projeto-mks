import { motion } from "framer-motion";
import styled from "styled-components";

export const ContainerTopDiv = styled.div`
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