import axios from 'axios';
import React, {useState} from 'react';
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import UserContext from './UserContext';
import { useContext } from 'react';
import Loading from './Loading';

export default function CardHabitos({habito, setListaHabitos, listaHabitos}) {
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [dias, setDias] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`,
        }
    }

    function postDelete(e, id){
        e.preventDefault();
        axios.delete(`${BASE_URL}/habits/${id}`, {headers: {'Authorization': `Bearer ${token}`}})
        .then(() => {
                console.log("Hábito deletado com sucesso");
            })
        .catch(() => {
                alert("Não foi possível deletar o hábito. Por favor, tente novamente");
            })
    }

    return (
        <>
        {listaHabitos.map((habito) => {
            return (
                <ContainerAdd key={habito.id} habito={habito}>
                    <p>{habito.nome}</p>
                    <IconTrash>
                        <ion-icon onClick={(e) => postDelete(e, card.id)} name="trash-outline"></ion-icon>
                    </IconTrash>
                </ContainerAdd>
            )})}
            <div>
                <ContainerAdd key={`${index}`} checked={dias.includes(index)}>
                    {diasDaSemana.map((dia, index) => {
                        if(dias.includes(index)){
                            return(
                                <BotaoDia background="#CFCFCF" fontColor="white" >{elem.day}</BotaoDia>
                            )
                        }else{
                            return(
                                <BotaoDia background="white" fontColor="#CFCFCF" >{elem.day}</BotaoDia>
                            )
                        }}
                    )}
                </ContainerAdd>
            </div>
        </>
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