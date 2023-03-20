import React from 'react'
import styled from "styled-components";
import Header from "../components/Header";
import AddHabito from "../components/AddHabito";
import Footer from "../components/Footer";
import axios from 'axios';
import { BASE_URL } from "../constants/urls";
import { useState } from 'react';
import { useEffect } from 'react';
import Trash from "../imagens/trash-outline.svg";

export default function Habitos({token}) {
    const [listaHabitos, setListaHabitos] = useState([]);
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [showAddHabito, setShowAddHabito] = useState(false);
    

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${token}` }
        };
        axios
        .get(`${BASE_URL}/habits`, config)
        .then((res) => {
            setListaHabitos(res.data)
        })
        .catch((err) => {
            console.log(err.response.data.message);
        });
    }, [token]);
    
    return (
        <>
        <Header />
            <Container>
                <HabitosWrapper>
                    <MeusHabitos>
                        <h1>Meus Hábitos</h1>
                        <button onClick={() => {setShowAddHabito(true)}}>
                            <p data-test="habit-create-btn">+</p>
                        </button>
                    </MeusHabitos>
                    {showAddHabito && <AddHabito setShowAddHabito={setShowAddHabito}/>}
                    {listaHabitos.length === 0 ? (
                        <Texto>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </Texto>
                    ) : (
                        <HabitosList>
                            {listaHabitos.map((habito) => (
                                <Habito key={habito.id}>
                                    <div>
                                        <Titulo>{habito.name}</Titulo>
                                        <Dias>
                                            {diasDaSemana.map((dia, index) => (
                                                <Dia
                                                    key={index}
                                                    habitId={habito.id}
                                                    weekday={index}
                                                    done={habito.doneDays.includes(index)}
                                                >
                                                    {dia}
                                                </Dia>
                                            ))}
                                        </Dias>
                                    </div>
                                    <TrashIcon />
                                </Habito>
                            ))}
                        </HabitosList>
                    )}
                </HabitosWrapper>
                
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

const HabitosWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
    padding-top: 28px;
`
const MeusHabitos = styled.div`
    height: 40px;
    width: 340px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
        }
    button {
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        p {
            width: 16px;
            height: 34px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 26.976px;
            line-height: 34px;
            text-align: center;
            color: #FFFFFF;
        }
    }
`

const HabitosList = styled.ul`
    width: 340px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    list-style: none;
`

const Habito = styled.li`
    width: 100%;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 18px;
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
`

const Titulo = styled.p`
    width: 100%;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
`

const Dias = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Dia = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
    color: ${props => props.done ? "#FFFFFF" : "#DBDBDB"}; 
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TrashIcon = styled(Trash)`
    width: 13px;
    height: 15px;
    color: #666666;
`
