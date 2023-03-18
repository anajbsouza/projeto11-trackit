import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import UserContext from './UserContext';
import { useContext } from 'react';

export default function AddHabito() {
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [dias, setDias] = React.useState([]);
    const [habito, setHabito] = React.useState("");
    const { userData, setUserData } = useContext(UserContext);

    const handleDiaClick = (dia) => {
        if (dias.includes(dia)) {
        setDias(dias.filter((d) => d !== dia));
        } else {
        setDias([...dias, dia]);
        }
    };

    return (
        <ContainerAdd>
        <input type="text" placeholder="nome do hábito" />
        <div>
        {diasDaSemana.map((dia, index) => (
            <BotaoDia key={`${dia}-${index}`} checked={dias.includes(dia)}>
                <input
                type="checkbox"
                name="dia"
                value={dia}
                checked={dias.includes(dia)}
                onChange={() => handleDiaClick(dia)}
                />
                <p>{dia}</p>
            </BotaoDia>
        ))}

        </div>
        <ContainerBotoes>
            <BotaoCancelar><p>Cancelar</p></BotaoCancelar>
            <BotaoSalvar><p>Salvar</p></BotaoSalvar>
        </ContainerBotoes>
        </ContainerAdd>
    )
}

const ContainerAdd = styled.div`
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
`

const BotaoDia = styled.label`
    width: 30px;
    height: 30px;
    background: ${props => props.checked ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 25px;
    margin: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    input[type="checkbox"] {
        display: none;
    }

    input[type="checkbox"]:checked + p {
        color: ${props => props.checked ? "#FFFFFF" : "#CFCFCF"};
    }

    p {
        width: 15px;
        height: 25px;
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;


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