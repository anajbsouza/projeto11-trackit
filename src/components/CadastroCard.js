import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function CadastroCard() {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [foto, setFoto] = React.useState("");
    const [carregando, setCarregando] = React.useState(false);
    const [usuario, setUsuario] = React.useState(false);
    
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();
        const body = {"email": email, "name": nome, "image": foto, "password": senha};
        setCarregando(true);
        setUsuario(true);
        console.log(body);
        const url = `${BASE_URL}/auth/sign-up`;
        axios
        .post(url, body)
        .then(res => {
            setCarregando(false);
            navigate("/")})
        .catch(err => {
            alert(err.response.data.message)
            setCarregando(false);
            setUsuario(false);
            });
    }


    return (
        <Container>
            <form onSubmit={cadastrar}>
                <input 
                    type="email" 
                    placeholder="email" 
                    value={email} 
                    data-test="email-input"
                    required
                    onChange={e => setEmail(e.target.value)}
                    //pattern="ˆ\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$"
                    title="Precisa ser um email valido. Exemplo (nome@dominio.com)"
                    disabled={carregando}
                    className={carregando ? "disabled" : ""}

                />
                <input 
                    type="password"
                    placeholder="senha"
                    value={senha}
                    data-test="password-input" 
                    required
                    onChange={e => setSenha(e.target.value)}
                    disabled={carregando}
                    className={carregando ? "disabled" : ""}
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={nome}
                    data-test="user-name-input" 
                    required
                    onChange={e => setNome(e.target.value)}
                    disabled={carregando}
                    className={carregando ? "disabled" : ""}
                />
                <input
                    type="text"
                    placeholder="foto"
                    value={foto}
                    data-test="user-image-input"
                    required
                    onChange={e => setFoto(e.target.value)}
                    //pattern="^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9]+(?:[\-\.][a-z0-9]+)\.[a-z]{2,6}(?:\/.)?$"
                    title="Precisa ser um link de uma imagem válido"
                    disabled={carregando}
                    className={carregando ? "disabled" : ""}
                />
                {carregando ? (
                    <button data-test="signup-btn"><ThreeDots type="ThreeDots" color="#FFFFFF" height={20} width={40} /></button>
                ) : (
                    <button data-test="signup-btn" type="submit" onClick={cadastrar}>Cadastrar</button>
                    
                )}
                <Link to={`/`}>
                    <h3 data-test="login-link">Já tem uma conta? Faça login!</h3>
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
