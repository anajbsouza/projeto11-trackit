import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from './UserContext';
import logo_simplificada from '../imagens/logo-simplificada.svg';

export default function NavBar() {
    const { foto } = useContext(UserContext);

    return (
        <Container>
            <img src={logo_simplificada} alt='logo simplificada' />
            <Perfil src={foto} />
        </Container>
    );
}

const Container = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 70px;
    left: 0px;
    top: 0px;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    padding: 0 18px;
    align-items: center;
    flex-direction: row;
    img {
        width: 97px;
        height: 49px;
    }
`;

const Perfil = styled.div`
    width: 51px;
    height: 51px;
    left: 306px;
    top: 9px;
    background-image: url(${props => props.foto});
    background-size: cover;
    border-radius: 98.5px;
`;
