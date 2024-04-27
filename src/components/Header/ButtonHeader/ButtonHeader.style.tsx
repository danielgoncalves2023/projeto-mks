import { motion } from "framer-motion"
import styled from "styled-components"

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
    box-size: 10px;
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