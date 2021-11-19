import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #FFFFFF;
    height: 100%;
    width: 100%;
`;

export const BoxApresentacao = styled.View`
    height: 40%;
    widht: 100%;
    align-items: center;
    justify-content: end;
    padding-bottom: 3%;
`;

export const TextoTituloApresentacao = styled.Text`
    color: #282828;
    font-size: 30;
    font-weight: bold;
    padding-bottom: 1%;
    padding-top: 3%;
`;

export const TextoSubtituloApresentacao = styled.Text`
    color: #A9A9A9;
    font-size: 16;
`;

export const BoxLogin = styled.View`
    height: 30%;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const TextoTituloLogin = styled.Text`
    width: 60%;
    color: #18bff0;
    font-size: 23;
    text-align: center;
`;

export const Delimitador = styled.View`
    background-color: #18bff0;
    height: 1px;
    width: 65%;
    border-radius: 0;
    margin-bottom: 12%;
    margin-top: 1%;
`;

export const TextoEntradaEmail = styled.TextInput`
    height: 10%;
    width: 80%;
    font-color: #A9A9A9;
    border-bottom-width: 1px;
    border-color: #18bff0;
    border-styled: solid;
    margin-bottom: 7%;
`;

export const TextoEntradaSenha = styled.TextInput`
    height: 10%;
    width: 80%;
    font-color: #A9A9A9;
    border-bottom-width: 1px;
    border-color: #18bff0;
    border-styled: solid;
    margin-bottom: 5%;
`;

export const BoxSubmit = styled.View`
    height: 30%;
    width: 100%;
    align-items: center;
`;

export const BotaoSubmit = styled.TouchableOpacity`
    height: 22%;
    width: 62%;
    background-color: #18bff0;
    align-items: center;
    justify-content: center;
    font-size: 20;
    font-weight: bold;
    color: #FFFFFF;
    border-radius: 34;
`;

export const TextoSubmit = styled.Text`
    padding-top: 3%;
    color: #A9A9A9;
`;

export const TextoInputSubmit = styled.Text`
    color: #808080;
    margin-left: 5px;
    text-decoration: underline #808080;
`;