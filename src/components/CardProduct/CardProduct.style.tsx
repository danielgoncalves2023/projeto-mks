import { motion } from "framer-motion";
import styled from "styled-components"

export const CardContainer = styled(motion.div)`
        position: relative;
        margin: 0px auto 30px;
        width: 218px;
        height: 305px;
        background-color: white;
        padding: 2px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        box-sizing: border-box;
        border-radius: 12px;
        
        @media (max-width: 520px) {
            width: 250px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            margin: 5px 5px 0;
        }
    `

export const CardImage = styled.img`
        display: grid;
        margin: auto;
        width: 111px;
        height: 138px;
        object-fit: contain;
    `

export const DivTitle = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        height: 40px;
    `

export const CardTitle = styled.h1`
        font-size: 16px;
        font-weight: 400;
        padding: 0 5px;
    `

export const CardPrice = styled.h2`
        display: grid;
        place-content: center;
        min-width: 50px;
        max-width: 60px;
        height: 26px;
        border-radius: 5px;
        background-color: #373737;
        color: white;
        font-size: 15px;
        font-weight: 700;
        padding: 0 5px;
    `

export const CardDetailContainer = styled.div`
        display: grid;
        place-content: center;
    `

export const CardDetail = styled.p`
        width: 192px;
        height: 55px;
        font-weight: 300;
        font-size: 10px;
        padding: 0 5px;
        display: grid;
        place-content: center;
    `

export const CardButton = styled.button`
        position: relative;
        bottom: -29px;
        left: -2px;
        width: 218px;
        height: 31px;
        background-color: #0F52BA;
        border: none;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        transition: background-color 0.5s;

        &:hover {
            background-color: #0c4077;
        }
    
        &:active {
            background-color: #0a375b;
        }

        @media (max-width: 520px) {
            width: 250px;
        }
    `