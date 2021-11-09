import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
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
    height: 30%;
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
    background-color: #f7f7f7;
    height: 15%;
`;

export const ListaCategorias = styled.FlatList`
    width: 100%;
    height: 100%;
`;

export const BoxCorretiva = styled.View`
    width: 20;
`;

export const BoxCategoria = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10%;
`;

export const TextoNomeCategoria = styled.Text`
    text-transform: uppercase;
    color: black;
    font-size: 10;
    font-weight: bold;
`;
//-----------Delimitador-----------//
export const Delimitador = styled.View`
    background-color: #F7F7F7;
    height: 3%;
    align-items: center;
    justify-content: center;
    padding-bottom: 1%;
`;

export const LinhaDelimitador = styled.View`
    height: 7%;
    width: 85%;
    background-color: #c2c2c2;   
`;
//-----------MaisProcurados-----------//
export const MaisProcurados = styled.View`
    height: 50%;
`;

export const ListaProcurados = styled.FlatList`
    height: 100%;
    width: 100%
`;

export const BoxItemEmpresa = styled.TouchableOpacity`
    width: 40%;
    height: 87%;
    background-color: white;
    margin-left: 6%;
    margin-bottom: 5%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-style: solid;
    border-color: #c2c2c2;
    border-width: 1px;
    border-radius: 10px
`;

export const BoxDadosEmpresa = styled.View`
    width: 50%;
    aling-items:center;
`;

export const TextoNomeEmpresa = styled.Text`
    font-size: 8;
    font-weight: bold;
    text-transform: uppercase;
`;

export const TextoCategoriaEmpresa = styled.Text`
    font-size: 7;
`;