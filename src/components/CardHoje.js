import axios from 'axios';
import React, { useState, useContext } from 'react';
import styled from "styled-components";
import UserContext from './UserContext';
import { BASE_URL } from "../constants/urls";

export default function HabitItem({ habit }) {
    const { userData } = useContext(UserContext);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDeleteHabit = () => {
    axios
        .delete(`${BASE_URL}/habits/${habit.id}`, {
        headers: {
            Authorization: `Bearer ${userData.token}`,
        },
        })
        .then(() => {
        // Refresh the list of habits after deleting the habit
        })
        .catch((error) => {
        console.error(error);
        });
    };

    return (
    <HabitItemContainer>
        <HabitName>{habit.name}</HabitName>
        <DaysContainer>
        {habit.days.map((day, index) => (
            <Day key={`${index}`} checked={day}>
            {day[0]}
            </Day>
        ))}
        </DaysContainer>
        <DeleteButton onClick={() => setConfirmDelete(true)}>
        Deletar
        </DeleteButton>
        {confirmDelete && (
        <ConfirmDeleteContainer>
            <ConfirmDeleteMessage>
            Deseja deletar o hábito {habit.name}?
            </ConfirmDeleteMessage>
            <ConfirmDeleteButtonsContainer>
            <ConfirmDeleteButton onClick={() => setConfirmDelete(false)}>
                Cancelar
            </ConfirmDeleteButton>
            <ConfirmDeleteButton onClick={handleDeleteHabit}>
                Deletar
            </ConfirmDeleteButton>
            </ConfirmDeleteButtonsContainer>
        </ConfirmDeleteContainer>
        )}
    </HabitItemContainer>
    );
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