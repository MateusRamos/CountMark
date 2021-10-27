import React from 'react';
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`;

export const BoxTopo = styled.View`
    background-color: #00c0f2;
    height: 35%;
    justify-content: center;
    align-items: center;
`;

export const NomeUsuario = styled.Text`
    color: #f9f9f9;
    font-size: 145%;
    padding-top: 4%;
    font-weight: bold;
    text-transform: uppercase;
    font-family: arial;
`;

export const BoxMenu = styled.View`
    flex-direction: column;
    background-color: #F7F7F7;
    height: 65%;
`;

export const Dados = styled.View`
    flex-direction: row;
    height: 20%;
    border-bottom-width: 1px;
    border-color: #00c0f2;
    align-items: center;
    padding: 6%;
`;

export const Pedidos = styled.View`
    flex-direction: row;
    height: 20%;
    border-bottom-width: 1px;
    border-color: #00c0f2;
    align-items: center;
    padding: 6%;
`;

export const Cupons = styled.View`
    flex-direction: row;
    height: 20%;
    border-bottom-width: 1px;
    border-color: #00c0f2;
    align-items: center;
    padding: 6%;
`;

export const Favoritos = styled.View`
    flex-direction: row;
    height: 20%;
    border-bottom-width: 1px;
    border-color: #00c0f2;
    align-items: center;
    padding: 6%;
`;

export const Configuracoes = styled.View`
    flex-direction: row;
    height: 20%;
    border-color: #00c0f2;
    align-items: center;
    padding: 6%;
`;

export const TextoMenu = styled.Text`
    color: #000000;
    font-size: 115%;
    padding-top: 4%;
    padding-left: 8%;
    text-transform: uppercase;
    font-family: arial;
`;