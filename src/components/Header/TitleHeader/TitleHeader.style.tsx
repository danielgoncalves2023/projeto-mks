import styled from "styled-components";

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    height: 50px;
    margin-left: 80px;
    cursor: default;
    overflow: hidden;

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