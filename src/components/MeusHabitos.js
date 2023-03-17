import React from 'react'
import styled from "styled-components";

export default function MeusHabitos() {
    return (
        <Container>
            <h1>Meus Hábitos</h1>
            <button>
                <p>+</p>
            </button>
        </Container>
    )
}

const Container = styled.div`
    height: 40px;
    width: 340px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        // Meus hábitos
        width: 100%;
        height: 29px;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        }
    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        p {
            width: 16px;
            height: 34px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            text-align: center;
            color: #FFFFFF;
        }
    }
`