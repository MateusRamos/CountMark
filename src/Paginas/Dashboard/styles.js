import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: black;
`;
//-----------Cabecalho-----------//
export const Cabecalho = styled.View`
    background-color: #f7f7f7;
    height: 10%;
    flex-direction: row;
    align-items: center;
`;

export const ImgLogo = styled.View`
    width: 60%;
    margin-left: 6%;
    margin-right: 8%;
`;

export const BotaoLogin = styled.TouchableOpacity`
    height: 60%;
    width: 22%;
    border-radius: 12px;
    background-color: #18bff0;
    justify-content: center;
    text-align: center;
    margin-letf: 50%;
    color: #f7f7f7;
    font-weight: bold;
    font-family: Sans-serif;
`;
//-----------Busca-----------//
export const Busca = styled.View`
    background-color: #f7f7f7;
    height: 35%;
    justify-content: center;
    align-items: center;
`;

export const TextoSlogan = styled.Text`
    font-weight: bolder;
    font-size: 120%;
    margin-bottom: 3%;
    padding-top: 5%;
`;

export const TextoSubSlogan = styled.Text`
    font-weight: bold;
    color: #858584;
`;

export const EntradaEndereco = styled.View`
    flex-direction: row;
    width: 80%;
    height: 17%;
    background-color: white;
    margin-top: 6%;
    padding-left: 2%;
    border-color: #858584;
    border-width: 1px;
    border-style: solid;
    align-items: center;
`;

export const TextoBusca = styled.TextInput`
    width: 100%;
    height: 100%;
    padding-left: 6%;
`;

export const BotaoBuscar = styled.TouchableOpacity`
    width: 80%;
    height: 17%;
    background-color: #18BFF0;
    margin-top: 3%;
    border-radius: 8px;
    text-align: center;
    font-weight: bolder;
    justify-content: center;
    font-size: 20;
    color: white;
`;
//-----------Destaques-----------//
export const Destaques = styled.View`
    background-color: #f7f7f7;
    width: 100%;
    height: 30%;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 5%;
`;
//-----------Categorias-----------//
export const Categorias = styled.View`
    background-color: green;
    height: 13%;
`;
//-----------MaisProcurados-----------//
export const MaisProcurados = styled.View`
    background-color: pink;
    height: 50%;
`;