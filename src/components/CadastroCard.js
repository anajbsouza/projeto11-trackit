import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
//import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CadastroCard() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [foto, setFoto] = React.useState("");
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        const body = { email, senha, nome, foto };
        console.log(body);
        const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`;
        axios
        .post(url, body)
        .then(res => navigate("/"))
        .catch(err => alert(err.response.data.message));
    }


    return (
        <Container>
            <input 
                type="text" 
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
            <input
                type="text"
                placeholder="nome"
                value={nome}
                required
                onChange={e => setNome(e.target.value)}
            />
            <input
                type="text"
                placeholder="foto"
                value={foto}
                required
                onChange={e => setFoto(e.target.value)}
            />
            <button onClick={cadastrar}>Cadastrar</button>
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
