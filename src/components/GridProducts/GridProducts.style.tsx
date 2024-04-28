import styled from "styled-components"

export const GridContainer = styled.section`
    width: 80%;
    margin: 30px auto;

    @media (max-width: 520px) {
        display: grid;
        place-content: center;
        margin: 20px auto 50px;
    }

    @media (min-width: 1020px) {
        width: 90%;
        margin: 30px auto;
    }

    @media (min-width: 1266px) {
        width: 80%;
        margin: 30px auto;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px 0px;
    justify-content: center;
    align-items: center;

    @media (min-width: 1020px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 20px 10px;
    }

    @media (min-width: 1266px) {
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        gap: 20px 30px;
    }
`