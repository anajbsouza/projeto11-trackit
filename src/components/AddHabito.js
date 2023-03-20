import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../constants/urls';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const diasDaSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function AddHabito({ setShowAddHabito, setHabitos }) {
    const [dias, setDias] = useState([]);
    const [nomeHabito, setNomeHabito] = useState('');
    const { userData } = useContext(UserContext);

    const handleDiaClick = (index) => {
        if (dias.includes(index)) {
        setDias(dias.filter((d) => d !== index));
        } else {
        setDias([...dias, index]);
        }
    };

    const handleSalvarClick = () => {
        axios
        .get(`${BASE_URL}/habits`, {
            params: {
            nome: nomeHabito,
            dias: dias.map((dia) => diasDaSemana[dia]),
            },
            headers: {
            Authorization: `Bearer ${userData.token}`,
            },
        })
        .then((response) => {
            setHabitos((habitos) => [
            ...habitos,
            { id: response.data.id, nome: nomeHabito, dias },
            ]);
            setShowAddHabito(false);
            setNomeHabito('');
            setDias([]);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <ContainerAdd>
        <input
            type="text"
            placeholder="nome do hábito"
            value={nomeHabito}
            required
            onChange={(e) => setNomeHabito(e.target.value)}
        />
        <div>
            {diasDaSemana.map((dia, index) => (
            <BotaoDia
                key={`${index}`}
                checked={dias.includes(index)}
                onClick={() => handleDiaClick(index)}
            >
                {dia}
            </BotaoDia>
            ))}
        </div>
        <ContainerBotoes>
            <BotaoCancelar onClick={() => setShowAddHabito(false)}>
            Cancelar
            </BotaoCancelar>
            <BotaoSalvar onClick={handleSalvarClick}>Salvar</BotaoSalvar>
        </ContainerBotoes>
        {nomeHabito && (
            <ContainerAdd>
            <h3>{nomeHabito}</h3>

            {diasDaSemana.map((dia, index) => (
            <BotaoDia
                key={`${index}`}
                checked={dias.includes(index)}
                onClick={() => handleDiaClick(index)}
            >
                {dia}
            </BotaoDia>
            ))}


            {/* <p>Dias selecionados:</p>
            <ul>
                {dias.map((dia) => (
                <li key={dia}>{diasDaSemana[dia]}</li>
                ))}
            </ul> */}
            </ContainerAdd>
        )}
        </ContainerAdd>
    );
}

    const ContainerAdd = styled.div`
    box-sizing: border-box;
    width: 340px;
    height: 180px;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 18px;
    div {
        display: flex;
        justify-content: flex-start;
    }
    `;


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

const BotaoGet = styled.button`
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