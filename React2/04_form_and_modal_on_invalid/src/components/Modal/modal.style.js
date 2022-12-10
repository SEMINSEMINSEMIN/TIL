import styled from "styled-components";

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
`;

export const ModalCard = styled.article`
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: white;
    border-radius: 15px;

    & h1 {
        margin: 0;
        padding: 10px;
        background-color: purple;
        color: white;
        font-weight: bold;
    }

    & div {
        overflow: hidden;
        padding: 15px;
    }

    & div p {
        font-weight: 600;
    }

    & div button {
        float: right;
        padding: 5px 10px;
        border: none;
        margin-top: 40px;
        background-color: purple;
        color: white;
        cursor: pointer;
    }
`;