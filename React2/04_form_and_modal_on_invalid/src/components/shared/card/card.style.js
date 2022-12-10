import styled from "styled-components";

export const CardCont = styled.div`
    width: 80%;
    padding: 20px;
    margin: 20px auto;
    border-radius: 15px;
    background-color: white;

    & label{
        display: block;
        font-weight: bold;
    }

    & label:nth-child(2) {
        margin: 10px 0 10px 0;
    }

    & label input {
        width: 100%;
    }

    & button {
        padding: 5px 10px;
        background-color: purple;
        color: white;
    }
`