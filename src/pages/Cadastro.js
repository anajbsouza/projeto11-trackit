import React from 'react';
import styled from "styled-components";
import logo_completa from "../imagens/logo-completa.svg";
import CadastroCard from "../components/CadastroCard";

export default function Login() {
    return (
        <Container>
            <img src={logo_completa} alt="logo" />
            <CadastroCard />
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 667px;
    background-color: #f1f1ff;
    display: flex;
    justify-content: flex-start;
    padding-top: 70px;
    align-items: center;
    flex-direction: column;
    img {
        width: 180px;
        height: 180px;
    }
`;
