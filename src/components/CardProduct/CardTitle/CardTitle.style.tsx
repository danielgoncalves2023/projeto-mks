import styled from "styled-components"

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