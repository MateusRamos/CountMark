import React from "react";
import { View, Text, TextInput, Button } from 'react-native';
import styles from "./styles";

import { Container } from "./styles";
import Logo from "../../assets/logo2.png";

export default function Login() {
    return(
    <Container> 
        <img src={Logo} width="45%"/>
        <TextInput
        placeholder="E-mail"/>
        <TextInput
        placeholder="Senha"/>
        <Button
            title="Login"
        />
        <Text>Ainda não tem uma conta?   
            <Text style={{color: 'blue'}}onPress={() => Linking.openURL('')}>  Criar Conta</Text>
        </Text>
    </Container>
    )
}
