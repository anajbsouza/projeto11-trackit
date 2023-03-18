import React from 'react'
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {BASE_URL} from "../constants/urls";
import axios from 'axios';
import { useState } from 'react';

export default function Hoje({token}) {
    const [listaHabitosHoje, setListaHabitosHoje] = useState([]);
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    };
    axios
    .get(`${BASE_URL}/habits/today`, config)
    .then((res) => {
        setListaHabitosHoje({...listaHabitosHoje, listaHabitosHoje: res.data})
    })
    .catch((err) => {
        console.log(err.response.data.message);
    });
    return (
        <>
        <NavBar />
            <Container>
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
