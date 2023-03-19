import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Historico({token}) {
    const config = {
        headers: { "Authorization": `Bearer ${token}` }
    };
    return (
        <>
        <Header />
            <Container>
                <Texto>
                    <h1>Histórico</h1>
                    Em breve você poderá ver o histórico dos seus hábitos aqui!
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
        padding-bottom: 17px;
        }
`
