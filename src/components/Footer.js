import React from 'react'
import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

export default function Footer({listaHabitosHoje}) {
    const percentage = listaHabitosHoje/100;
    return (
        <span data-test="menu">
            <Container>
                <Link to={"/habitos"} data-test="habit-link"><Hs>Hábitos</Hs></Link>
                <Link to={"/hoje"} data-test="today-link"><Hoje><CircularProgressbar value={percentage} text={`Hoje`}/></Hoje></Link>
                <Link to={"/historico"} data-test="history-link"><Hs>Histórico</Hs></Link>
            </Container>
        </span>
    )
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    left: 0px;
    //position: fixed;
    bottom: 0px;
    background-color: #f1f1ff;
    display: flex;
    justify-content: space-around;
`
const Hs = styled.button`
    background: #f1f1ff;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    border: none;
`

const Hoje = styled.button`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    top: 570px;
    left: 142px;
    border: none;
    position: absolute;
    z-index: 2;
    background: #52B6FF;
    color: #FFFFFF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
`