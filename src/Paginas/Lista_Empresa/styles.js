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
    font-size: 100%;
    margin-bottom: 2%;
`;  

export const BoxSubtitulo = styled.View`
    flex-direction: row;
    align-items: center;    
`;

export const SubtituloEndereco = styled.Text`
    padding-left: 1%;
    font-size: 90%;
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

export const TituloEmpresas = styled.Text`
    color: #1C1C1C;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 100%;
    margin-left: 10%;
    margin-top: 8%;
    margin-bottom: 2%;
`; 

export const ListaEmpresas = styled.FlatList`
    color: #1C1C1C;

`; 

export const BoxEmpresaItem = styled.View`
    flex-direction: row;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-left: 6%;
`;

export const BoxEmpresaTitulo = styled.View`
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin-left: 3%;
`;

export const TituloItemEmpresas = styled.Text`
    color: #1C1C1C;
    font-size: 90%;
    font-weight: bold;
    margin-bottom: 0.5%;
`;

export const BoxEmpresaDados = styled.View`
    flex-direction: row;
    background-color: white;
`;

export const Nota = styled.Text`
    flex-direction: row;
    color: #FFD710;
    font-weight: bold;
    margin-left: 1%;
    margin-right: 1%;
`;

export const Categoria = styled.Text`
    flex-direction: row;
    margin-left: 1%;
    margin-right: 1%;
`;
export const Distancia = styled.Text`
    flex-direction: row;
    margin-left: 1%;
`;