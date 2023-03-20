import React, {useState} from 'react';
import styled from "styled-components";
import logo_completa from "../imagens/logo-completa.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function Login({setToken}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [usuario, setUsuario] = useState(false);
    const navigate = useNavigate();

    function logar(e) {
        e.preventDefault();
        const body = {"email": email, "password": senha};
        setCarregando(true);
        setUsuario(true);
        console.log(body);
        const url = `${BASE_URL}/auth/login`;
        axios
        .post(url, body)
        .then(res => {
            setCarregando(false);
            setToken(res.data.token);
            console.log(res.data.token)
            navigate("/hoje")})
        .catch(err => {
            alert(err.response.data.message)
            setCarregando(false);
            setUsuario(false);
            });
    }

    return (
        <Container>
            <img src={logo_completa} alt="logo" />
            <ContainerLogin>
                <form onSubmit={logar}>
                    <input 
                        type="email" 
                        placeholder="email"
                        value={email} 
                        data-test="email-input"
                        required
                        onChange={e => setEmail(e.target.value)}
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

                        //criar estado para usuario, se tiver carregando, vai mudar de cor e ficar inalteravel
                    />
                    {carregando ? (
                        <button 
                            data-test="login-btn"
                            disabled={carregando}>
                            <ThreeDots type="ThreeDots" color="#FFFFFF" height={20} width={40} />
                        </button>
                    ) : (
                        <button data-test="login-btn" type="submit" onClick={logar}>Entrar</button>
                        
                    )}
                    
                    <Link to={`/cadastro`}>
                        <h3 data-test="signup-link">Não tem uma conta? Cadastre-se!</h3>
                    </Link>
                </form>
            </ContainerLogin>
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


const ContainerLogin = styled.div`
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