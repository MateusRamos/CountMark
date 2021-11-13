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
export const Wallpaper = styled.View`
    height: 15%;
    flex-direction: row;
    align-items: center;
`;

export const BoxEmpresa = styled.View`
    flex-direction: row;
    background-color: #f7f7f7;
    height: 13%;
    padding-top: 5%;
`;

export const LogoEmpresa = styled.View`
    background-color: #f7f7f7;
    flex-direction: row;
    height: 100%;
    width: 26%;
    padding-left: 6.5%;
`;

export const BoxTitulo = styled.View`
    flex-direction: column;
    background-color: #f7f7f7;
    width: 100%;
    padding-top: 5%;
    font-size: 100%;
    font-weight: bold;
    font-family: Sans-serif;
    padding-left: 1%;
`;

export const Sub1 = styled.View`
    flex-direction: row;
    background-color: #f7f7f7;
    align-items: center;
    height: auto;
    font-weight: normal;
    font-family: Sans-serif;
    font-size: 90%;
    color: red;
`;

export const Sub2 = styled.View`
    flex-direction: row;
    background-color: #f7f7f7;
    padding-left: 1%;
    padding-right: 1%;
    font-weight: normal;
    color: black;
`;

export const Sub3 = styled.View`
    flex-direction: row;
    padding-left: 1%;
    padding-right: 1%;
    color: #FFD710;
    font-weight: bolder;
`;

export const BuscaProdutos = styled.View `
    flex-direction: row;
    width: 85%;
    height: 55%;
    background-color: #f7f7f7;
    margin-top: 3%;
    margin-left: 8%;
    justify-content: center;
    border-color: #858584;
    border-width: 1px;
    border-style: solid;
    align-items: center;
`;

export const TextoBusca = styled.TextInput`
    width: 100%;
    height: 100%;
    padding-left: 2.5%;
    font-size: 100%;
`;

export const BoxBusca = styled.View`
    background-color: #f7f7f7;
    height: 10%;
`;

export const Delimitador = styled.View`
    background-color: #F7F7F7;
    height: 3%;
    align-items: center;
    justify-content: center;
    padding-bottom: 1%;
`;

export const LinhaDelimitador = styled.View`
    height: 1px;
    width: 85%;
    background-color: #c2c2c2;   
`;

export const Itens = styled.Text`
    font-weight: bolder;
    font-size: 100%;
    padding-left: 6.5%;
    padding-top: 6.5%;
    margin-bottom: 8%;
`;

//-----------Lista-----------//
export const BoxProdutos = styled.View`
    align-items: center;
`;

export const ListaProdutos = styled.FlatList`
    width: 95%;
`;

export const BoxEmpresaItem = styled.TouchableOpacity`
    flex-direction: row;
    margin-bottom: 3%;
    padding-top: 3%;
    border-top-width: 1px;
    border-style: solid;
    border-color: #898970;
`;

export const BoxItemDados = styled.View`
    width: 70%;
`;

export const TextoTitulo = styled.Text`
    font-size: 17;
`;

export const TextoDescricao = styled.Text`
    font-size: 11;
    padding-top: 3%;
    padding-bottom: 6%;
`;

export const TextoQuantidade = styled.Text`
    font-size: 10;
`;

export const TextoValor = styled.Text`
    font-weight: bold;
`;

export const BoxItemFoto = styled.View`
    justify-content: center;
    aling-items: center;
`;
