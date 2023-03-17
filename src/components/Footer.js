import React from 'react'
import styled from "styled-components";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    const percentage = 50;
    return (
        <Container>
            <Link to={"/habitos"}><Hs>Hábitos</Hs></Link>
            <Link to={"/hoje"}><Hoje><CircularProgressbar value={percentage} text={`Hoje`}/></Hoje></Link>
            <Link to={"/historico"}><Hs>Histórico</Hs></Link>
        </Container>
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