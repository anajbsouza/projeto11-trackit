import React from 'react'
import styled from "styled-components";
import NavBar from "../components/NavBar";
import MeusHabitos from "../components/MeusHabitos";
import AddHabito from "../components/AddHabito";
import Footer from "../components/Footer";

export default function Habitos() {
    return (
        <>
        <NavBar />
            <Container>
                <MeusHabitos />
                <AddHabito />
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
