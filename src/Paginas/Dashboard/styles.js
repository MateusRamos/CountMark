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
    background-color: pink;
    height: 35%;
    justify-content: center;
    align-items: center;
`;

export const TextoSlogan = styled.Text`
    font-weight: bolder;
    font-size: 120%;
    margin-bottom: 3%;
`;

export const TextoSubSlogan = styled.Text`
    font-weight: bold;
    color: #858584;
`;

export const EntradaEndereco = styled.TextInput`

`;

export const BotaoBuscar = styled.TouchableOpacity`

`;
//-----------Destaques-----------//
export const Destaques = styled.View`
    background-color: blue;
    height: 30%;
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