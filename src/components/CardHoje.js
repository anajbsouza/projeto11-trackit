import axios from 'axios';
import React, {useState} from 'react';
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import UserContext from './UserContext';
import { useContext } from 'react';
import Loading from './Loading';

export default function AddHabito({setShowAddHabito}) {
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [dias, setDias] = useState([]);
    const [habito, setHabito] = useState("");
    const [listaHabitos, setListaHabitos] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");
    const { userData } = useContext(UserContext);

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`,
        }
    }
    
    const handleDiaClick = (index) => {
        if (dias.includes(index)) {
            setDias(dias.filter((d) => d !== index));
        } else {
            setDias([...dias, index]);
        }
    };
    

    const handleSalvarClick = () => {
        axios
            .post(`${BASE_URL}/habits`, {
                nome: nomeHabito,
                dias: dias.map((dia) => diasDaSemana[dia]),
            }, config)
            .then(() => {
                setListaHabitos([...listaHabitos, habito]);
                setHabito("");
                setNomeHabito("");
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
            onChange={e => setNomeHabito(e.target.value)}
            {...nomeHabito ? <p>{nomeHabito}</p> : null}
        />
        <div>
            {diasDaSemana.map((dia, index) => (
                <BotaoDia key={`${index}`} checked={dias.includes(index)}>
                    <input
                    type="checkbox"
                    name="dia"
                    value={dia}
                    checked={dias.includes(index)}
                    onChange={() => handleDiaClick(index)}
                    />
                    <p>{dia}</p>
                </BotaoDia>
            ))}
        </div>
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
