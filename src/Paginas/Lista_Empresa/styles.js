import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Cabecalho = styled.View`
    flex-direction: row;
    background-color: #e2e3e3;
    height: 15%;
`;

export const BoxFotoMapa = styled.View`
    flex-direction: column;
    width: 30%;
    justify-content: center;
    align-items: center;
`;

export const BoxEndereco = styled.View`
    flex-direction: column;
    justify-content: center;
    width: 70%;
    padding-left: 3%;
`;

export const TituloEndereco = styled.Text`
    color: #696969;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 90%;
    margin-bottom: 2%;
`;  

export const BoxSubtitulo = styled.View`
    flex-direction: row;
    align-items: center;    
`;

export const SubtituloEndereco = styled.Text`
    padding-left: 1%;
    font-size: 70%;
    font-weight: bold;
`;

export const BoxFiltro = styled.View`
    flex-direction: row;
    height: 5%;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
`;

export const BotaoAlfabetica = styled.TouchableOpacity`
    border-color: #696969;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    width: 25%;
    height: 55%;
    justify-content: center;
    align-items: center;
    color: #696969;
    font-size: 85%;
`;

export const BotaoPreco = styled.TouchableOpacity`
    border-color: #696969;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    width: 25%;
    height: 55%;
    justify-content: center;
    align-items: center;
    color: #696969;
    font-size: 85%;
`;

export const BotaoVendidos = styled.TouchableOpacity`
    border-color: #696969;
    border-width: 1px;
    border-style: solid;
    border-radius: 12px;
    width: 25%;
    height: 55%;
    justify-content: center;
    align-items: center;
    color: #696969;
    font-size: 85%;
`;

export const BoxEmpresas = styled.View`
    background-color: white;
    height: 80%;
`;