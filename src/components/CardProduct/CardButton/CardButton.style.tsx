import styled from "styled-components";

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