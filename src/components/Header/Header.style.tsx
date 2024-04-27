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