import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const navigate = useNavigate();

    function logar(e) {
        e.preventDefault();
        const body = {"email": email, "password": senha};
        console.log(body);
        const url = `${BASE_URL}/auth/login`;
        axios
        .post(url, body)
        .then(res => navigate("/hoje"))
        .catch(err => alert(err.response.data.message));
    }
    return (
        <Container>
            <form onSubmit={logar}>
                <input 
                    type="email" 
                    placeholder="email"
                    value={email} 
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="senha" 
                    value={senha}
                    required
                    onChange={e => setSenha(e.target.value)}
                />
                <button type="submit" onClick={logar}>Entrar</button>
                    <Link to={`/cadastro`}>
                        <h3>Não tem uma conta? Cadastre-se!</h3>
                    </Link>
            </form>
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
