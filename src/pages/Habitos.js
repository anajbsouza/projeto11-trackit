import React from 'react'
import styled from "styled-components";
import NavBar from "../components/NavBar";
import AddHabito from "../components/AddHabito";
import Footer from "../components/Footer";
import axios from 'axios';
//import UserContext from '../components/UserContext';
import { useContext } from 'react';
import { BASE_URL } from "../constants/urls";
import { useState } from 'react';

export default function Habitos({token}) {
    const [listaHabitos, setListaHabitos] = useState([]);
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [diasSelecionados, setDiasSelecionados] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");
    const [habito, setHabito] = useState([]);
    const [botaoSalvar, setBotaoSalvar] = useState('Salvar');
    const [escondido, setEscondido] = useState(true);
    const [addHabito, setAddHabito] = useState(false);
    //const UserContext = useContext(UserContext);
    
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    };
    axios
    .get(`${BASE_URL}/habits`, config)
    .then((res) => {
        setListaHabitos({...listaHabitos, listaHabitos: res.data})
    })
    .catch((err) => {
        console.log(err.response.data.message);
    });

    function adicionarHabito() {
        setEscondido(false);
        setAddHabito(true);
    }

    return (
        <>
        <NavBar />
            <Container>
                <MeusHabitos>
                    <h1>Meus Hábitos</h1>
                    <button>
                        <p onClick={adicionarHabito}>+</p>
                        {adicionarHabito ? <AddHabito /> : null}
                    </button>
                </MeusHabitos>
                {/* <AddHabito /> */}
                <Texto>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Texto>
            </Container>
        <Footer />
        </>
    )
}


const Container = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 530px;
    background-color: #E5E5E5;
    display: flex;
    justify-content: flex-start;
    padding-top: 22px;
    align-items: center;
    flex-direction: column;
    img {
        width: 180px;
        height: 180px;
    }
`;

const Texto = styled.div`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    padding-top: 28px;
`
const MeusHabitos = styled.div`
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