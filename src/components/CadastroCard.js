import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function CadastroCard() {
    return (
        <Container>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="senha" />
            <input type="text" placeholder="nome" />
            <input type="text" placeholder="foto" />
            <button>Cadastrar</button>
            <Link to={`/`}>
                <h3>Já tem uma conta? Faça login!</h3>
            </Link>
            
        </Container>
    )
}

const Container = styled.div`
    width: 303px;
    height: 150px;
    h3 {
        font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
        width: 100%;
        height: 17px;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #126BA5;
        text-decoration: underline;
        display: flex;
        justify-content: center;
        padding-top: 25px;
    }
    button {
		width: 303px;
		height: 45px;
		background: #52B6FF;
		border-radius: 5px;
		border-style: none;
		font-size: 20px;
		line-height: 26px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #FFFFFF;
		padding: 0 20px;
	}
`
