import { motion } from 'framer-motion';
import styled from "styled-components";

export const CartBarContainer = styled(motion.aside)`
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