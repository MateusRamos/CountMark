import React from "react";
import { View, Text, TextInput, Button } from 'react-native';
import styles from "./styles";

import Logo from '../../assets/logo2.png';
import { Container } from "./styles";


export default function Cadastro() {
    return (
        <Container>
            <img src={Logo} width="45%"/>
            <Text>Crie sua conta</Text>
            <TextInput
                placeholder="Nome"
            />
            <TextInput
                placeholder="E-mail"
            />
            <TextInput
                placeholder="Senha"
            />
            <Button
                value="Criar"
                title="Criar"
            />
            <Text>Já tem uma conta? <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('')}>
                Google</Text>
            </Text>
        </Container>
    );
}