import React from 'react'
import styled from "styled-components";

export default function AddHabito() {
    return (
        <Container>
            <input type="text" placeholder="nome do hábito" />
            <div>
                <BotaoDia><p>D</p></BotaoDia>
                <BotaoDia><p>S</p></BotaoDia>
                <BotaoDia><p>T</p></BotaoDia>
                <BotaoDia><p>Q</p></BotaoDia>
                <BotaoDia><p>Q</p></BotaoDia>
                <BotaoDia><p>S</p></BotaoDia>
                <BotaoDia><p>S</p></BotaoDia>
            </div>
            <ContainerBotoes>
                <BotaoCancelar><p>Cancelar</p></BotaoCancelar>
                <BotaoSalvar><p>Salvar</p></BotaoSalvar>
            </ContainerBotoes>
            
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 18px;
    div {
        display: flex;
        justify-content: flex-start;
    }
    button {
        
    }
`

const BotaoDia = styled.button`
    width: 30px;
		height: 30px;
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		box-sizing: border-box;
		font-size: 20px;
		line-height: 25px;
        margin: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
		&::placeholder{
			width: 54px;
			height: 25px;
			margin-left: 11px;
			font-size: 20px;
			line-height: 25px;
			color: #DBDBDB;
            
        }
        p {
        width: 15px;
        height: 25px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: flex-end;
    
`

const BotaoCancelar = styled.button`
    width: 84px;
    height: 35px;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
        p {
                width: 50px;
                height: 20px;
                left: 274px;
                top: 284px;
                font-size: 16px;
                line-height: 20px;
                text-align: center;
                color: #52B6FF;
            }
`
const BotaoSalvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        width: 50px;
        height: 20px;
        left: 274px;
        top: 284px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }
`