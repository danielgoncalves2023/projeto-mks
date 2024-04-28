import styled from "styled-components"

export const CardImage = styled.img`
        display: grid;
        margin: auto;
        width: auto;
        height: 138px;
        object-fit: cover;
    `

export const DivTitle = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 5px 5px 0 5px;
        height: 40px;
        margin-top: 5px;

        @media (max-width: 520px) {
            height: 48px;
            justify-content: space-around;
            padding: 5px 20px 0;
        }
    `

export const CardTitle = styled.h1`
        font-size: 16px;
        font-weight: 400;
        padding: 1px 5px;
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
        padding: 1px 5px;
    `